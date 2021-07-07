import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Platform,
	PermissionsAndroid,
	SafeAreaView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Image,
	Alert,
} from 'react-native';

import {CameraIconWhite, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from './camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';
import Photos from './photos';
import Video from 'react-native-video';

export const exportUriList = React.createRef([]); //겔러리 속 사진들 로컬 주소

const InnerComponent = props => {

	React.useEffect(() => {
		props.tabVisible(false);
	}, []);

	const count = React.useRef({count: 0, cursor: 0, subscriber: []}).current;

	return (
		<View style={lo.wrp_main}>
			<View style={lo.box_img_tag}>
			<Image style={lo.box_img} source={{uri:"https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg"}} />
			</View>
			<View style={lo.box_explain}>
				<Text style={txt.noto28r}>사진 속 인물이나 동물을 눌러 태그하세요</Text>
            <Text style={txt.noto28r}>다시 눌러 삭제가 가능합니다.</Text>
            <Text style={txt.noto28r}>누른 상태에서 움직이면 위치가 이동합니다.</Text>
			</View>
		</View>
	);
};

export default PhotoTag = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};


const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
   box_img_tag:{
      height: 750 * DP,
		backgroundColor: 'red',
   },
	box_img: {
		height: 750 * DP,
		backgroundColor: 'gray',
	},
	box_explain: {
		// height: 102 * DP,
		justifyContent:'center',
		alignItems: 'center',
		paddingHorizontal: 48 * DP,
      flex:1,  
      // backgroundColor:'yellow'
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
		lineHeight: 42 * DP,
	},
	noto36r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 36 * DP,
		lineHeight: 56 * DP,
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
