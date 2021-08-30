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

export default React.memo(
	(Post = props => {
		// export default Post = props => {
		const nav = useNavigation();
		const t = React.useRef();
		const [showAllContents, setShowAllContents] = React.useState(false);
		const showWholeContents = () => {
			setShowAllContents(true);
		};

		const moveToProfile = () => {
			nav.push('Profile', {user_id: props.data.user_id, user: props.data.user});
		};


		const meatBallAnimation = useSharedValue(0);
		const meatBallDropAni = useAnimatedStyle(()=>({
			height:(meatBallAnimation.value * 360)*DP
		}));
		const meatBallDropListAni = useAnimatedStyle(()=>({
			transform:[{scaleY:meatBallAnimation.value}]
		}));

		return (
			<View style={lo.cntr_contents} onLayout={props.onLayout}>
				<View style={[lo.cntr_info_user]}>
					<TouchableWithoutFeedback onPress={moveToProfile}>
						<Image
							style={userinfo.photo}
							source={{
								uri: props.data.photo_user,
							}}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={moveToProfile}>
						<View style={userinfo.grp_info}>
							<Text style={txt.noto28b}>{props.data.user_id}</Text>
							<Text style={[txt.noto24r, txt.gray]}>{props.data.location}에서</Text>
						</View>
					</TouchableWithoutFeedback>

					<Dropdown
						// style={{marginRight:70*DP}}
						style={userinfo.meatBallMenu}
						dropdownContainerStyle={[userinfo.meatballDropdown, userinfo.shadow,meatBallDropAni]}
						data={['링크복사', '공유하기', '댓글 기능 해제', '수정', '삭제']}
						// onSelect={selectAreaCode}
						renderItem={({item}) => (
							<View style={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}>
								<Text style={[txt.noto28r,item==='삭제'&&txt.red]}>{item}</Text>
							</View>
						)}
						listBackgroundStyle={[userinfo.meatballListBackGround,meatBallDropListAni]}
						listContainerStyle={userinfo.meatballListContainer}
						onSelect={e => {
							alert(e);
						}}
						onSelectNotClose={true}
						onOpen={()=>{meatBallAnimation.value=withTiming(1,{duration:300})}}
						onClose={()=>{meatBallAnimation.value=withTiming(0,{duration:300})}}
						animation
						component={<SvgWrapper style={userinfo.meatBallMenu} svg={<MeatballIcon />} />}
					/>
					{/* <SvgWrapper style={userinfo.meatBallMenu} svg={<MeatballIcon />} /> */}
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
				<Swiper showsButtons style={lo.cntr_photo} activeDotColor="#FFB6A5" showsButtons={false} autoplay={false} loop={false}>
					{props.data.images.map((data, idx) => (
						<Image style={lo.photo} source={{uri: data}} key={idx} />
					))}
				</Swiper>

				<View style={lo.cntr_comment}>
					<PostComment comment={props.data.comment} like={props.data.like} count_comment={props.data.count_comment} />
				</View>
			</View>
		);
		// };
	}),
);

Post.defaultProps = {
	onLayout: e => {},
	contentRef: ref => {},
};

const TxtContainHash = props => {
	let arr = parseData(props.data);
	return (
		<Text style={[txt.noto24r, txt.gray]}>
			{arr.map((e, i) => (
				<Text style={{color: e[1].charAt(0) === '#' ? '#007EEC' : '#767676'}} key={i}>
					{e[1]}
				</Text>
			))}
		</Text>
	);
};

function parseData(string) {
	const regexp = />(.*?)</g;
	return [...string.matchAll(regexp)];
}
