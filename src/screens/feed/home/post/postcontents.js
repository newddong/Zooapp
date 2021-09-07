import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {MeatballIcon, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {lo, userinfo, txt, btn} from './style_post';
import PostComment from './postcomment';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

export default PostContents = props => {
	// export default Post = props => {
	const nav = useNavigation();
	const [showAllContents, setShowAllContents] = React.useState(false);
	const showWholeContents = () => {
		setShowAllContents(true);
	};

	const moveToProfile = () => {
		nav.push('Profile', {user_id: props.data.user_id, user: props.data.user});
	};

	const meatBallAnimation = useSharedValue(0);
	const meatBallDropAni = useAnimatedStyle(() => ({
		height: meatBallAnimation.value * 360 * DP,
	}));
	const meatBallDropListAni = useAnimatedStyle(() => ({
		transform: [{scaleY: meatBallAnimation.value}],
	}));

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
							<Text style={txt.noto28b}>{props.data.user_id}</Text>
							<Text style={[txt.noto24r, txt.gray]}>{props.data.location}에서</Text>
						</View>
					</View>
				</TouchableWithoutFeedback>

				<Dropdown
					style={userinfo.meatBallMenu}
					dropdownContainerStyle={[userinfo.meatballDropdown, userinfo.shadow, meatBallDropAni]}
					data={['링크복사', '공유하기', '댓글 기능 해제', '수정', '삭제']}
					renderItem={({item}) => (
						<View style={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}>
							<Text style={[txt.noto28r, item === '삭제' && txt.red]}>{item}</Text>
						</View>
					)}
					listBackgroundStyle={[userinfo.meatballListBackGround, meatBallDropListAni]}
					listContainerStyle={userinfo.meatballListContainer}
					onSelect={e => {
						alert(e);
					}}
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