import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {MeatballIcon, DownBracketGray, MeIcon} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {lo, userinfo, txt, btn} from './style_post';
import PostComment from './postcomment';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import {loginInfo} from 'Screens/login/login';
import Dropdown from 'Screens/common/dropdown';

export default PostContents = props => {
	// export default Post = props => {
	const isMe = loginInfo.user_id === props.data.user;
	const nav = useNavigation();
	const route = useRoute();
	const [showAllContents, setShowAllContents] = React.useState(false);
	const showWholeContents = () => {
		setShowAllContents(true);
	};

	const moveToProfile = () => {
		console.log(props.data);
		nav.push('Profile', {user_id: props.data.user, user_nickname: props.data.user_nickname});
	};

	const meatBallAnimation = useSharedValue(0);
	const meatBallDropAni = useAnimatedStyle(() => ({
		height: meatBallAnimation.value * (isMe?360:160) * DP,
	}));
	const meatBallDropListAni = useAnimatedStyle(() => ({
		transform: [{scaleY: meatBallAnimation.value}],
	}));

	const selectMeatBall = (e) => {
		switch(e){
			case '수정':
				nav.navigate('WriteFeed', {screen: 'editFeed', params: {navfrom: route.name, editData:props.data, content:props.data.content}, merge: true});
				break;
			
		}
		console.log(e);
	}

	return (
		<>
			<View style={[lo.cntr_info_user]}>
				<TouchableWithoutFeedback onPress={moveToProfile}>
					<View style={userinfo.cntr_info_user}>
						<FastImage
							style={userinfo.photo}
							source={{
								uri: props.data.photo_user,
							}}
						/>
						<View style={userinfo.grp_info}>
							<Text style={txt.noto28b}>{props.data.user_nickname}</Text>
							<Text style={[txt.noto24r, txt.gray]}>{props.data.location}에서</Text>
						</View>
						<View style={userinfo.memark}>{isMe &&<SvgWrap svg={<MeIcon/>}/>}</View>
					</View>
				</TouchableWithoutFeedback>

				<Dropdown
					style={userinfo.meatBallMenu}
					dropdownContainerStyle={[meatBallDropAni,userinfo.shadow,userinfo.meatballDropdown,{backgroundColor:'#FFF'}]}
					data={isMe?['링크복사', '공유하기', '댓글 기능 해제', '수정', '삭제']:['링크복사','공유하기']}
					renderItem={({item}) => (
						<View style={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}>
							<Text style={[txt.noto28r, item === '삭제' && txt.red]}>{item}</Text>
						</View>
					)}
					listBackgroundStyle={[{height:isMe?300*DP:110*DP},userinfo.meatballListBackGround, meatBallDropListAni]}
					listContainerStyle={[{height:isMe?300*DP:110*DP},userinfo.meatballListContainer]}
					onSelect={selectMeatBall}
					onSelectNotClose={true}
					onOpen={() => {
						meatBallAnimation.value = withTiming(1, {duration: 300});
					}}
					onClose={() => {
						meatBallAnimation.value = withTiming(0, {duration: 300});
					}}
					animation
					component={<SvgWrapper style={userinfo.meatBallMenu} svg={<MeatballIcon />} />}
				/>
			</View>

			<View style={[lo.cntr_txt, showAllContents ? {} : {height: 60 * DP}]}>
				<Text style={[txt.noto28r, txt.gray]}>{props.data.content}</Text>
				{/* <TxtContainHash data={props.data.content}/> */}
			</View>
			<View style={lo.cntr_txt_footer}>
				<Text style={[txt.noto24r, txt.gray]}>{props.data.time}</Text>

				{!showAllContents && (
					<TouchableWithoutFeedback onPress={showWholeContents}>
						<View style={btn.btn_moreContent}>
							<Text style={[txt.noto24r, txt.gray, {marginRight: 14 * DP}]}>더보기</Text>
							<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketGray />} />
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>
		</>
	);
};

PostContents.defaultProps = {
	onLayout: e => {},
	contentRef: ref => {},
};
