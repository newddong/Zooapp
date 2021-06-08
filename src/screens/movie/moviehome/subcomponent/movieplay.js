import React, {useRef, useState} from 'react';
import {
	StyleSheet,
	Text,
	SafeAreaView,
	ScrollView,
	StatusBar,
	View,
	Image,
	ImageBackground,
	Dimensions,
} from 'react-native';
import DP from 'Screens/dp';
import {
	LikeIcon,
	LikeUncheckedIcon,
	CommentIcon,
	SearchIcon,
	ShareIcon,
	BtnX,
	DownBracketGray,
	HeartBtnIcon,
	MeIcon,
	GliderIcon,
} from 'Asset/image';
import MovieItem from './movieItem';
import Comments from './comments';
import {TouchableWithoutFeedback} from 'react-native';
import {TabContext} from 'tabContext';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';
import {TextInput} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const InnerComponent = props => {
	const [screen_height, setScreenHeight] = useState(Dimensions.get('screen').height);
	const [android_shadow, setShadow] = useState(true);
	const [replycommit_dimmension, setReplyCommitDimension] = useState({
		width: 750 * DP,
		height: 136 * DP,
	});
	const icon_size = {width: 48 * DP, height: 48 * DP};
	const svg_size = {width: '100%', height: '100%'};
	const comment_location = useSharedValue(screen_height);
	const comment_moving = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: comment_location.value,
				},
			],
		};
	});

	const openComment = () => {
		if (android_shadow) {
			setShadow(!android_shadow);
		}
		props.togglefn();
		comment_location.value = withTiming(0 * DP);
	};

	const closeComment = () => {
		comment_location.value = withTiming(screen_height);
		setShadow(!android_shadow);
		props.togglefn();
	};

	return (
		<View
			style={movplay.wrp_play}
			onLayout={e => {
				setScreenHeight(e.nativeEvent.layout.height);
			}}>
			<View style={movplay.img_thumb}>
				<Image
					blurRadius={10}
					style={movplay.img_thumb}
					source={{
						uri: 'https://image.dongascience.com/Photo/2019/11/10ed7359329fe87a2dc84921babb17e0.jpg',
					}}
				/>
			</View>

			<View style={movplay.cntr_hash}>
				<Text style={[txt.noto24rcjk, txt.link]}>#반려동물 #강아지 #자가체크</Text>
			</View>

			<View style={movplay.cntr_title}>
				<Text style={txt.noto30b}>
					강아지 '눈 건강' 집에서 자가 체크 해보자! [2편] 자가 체크에 필요한 준비물??
				</Text>
				<Text style={[txt.roboto24r, txt.gray]}>조회수 1.2k</Text>
			</View>

			<View style={movplay.cntr_channel}>
				<View style={movplay.sctn_channelinfo}>
					<View style={movplay.channelimg}>
						<Image
							style={movplay.channelimg}
							source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
						/>
					</View>
					<View style={movplay.grp_channelid}>
						<Text style={[txt.noto28b, txt.gray]}>닥터맘마 Dr.Mamma</Text>
						<Text style={[txt.noto24rcjk, txt.gray]}>구독자 51.9만명</Text>
					</View>
				</View>

				<View style={movplay.sctn_popularity}>
					<View style={movplay.icon}>
						<LikeUncheckedIcon {...icon_size} />
						<Text style={txt.roboto24r}>1.2k</Text>
					</View>
					<View style={movplay.icon}>
						<CommentIcon {...icon_size} />
						<Text style={txt.roboto24r}>105</Text>
					</View>
					<View style={movplay.icon}>
						<ShareIcon {...icon_size} />
						<Text style={txt.roboto24r}>공유</Text>
					</View>
				</View>
			</View>

			<View style={movplay.cntr_scrl}>
				<ScrollView>
					<TouchableWithoutFeedback onPress={openComment}>
						<View style={[movplay.cntr_comment, android_shadow ? movplay.shadowEffect : {}]}>
							<View style={movplay.grp_comment_info}>
								<Text style={[movplay.txt_comment_info, txt.noto24b]}>댓글 모두 보기</Text>
								<Text style={[txt.noto24rcjk, txt.gray]}>105</Text>
							</View>
							<View style={movplay.grp_comment_txt}>
								<Text style={[movplay.commenter_id, txt.roboto24r, txt.gray]}>jiiijimy</Text>
								<Text style={[movplay.comment_txt, txt.noto24rcjk]}>
									근데 이렇게 설명해주는거 너무 좋음 병원이 멀어...
								</Text>
								<DownBracketGray {...{width: 20 * DP, height: 12 * DP}} />
							</View>
						</View>
					</TouchableWithoutFeedback>
					<MovieItem />
					<MovieItem />
					<MovieItem />
					<MovieItem />
				</ScrollView>
			</View>
			<Animated.View
				style={[
					movplay.pop_cntr_comment,
					{
						height: screen_height,
					},
					comment_moving,
				]}>
				<TouchableWithoutFeedback onPress={closeComment}>
					<View style={movplay.pop_margin}></View>
				</TouchableWithoutFeedback>
				<View style={movplay.pop_sctn_comment}>
					<View style={[pop_comment.header, pop_comment.shadowEffect]}>
						<View style={pop_comment.grp_txt}>
							<Text style={[txt.noto24b, {marginRight: 20 * DP}]}>댓글</Text>
							<Text style={[txt.gray, txt.noto24rcjk]}>105</Text>
						</View>
						<TouchableWithoutFeedback onPress={closeComment}>
							<View style={pop_comment.btnx_size}>
								<BtnX {...svg_size} fill="#191919" />
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={pop_comment.cntr_scrl}>
						<ScrollView>
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
							<Comments />
						</ScrollView>
					</View>

					<Shadow distance={8} startColor={'#00000018'} offset={[0, 0]}>
						<View
							style={[pop_comment.cntr_input]}
							onLayout={e => {
								setReplyCommitDimension({
									height: e.nativeEvent.layout.height,
									width: e.nativeEvent.layout.width,
								});
							}}>
							<TextInput
								style={[pop_comment.frm_input, txt.noto24rcjk, txt.dimmergray]}
								placeholder="댓글 쓰기"
							/>
							<View style={pop_comment.btn_comit_comment}>
								<GliderIcon {...svg_size} fill="#FFB6A5" />
							</View>
						</View>
					</Shadow>
				</View>
			</Animated.View>
		</View>
	);
};

