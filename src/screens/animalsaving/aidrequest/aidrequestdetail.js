import React, {useState, useRef} from 'react';
import {ScrollView} from 'react-native';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';
import {
	HeartBtnIcon,
	ShareFocusedIcon,
	Kakao,
	CopylinkIcon,
	MessageIcon,
	Bracket,
   GliderIcon,
} from 'Asset/image';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import Comments from 'Screens/movie/moviehome/subcomponent/comments';
import DP, {svg_size} from 'Root/screens/dp';

export default AidRequestDetail = props => {
	const [location, setlocation] = useState(0);
	const pop = useSharedValue(0);
	const popAni = useAnimatedStyle(() => ({
		transform: [
			{scale: pop.value},
			{translateX: (pop.value - 1) * 184 * DP},
			{translateY: (pop.value - 1) * 83 * DP},
		],
	}));
	const popBackgroundAni = useAnimatedStyle(() => ({
		transform: [{translateX: (1 - pop.value) * 703 * DP}],
		// transform:[{scale:pop.value}]
	}));
	const [isPop, setPop] = useState(false);
	const iP = useRef(false);
	const onShareBtn = () => {
		if (!iP.current) {
			pop.value = withTiming(1);
			// setPop(true);
			iP.current = true;
		}
		console.log('onShare : ' + iP.current);
	};
	const closePop = () => {
		// setPop(false);
		pop.value = withTiming(0);
		iP.current = false;
		console.log('closePop : ' + iP.current);
	};

	return (
		<View style={detail.wrp_main}>
			<ScrollView>
				<View style={detail.wrp_content}>
					<View style={detail.cntr_img}></View>
					<View style={detail.bar_title}>
						<Text style={[txt.noto24r, txt.gray]}>보호요청</Text>
						<Text style={[txt.noto28b]}>
							논두렁에서 구조한 믹스견, 햐얀 솜사탕같은 아기 강아지의 보호자를 찾습니다.
						</Text>
					</View>
					<View
						style={detail.bar_shelter}
						onLayout={e => {
							setlocation(e.nativeEvent.layout.y + e.nativeEvent.layout.height);
						}}>
						<View style={detail.info_shelter}>
							<View style={detail.img_shelter}></View>
							<View style={detail.grp_txt_shelter}>
								<Text style={[txt.noto24b, txt.gray]}>딩동댕 보호소 / 경상남도 진주시</Text>
								<Text style={[txt.roboto24r, txt.gray]}>2021.05.28</Text>
							</View>
						</View>
						<View style={detail.cntr_btn_sns}>
							<TouchableWithoutFeedback onPress={onShareBtn}>
								<View style={detail.info_sns}>
									<View style={detail.wrap_icon}>
										<ShareFocusedIcon {...svg_size} />
									</View>
									<Text>공유</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
					<View style={detail.cntr_card}></View>

					<View style={detail.cntr_content}>
						<Text style={[txt.noto24r, {color: 'black'}]}>
							경남 가좌동 인근 논두렁에서 구출한 말티즈 믹스 귀요미예요!{'\n'}
							사람 손을 많이 탔는지 순하고 얌전해요. 중성화는 아직 안 되어있고, 1차 접종까지
							되어있는 상태입니다. 이쁜 솜사탕같은 아가 임보나 입양 원하시는 분들은 바로 신청
							가능합니다!
						</Text>
					</View>

					<View style={detail.cntr_comment}>
						<Text style={[txt.noto24b, txt.gray, {marginBottom: 10 * DP}]}>
							댓글 <Text style={txt.noto24r}>5</Text>
						</Text>
						<Comments />
						<Comments />
						<Comments />
						<Comments />
						<Comments />

						<View style={detail.cntr_btn_more}>
							<Text style={[txt.noto24r, txt.gray]}>더보기</Text>
							
							<View style={detail.bracket_more}>
								<Bracket {...svg_size} fill="gray" />
							</View>
						</View>

                  <View style={detail.write_comment}>
                     <TextInput placeholder="댓글 쓰기" style={[detail.write_input,txt.noto24r]} underlineColorAndroid='#000000'></TextInput>
                     <View style={detail.icon_write}><GliderIcon {...svg_size} fill="#FFB6A5"/></View>
                  </View>

					</View>
				</View>
			</ScrollView>
			<Animated.View
				style={[detail.wrp_pop, popBackgroundAni]}
				onStartShouldSetResponder={() => true}
				onMoveShouldSetResponder={() => false}
				onMoveShouldSetResponderCapture={() => false}
				onResponderGrant={closePop}>
				<Animated.View
					style={[detail.pop_sns, detail.shadow, {top: location}, popAni]}
					onStartShouldSetResponder={() => true}
					onMoveShouldSetResponder={() => false}
					onMoveShouldSetResponderCapture={() => false}>
					<View style={detail.pop_cntr_icon}>
						<View style={detail.pop_icon}>
							<Kakao {...svg_size} />
						</View>
						<Text style={[txt.noto22r, txt.gray]}>카카오톡</Text>
					</View>
					<View style={detail.pop_cntr_icon}>
						<View style={detail.pop_icon}>
							<CopylinkIcon {...svg_size} />
						</View>
						<Text style={[txt.noto22r, txt.gray]}>링크복사</Text>
					</View>
					<View style={detail.pop_cntr_icon}>
						<View style={detail.pop_icon}>
							<MessageIcon {...svg_size} />
						</View>
						<Text style={[txt.noto22r, txt.gray]}>메시지</Text>
					</View>
				</Animated.View>
			</Animated.View>
		</View>
	);
};
ParticipationItem.defaultProps = {
	title: '제목을 입력하세요',
};

