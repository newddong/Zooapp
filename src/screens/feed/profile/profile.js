import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback,SafeAreaView,StyleSheet} from 'react-native';

import {layout, text, button} from './style_profile';
import {DownBracketBlack,BtnWriteFeed} from 'Asset/image';

import BelongedPetList from './subcomponent/belongedPetList';
import SocialButton from './subcomponent/socialButton';
import ProfileInfo from './subcomponent/profileInfo';

import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

import FeedList from './subcomponent/feedlist';
import VolunteerList from './subcomponent/volunteerList';
import profiledata from './profiledata.json';

export default Profile = ({navigation}) => {
	const [tab, setTab] = useState(true);

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

	const socialBtnLocationValue = useSharedValue(0);
	const socialBtnLocation = useAnimatedStyle(() => ({
		top: socialBtnLocationValue.value,
	}));

	return (
		<SafeAreaView style={layout.container}>
			<ProfileInfo
				data={profiledata.profile}
			/>
			<SocialButton style={socialBtnLocation}/>
			<View style={[layout.profileButtonContainer]} onLayout={(e)=>{socialBtnLocationValue.value=withTiming(e.nativeEvent.layout.y+40*DP,{duration:0})}}>
				<ProfileBtn
					onPress={() => {
						if (!animal) {
							console.log('clicked');
							setAnimal(!animal);
							animallist.value = withTiming(220);
							rotate.value = withSpring(180);
						} else {
							console.log('retrieved');
							setAnimal(!animal);
							animallist.value = withTiming(0);
							rotate.value = withTiming(0, {duration: 300});
						}
					}}
					rotateAni={rotateAni}
				/>
			</View>

			<Animated.View style={[animalAni]}>
				<BelongedPetList data={profiledata.profile.belonged_pets}/>
			</Animated.View>

			<View style={layout.tabarea}>
				<TabMenu
					onPress={() => {
						if (!tab) setTab(!tab);
						tabVal.value = withTiming(0);
					}}
					label="피드"
					selected={tab}
				/>
				<TabMenu
					onPress={() => {
						if (tab) setTab(!tab);
						tabVal.value = withTiming(402);
					}}
					label="보호활동"
					selected={!tab}
				/>
			</View>

			<Animated.View style={[layout.volunteeractivity, tabAni]}>
				<VolunteerList data={profiledata.profile.volunteeractivity}/>
			</Animated.View>

			<FeedList data={profiledata.profile.feeds}/>

			<View style={[float_btn.btn_write_shadow]}/>
			<TouchableWithoutFeedback onPress={()=>{navigation.push('WriteFeed')}}>
				<View style={float_btn.btn_write}>
				<SvgWrapper style={{width:70*DP,height:70*DP}} svg={<BtnWriteFeed fill='#fff'/>}/>
				</View>
			</TouchableWithoutFeedback>

		</SafeAreaView>
	);
};

const TabMenu = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[layout.tabItem, props.selected ? layout.tabcolor : layout.white]}>
				<Text style={props.selected ? [text.bold28, text.white] : [text.regular28cjk, text.gray]}>
					{props.label}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const ProfileBtn = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[button.profileButton, button.shadow]}>
				<Text style={text.regular24cjk}>반려 동물</Text>
				<SvgWrapper
					style={[button.profileButtonBracketsize, props.rotateAni]}
					svg={<DownBracketBlack />}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const float_btn = StyleSheet.create({
	btn_write:{
		position:'absolute',
		width:70*DP,
		height:70*DP,
		bottom:20*DP,
		right:20*DP,
	},
	btn_write_shadow:{
		position:'absolute',
		width:71*DP,
		height:71*DP,
		bottom:18*DP,
		right:18*DP,
		backgroundColor:'#767676',
		borderRadius:70*DP,
		opacity:0.3,
	},
});