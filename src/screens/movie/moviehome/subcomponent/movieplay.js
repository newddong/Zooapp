import React, { useState, useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image, ImageBackground,Platform, Dimensions,Keyboard} from 'react-native';
import DP,{ isNotch } from 'Screens/dp';
import {LikeIcon, LikeUncheckedIcon, CommentIcon, SearchIcon, ShareIcon, BtnX, DownBracketGray, HeartBtnIcon, MeIcon, GliderIcon} from 'Asset/image';
import MovieItem from './movieItem';
import Comments from './comments';
import {TouchableWithoutFeedback} from 'react-native';
import {TabContext} from 'tabContext';

import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TextInput} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import YoutubePlayer from 'react-native-youtube-iframe';

import dummydata from '../moviedata.json';
import SvgWrapper from 'Screens/svgwrapper';

import MoviePlayInfo from './movieplayinfo';

const InnerComponent = props => {
	
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('blur', e => {
			props.tabVisible(true);
		});
		return unsubscribe;
	}, [props.navigation]);
	
	const windowheight = Dimensions.get('window').height;
	const screenheight = Dimensions.get('screen').height;

	const [keyboardY, setKeyboardY] = React.useState(0);

	const KeybordBorderLine = (()=>{
		if(Platform.OS === 'ios'){
			return isNotch?-34:0;
		}
		else if(Platform.OS === 'android'){
			return isNotch?StatusBar.currentHeight:0;
		}
	})();

	useEffect(()=>{
		Keyboard.addListener("keyboardDidShow",(e)=>{
			// console.log('keyboardhide:  '+JSON.stringify(e.endCoordinates));
			setKeyboardY(e.endCoordinates.height+KeybordBorderLine);
		});
		Keyboard.addListener("keyboardDidHide",(e)=>{
			// console.log('keyboardhide:  '+JSON.stringify(e.endCoordinates));
			setKeyboardY(0);
		});

		return () => {
			Keyboard.removeAllListeners("keyboardDidShow");
			Keyboard.removeAllListeners("keyboardDidHide");
		}
	},[]);

	

	const {data} = props.route.params;
	const [screen_height, setScreenHeight] = useState({h:windowheight,c:0});
	const [android_shadow, setShadow] = useState(true);

	const [replycommit_dimmension, setReplyCommitDimension] = useState({
		width: 750 * DP,
		height: 136 * DP,
	});
	const bottomTabHeight = 140*DP;
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
		props.tabVisible(false);
		// comment_location.value = withTiming(0 * DP);
	};

	const closeComment = () => {
		// comment_location.value = withTiming(screen_height);
		setShadow(!android_shadow);
		props.tabVisible(true);
	};
	console.log('keboard info :' + keyboardY);
	console.log('ScreenY:'+screenheight+'  WindowY:'+windowheight+'  DP:'+DP + 'Status:' +StatusBar.currentHeight);
	console.log('bottomTab: '+146*DP + 'Header:' + 132*DP);
	return (
		<View
			style={movplay.wrp_play}
			onLayout={e => {
				if(screen_height.c===0){
				setScreenHeight({h:e.nativeEvent.layout.height,c:screen_height.c+1});
				console.log('wpr_play_layout:'+JSON.stringify(e.nativeEvent.layout));
			}
			console.log(screen_height)
			
			}}>
			<View style={movplay.video}>
				<YoutubePlayer
					height={300}
					play={true}
					videoId={data.movie_id}
				/>
			</View>

			<MoviePlayInfo data={data}/>

			<View style={movplay.cntr_scrl}>
				<ScrollView>
					<TouchableWithoutFeedback onPress={openComment}>
						<View style={[movplay.cntr_comment, android_shadow ? movplay.shadowEffect : {}]}>
							<View style={movplay.grp_comment_info}>
								<Text style={[movplay.txt_comment_info, txt.noto24b]}>댓글 모두 보기</Text>
								<Text style={[txt.noto24rcjk, txt.gray]}>{data.count_comment}</Text>
							</View>
							<View style={movplay.grp_comment_txt}>
								<Text style={[movplay.commenter_id, txt.roboto24r, txt.gray]}>{data.comments[0].user_id}</Text>
								<Text style={[movplay.comment_txt, txt.noto24rcjk]}>{data.comments[0].contents.slice(0,25)}...</Text>
								<DownBracketGray {...{width: 20 * DP, height: 12 * DP}} />
							</View>
						</View>
					</TouchableWithoutFeedback>
					{dummydata.movies.map((e, i) => {
						return <MovieItem data={e} key={i} />;
					})}
				</ScrollView>
			</View>
			{!android_shadow?<View style={{backgroundColor:'green',height:screen_height.h+bottomTabHeight,width:'100%',opacity:0.7,position:'absolute'}}>
			<TouchableWithoutFeedback onPress={closeComment}>
					<View style={{height:422*DP,backgroundColor:'red'}}></View>
			</TouchableWithoutFeedback>


					<Animated.View style={{backgroundColor:'blue',height:screen_height.h-422*DP+bottomTabHeight}} onLayout={(e)=>{console.log('red: '+422*DP,'  blue: '+JSON.stringify(e.nativeEvent.layout))}}>
						<TextInput style={[txt.noto24r,{borderWidth:0,paddingVertical:0}]} placeholder='이것은 테스트입니다.'></TextInput>
						<View style={{backgroundColor:'yellow',height:40*DP,width:300*DP,bottom:0,position:'absolute'}}></View>
					</Animated.View>
				<View style={{backgroundColor:'yellow',width:300*DP,height:300*DP,position:'absolute',bottom:keyboardY,left:200}}></View>
			</View>:<></>}
			{/* <Animated.View
				style={[
					movplay.pop_cntr_comment,
					{
						height: screen_height,
					},
					comment_moving,
				]}>
				<KeyboardAvoidingView style={{height:screen_height}} behavior='position'>
				<TouchableWithoutFeedback onPress={closeComment}>
					<View style={movplay.pop_margin}></View>
				</TouchableWithoutFeedback>
				<View style={movplay.pop_sctn_comment}>
					<View style={[pop_comment.header, pop_comment.shadowEffect]}>
						<View style={pop_comment.grp_txt}>
							<Text style={[txt.noto24b, {marginRight: 20 * DP}]}>댓글</Text>
							<Text style={[txt.gray, txt.noto24rcjk]}>{data.count_comment}</Text>
						</View>
						<TouchableWithoutFeedback onPress={closeComment}>
							<View style={pop_comment.btnx_hitbox}>
								<SvgWrapper style={pop_comment.btnx_size} svg={<BtnX fill='#191919'/>}/>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={pop_comment.cntr_scrl}>
						<ScrollView contentContainerStyle={{paddingTop: 40 * DP}}>
							{data.comments.map((e,i)=>{
								return <Comments data={e} key={i}/>
							})}
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
							<TextInput  style={[txt.noto24r,txt.dimmergray,pop_comment.frm_input]} placeholder={'댓글 쓰1기'} ></TextInput>
							<View style={pop_comment.btn_comit_comment}>
								<SvgWrapper svg={<GliderIcon fill="#FFB6A5" />}/>
							</View>
						</View>
					</Shadow>
				</View>
				</KeyboardAvoidingView>
			</Animated.View> */}
		</View>
	);
};

export default MoviePlay = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
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
	btnx_hitbox:{
		width:50*DP,
		height:50*DP,
		justifyContent:'center',
		alignItems:'center'
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
		// flexBasis: 136 * DP,
		height:136*DP,
		// width:'100%',
		bottom: 0,
		backgroundColor: '#FFF',
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
		width:200*DP,
		height:80*DP,
		borderWidth:0*DP,
		paddingLeft:20*DP,
		paddingVertical:0*DP,
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
	video: {
		width: '100%',
		height: 422 * DP,
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
		width: 120 * DP,
		marginRight: 16 * DP,
	},
	comment_txt: {
		width: 494 * DP,
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
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24*DP,
		lineHeight: 36 * DP,
	},
	noto24r:{
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24*DP,
		includeFontPadding:false
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30*DP,
		lineHeight: 46 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 24*DP,
		lineHeight: 35 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24*DP,
		lineHeight: 30 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28*DP,
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
