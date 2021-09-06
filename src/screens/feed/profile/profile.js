import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback, SafeAreaView, StyleSheet} from 'react-native';

import {layout, text, button, float_btn} from './style_profile';
import {DownBracketBlack,DownBracket, BtnWriteFeed} from 'Asset/image';

import BelongedPetList from './subcomponent/belongedPetList';
import ProfileInfo from './subcomponent/profileInfo';

import DP from 'Screens/dp';
import SvgWrapper,{SvgWrap} from 'Screens/svgwrapper';

import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import Dropdown from 'Screens/common/dropdown';
import FeedList from './subcomponent/feedlist';
import VolunteerList from './subcomponent/volunteerList';
import profiledata from './profiledata.json';
import axios from 'axios';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {serveruri, cookieReset} from 'Screens/server';
import ProfileContext from './profilecontext';
import {BoxShadow} from 'react-native-shadow';

export default Profile = ({navigation, route}) => {
	const [data, setData] = React.useState({user: {}, postList: [], isFollowed:false});
	const FEED = 1;
	const TAG = 2;
	const ACTIVITY = 3;

	React.useEffect(() => {
		navigation.setOptions({
			title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.',
		});
	}, []);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', e => {
			getProfile();
		});
		return unsubscribe;
	}, [navigation, route]);


	const getProfile = async () => {
		let token = await AsyncStorage.getItem('token');
		if (token) {
			try {
				await cookieReset(token);

				let result = await axios.post(serveruri + '/user/getUserProfile', {user: route.params?.user});
				console.log('getUserProfile');
				// console.log(result.data.msg);
				setData(result.data.msg);
			} catch (err) {
				alert(err);
			}
		}
	};

	const [tab, setTab] = useState(FEED);

	const [animal, setAnimal] = useState(false);
	const animallist = useSharedValue(0);

	const animalAni = useAnimatedStyle(() => {
		return {
			height: animallist.value * DP,
		};
	});

	const rotate = useSharedValue(0);
	const rotateAni = useAnimatedStyle(() => {
		return {
			transform: [{rotate: `${rotate.value}deg`}],
		};
	});

	const tabVal = useSharedValue(0);
	const tabAni = useAnimatedStyle(() => {
		return {
			height: tabVal.value * DP,
		};
	});

	const followBtnAnimation = useSharedValue(0);
	const followBtnAniStyle = useAnimatedStyle(() => ({
		height:(followBtnAnimation.value * 300 + 60)*DP
	}));
	const followBtnItemListStyle = useAnimatedStyle(()=>({
		transform:[{scaleY:followBtnAnimation.value}]
	}));
	const followBtnBracketStyle = useAnimatedStyle(()=>({
		transform:[{rotate:`${followBtnAnimation.value*180}deg`}]
	}));

	const moveToWrite = () => {
		navigation.navigate('WriteFeed', {screen: 'writeFeed', params: {navfrom: 'Profile'}, merge: true});
	};

	const petListClose = () => {
		setAnimal(!animal);
		animallist.value = withTiming(0);
		rotate.value = withTiming(0, {duration: 300});
	}

	const petListOpen = () => {
		setAnimal(!animal);
		animallist.value = withTiming(220);
		rotate.value = withSpring(180);
	}

	const petBtnClick = () => {
		if (!animal) {
			petListOpen();
		} else {
			petListClose();
		}
	}

	const onTabFeed = () => {
		if (FEED!==tab) setTab(FEED);
		tabVal.value = withTiming(0,{duration:300});//보호활동 리스트 닫음
		petListClose();
	}

	const onTabTag = () => {
		if (TAG!==tab) setTab(TAG);
		tabVal.value = withTiming(0,{duration:300});
		petListClose();
	}

	const onTabActivity = () => {
		if (ACTIVITY!==tab) setTab(ACTIVITY);
		tabVal.value = withTiming(402,{duration:300});//보호활동 리스트 열기
		petListClose();
	}
	
	const onFeedScroll = () => {
		if(animal)petListClose();
		if(tabVal.value!==0)tabVal.value = withTiming(0,{duration:300});
	}

	return (
		<SafeAreaView style={layout.container}>
			<ProfileInfo
				// data={profiledata.profile}
				data={data.user}
			/>

			{/* <SocialButton style={socialBtnLocation}/> */}
			<View style={[layout.profileButtonContainer]}>
				<Dropdown
					// style={{marginRight:70*DP}}
					style={[button.followButton,button.shadow,!data.isFollowed&&{backgroundColor:'#fff'}]}
					dropdownContainerStyle={[button.followButtonDropDown,!data.isFollowed&&{backgroundColor:'#fff'},button.shadow,{elevation:3},followBtnAniStyle]}
					data={['즐겨찾기 추가', '소식받기', '차단', data.isFollowed?'팔로우 취소':'팔로우']}
					// onSelect={selectAreaCode}
					dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
					dropItemTxtStyle={[text.regular28cjk,data.isFollowed?text.white:{color:'black'}]}
					listBackgroundStyle={[{height: 240 * DP,marginTop:60*DP},followBtnItemListStyle]}
					listContainerStyle={{height:240*DP,justifyContent:'space-between',alignItems:'center'}}
					onSelect={(e)=>{alert(e)}}
					onSelectNotClose={true}
					onOpen={()=>{followBtnAnimation.value=withSpring(1,{duration:300})}}
					onClose={()=>{followBtnAnimation.value=withTiming(0,{duration:300})}}
					animation
					component={
						<>
							<Text style={[text.regular24cjk,data.isFollowed?text.white:{color:'#000'}]}>{data.isFollowed?'팔로우 중':'팔로우'}</Text>
							<SvgWrapper style={[button.followButtonBracketsize,followBtnBracketStyle]} svg={<DownBracket fill={data.isFollowed?'#fff':'#000'}/>} />
						</>
					}
				/>
				<ProfileBtn
					onPress={petBtnClick}
					rotateAni={rotateAni}
				/>
			</View>

			<Animated.View style={[animalAni]}>
				<BelongedPetList data={profiledata.profile.belonged_pets} />
			</Animated.View>

			<View style={layout.tabarea}>
				<TabMenu
					onPress={onTabFeed}
					label="피드"
					selected={tab===FEED}
				/>
				<TabMenu
					onPress={onTabTag}
					label="테그된 피드"
					selected={tab===TAG}
				/>
				<TabMenu
					onPress={onTabActivity}
					label="보호활동"
					selected={tab===ACTIVITY}
				/>
			</View>

			<Animated.View style={[layout.volunteeractivity, tabAni]}>
				<VolunteerList data={profiledata.profile.volunteeractivity} />
			</Animated.View>

			<FeedList data={data.postList} onScrollBeginDrag={onFeedScroll}/>

			<View style={[float_btn.btn_write_shadow]} />

			<TouchableWithoutFeedback onPress={moveToWrite}>
				<View style={float_btn.btn_write}>
					<SvgWrapper style={{width: 70 * DP, height: 70 * DP}} svg={<BtnWriteFeed fill="#fff" />} />
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

const TabMenu = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[layout.tabItem, props.selected ? layout.tabcolor : layout.white]}>
				<Text style={props.selected ? [text.bold28, text.white] : [text.regular28cjk, text.gray]}>{props.label}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const ProfileBtn = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[button.profileButton, button.shadow]}>
				<Text style={text.regular24cjk}>반려 동물</Text>
				<SvgWrapper style={[button.profileButtonBracketsize, props.rotateAni]} svg={<DownBracketBlack />} />
			</View>
		</TouchableWithoutFeedback>
	);
};

