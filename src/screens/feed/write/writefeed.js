import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text, TextInput,KeyboardAvoidingView} from 'react-native';

import {CameraIcon, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {Shadow} from 'react-native-shadow-2';

export default WriteFeed = () => {
	return (
		// <KeyboardAvoidingView style={lo.wrp_main} behavior='padding'>
		// 	<View style={lo.box_txtinput}>
		// 		<TextInput style={lo.input_txt} placeholder="내용 입력..."></TextInput>
		// 	</View>

		// 	<Shadow distance={8} startColor={'#00000018'} offset={[0, 0]}>
		// 		<View style={lo.wrp_box}>
		// 			<View style={lo.box_btn}>
		// 				<View style={lo.box_actionbtn}>
		// 					<SvgWrapper style={{width: 62 * DP, height: 56 * DP,marginRight:10*DP}} svg={<CameraIcon />} />
		// 					<Text style={[txt.noto24r, txt.pink]}>사진추가</Text>
		// 				</View>
		// 				<View style={lo.box_actionbtn}>
		// 					<SvgWrapper style={{width: 46 * DP, height: 56 * DP,marginRight:10*DP}} svg={<LocationPinIcon />} />
		// 					<Text style={[txt.noto24r, txt.pink]}>위치추가</Text>
		// 				</View>
		// 				<View style={lo.box_actionbtn}>
		// 					<SvgWrapper style={{width: 54 * DP, height: 48 * DP,marginRight:10*DP}} svg={<PawIcon fill="#FFB6A5" />} />
		// 					<Text style={[txt.noto24r, txt.pink]}>태그하기</Text>
		// 				</View>
		// 			</View>

		// 			<View>
					
		// 			<View style={[btn.size,btn.btn_profile, btn.shadow]}>
		// 				<Text style={[txt.noto24r,txt.gray]}>팔로우</Text>
		// 				<SvgWrapper
		// 					style={[btn.profileButtonBracketsize]}
		// 					svg={<DownBracketGray />}
		// 				/>
		// 			</View>
				
		// 			</View>
		// 		</View>
		// 	</Shadow>
		// </KeyboardAvoidingView>
		<KeyboardAvoidingView style={{height:800,backgroundColor:'blue'}}>
			<View style={{width:300,height:30,top:550,backgroundColor:'red'}}><TextInput></TextInput></View>
		</KeyboardAvoidingView>
	);
};

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
		
	},
	box_txtinput: {
		flex: 1,
		paddingHorizontal: 48 * DP,
		backgroundColor:'#767676',
		
	},
	input_txt:{
		paddingVertical:0,
		borderWidth:0,
	},
	wrp_box: {
		flexBasis: 500 * DP,
		backgroundColor:'#fff',
	},
	box_btn: {
		marginTop:40*DP,
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent:'space-around'
	},
	box_actionbtn: {
		flexDirection: 'row',
		height: 56 * DP,
		alignItems: 'center',
	},
	shadow: {
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

const btn = StyleSheet.create({
	size: {
		width: 280 * DP,
		height: 60 * DP,
	},
	btn_profile: {
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 150,
	},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
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
	noto24r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 36 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 24 * DP,
		lineHeight: 35 * DP,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 54 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
		lineHeight: 46 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
		lineHeight: 30 * DP,
	},
	gray: {
		color: '#767676',
	},
	pink: {
		color: '#FFB6A5',
	},
	white: {
		color: '#FFFFFF',
	},
});