export default MoviePlay = props => {
	return (
		<TabContext.Consumer>{({toggle}) => <InnerComponent togglefn={toggle} />}</TabContext.Consumer>
	);
};

export const pop_comment = StyleSheet.create({
	header: {
		flexBasis: 76 * DP,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	grp_txt: {
		flexDirection: 'row',
	},
	btnx_size: {
		width: 22 * DP,
		height: 22 * DP,
	},
	cntr_scrl: {
		paddingHorizontal: 48 * DP,
		flex: 1,
	},
	cntr_input: {
		flexBasis: 136 * DP,
		// height:136*DP,
		// width:'100%',
		bottom:0,
		backgroundColor:'#FFF',
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		alignItems: 'center',
		// position:'absolute',
		// zIndex:100
	},
	btn_comit_comment: {
		width: 30 * DP,
		height: 28 * DP,
	},
	frm_input: {
		flex: 1,
		marginRight: 20 * DP,
	},
	shadowEffect: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
});

export const movplay = StyleSheet.create({
	wrp_play: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		zIndex: 1,
	},
	img_thumb: {
		width: '100%',
		height: 422 * DP,
	},
	cntr_hash: {
		width: 654 * DP,
		marginTop: 10 * DP,
		marginBottom: 11 * DP,
	},
	cntr_title: {
		width: 654 * DP,
		marginBottom: 10 * DP,
	},
	cntr_channel: {
		width: 654 * DP,
		height: 84 * DP,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 18 * DP,
	},
	sctn_channelinfo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	channelimg: {
		height: 60 * DP,
		width: 60 * DP,
		borderRadius: 60 * DP,
		marginRight: 20 * DP,
	},

	grp_channelid: {
		width: 310 * DP,
	},
	sctn_popularity: {
		height: 84 * DP,
		width: 224 * DP,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	icon: {
		width: 48 * DP,
		height: '100%',
		justifyContent: 'space-between',
	},
	cntr_comment: {
		borderTopColor: '#DBDBDB',
		backgroundColor: '#FFFFFF',
		borderTopWidth: 2 * DP,
		height: 160 * DP,
		width: '100%',
		paddingLeft: 48 * DP,
	},
	shadowEffect: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 8,
	},
	grp_comment_info: {
		width: 654 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10 * DP,
		marginTop: 30 * DP,
	},
	txt_comment_info: {
		marginRight: 20 * DP,
	},
	grp_comment_txt: {
		width: 654 * DP,
		flexDirection: 'row',
		alignItems: 'center',
	},
	commenter_id: {
		width: 96 * DP,
		marginRight: 16 * DP,
	},
	comment_txt: {
		marginRight: 14 * DP,
	},
	btn_allcomment: {},
	cntr_scrl: {
		flex: 1,
		width: '100%',
	},
	pop_cntr_comment: {
		position: 'absolute',
		width: '100%',
	},
	pop_margin: {
		flexBasis: 422 * DP,
	},
	pop_sctn_comment: {
		backgroundColor: '#FFF',
		flex: 1,
	},
});

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 13,
		lineHeight: 36 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 16.5,
		lineHeight: 46 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 13,
		lineHeight: 35 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 13,
		lineHeight: 30 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 15.4,
		lineHeight: 36 * DP,
	},
	link: {
		color: '#007EEC',
	},
	gray: {
		color: '#767676',
	},
	dimmergray: {
		color: '#999999',
	},
	white: {
		color: '#FFFFFF',
	},
});