const detail = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	wrp_content: {
		paddingHorizontal: 48 * DP,
	},
	bar_title: {
		marginTop: 30 * DP,
	},
	cntr_img: {
		backgroundColor: '#EDEDED',
		marginTop: 70 * DP,
		height: 542 * DP,
	},
	bar_shelter: {
		marginTop: 40 * DP,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cntr_btn_sns: {
		flexDirection: 'row',
	},
	info_shelter: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 518 * DP,
	},
	img_shelter: {
		backgroundColor: 'red',
		width: 72 * DP,
		height: 72 * DP,
		borderRadius: 36 * DP,
		marginRight: 10 * DP,
	},
	grp_txt_shelter: {},
	info_sns: {
		// marginLeft: 40 * DP,
	},
	wrap_icon: {
		height: 48 * DP,
		width: 48 * DP,
	},
	cntr_card: {
		borderRadius: 30 * DP,
		marginTop: 30 * DP,
		marginBottom: 80 * DP,
	},
	cntr_content: {
		marginTop: 11 * DP,
	},
	cntr_comment: {
		marginTop: 40 * DP,
	},
	cntr_btn_more: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
	bracket_more: {
      marginLeft:10*DP,
		width: 40 * DP,
		height: 40 * DP,
		transform: [{rotate: '90deg'}],
	},
   write_comment:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderWidth:2*DP,
      borderRadius:100*DP,
      borderColor:'#DBDBDB',
      paddingHorizontal:30*DP,
   },
   write_input:{
      width:496*DP,
      
   },
   icon_write:{
      width:36*DP,
      height:32*DP,
      
   },
	wrp_pop: {
		// backgroundColor: 'gray',
		transform: [{scale: 0}],
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	pop_sns: {
		width: 368 * DP,
		height: 166 * DP,
		borderRadius: 30 * DP,
		borderTopRightRadius: 0,
		backgroundColor: '#FFF',
		position: 'absolute',
		right: 48 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 46 * DP,
		paddingRight: 45 * DP,
	},
	pop_cntr_icon: {
		alignContent: 'center',
	},
	pop_icon: {
		width: 72 * DP,
		height: 72 * DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 4,
	},
});

const txt = StyleSheet.create({
	noto28r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.5,
		lineHeight: 38 * DP,
	},
	noto36r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 36 * DP,
		lineHeight: 54 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 28 * DP,
		lineHeight: 41 * DP,
	},
	noto24r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 24 * DP,
		// lineHeight: 42 * DP,
      lineHeight:42*DP,
	},
	noto24b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 24 * DP,
		lineHeight: 32 * DP,
	},
	noto22r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 22 * DP,
		lineHeight: 32 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
		lineHeight: 30 * DP,
	},
	gray: {
		color: '#767676',
	},
});