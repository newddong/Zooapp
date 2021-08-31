import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { LikeIcon, LikeUncheckedIcon ,CommentIcon, CommentReplyIcon} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {lo, userinfo, txt, btn, comment} from './style_post';
import PostComment from './postcomment';
import PostContents from './postcontents';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';

export default React.memo(
	(Post = props => {
		
		const navigation = useNavigation();
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
			<View style={lo.cntr_contents} onLayout={props.onLayout}>
				<PostContents data={props.data} />
				<Swiper showsButtons style={lo.cntr_photo} activeDotColor="#FFB6A5" showsButtons={false} autoplay={false} loop={false}>
					{props.data.images.map((data, idx) => (
						<Image style={lo.photo} source={{uri: data}} key={idx} />
					))}
				</Swiper>

				<View style={lo.cntr_comment}>
					<View style={comment.buttonContainer}>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.push('CommentList',{data:props.data});//댓글 리스트로 이동
							}}>
							<View style={{width: 350 * DP, height: 50 * DP}}>
								<Text style={[txt.noto28r, txt.gray]}>댓글 모두 보기</Text>
							</View>
						</TouchableWithoutFeedback>
						<View style={comment.infoContainer}>
							<SvgWrapper style={comment.iconContainer} svg={true ? <LikeIcon /> : <LikeUncheckedIcon />} />
							<Text style={txt.roboto24r}>{props.data.like}</Text>
							<SvgWrapper style={comment.iconContainer} svg={<CommentIcon />} />
							<Text style={txt.roboto24r}>{props.data.count_comment}</Text>
						</View>
					</View>
					{/*댓글 리스트로 이동하기전 간략하게 보이는 댓글들*/}
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
