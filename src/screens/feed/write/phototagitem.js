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
import {hasAndroidPermission} from 'Screens/camera/camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';
import Photos from 'Screens/camera/photos';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import {txt} from 'Root/screens/textstyle';
import Swiper from 'react-native-swiper';

export default PhotoTagItem = ({style, data}) => {
	const [tags, setTags] = React.useState([]);

	const makeBox = e => {
		console.log(e.nativeEvent);
		setTags(tags.concat({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY}));
	};
	console.log(tags);
	return (
		<TouchableWithoutFeedback onPress={makeBox}>
			<View style={style}>
				<FastImage style={style} source={{uri: data.uri}} />
				{tags.map((v, i) => (
					<Tag pos={v} key={i} />
				))}
			</View>
		</TouchableWithoutFeedback>
	);
};

PhotoTagItem.defaultProps = {
	style: {},
	data: {},
};

const Tag = ({pos, content}) => {
	const WIDTH = 750 * DP;
	const HEIGHT = 750 * DP;

	const onLayout = e => {
		let layout = e.nativeEvent.layout;
		let x = 0;
		let y = 0;
      let left = true;
      let top = true;
		if (pos.x + layout.width > WIDTH) {
			console.log('true');
			x = pos.x - layout.width;
         left = true;
		} else {
			x = pos.x;
         left = false;
		}
		if (pos.y + layout.height > HEIGHT) {
			console.log('true');
			y = pos.y - layout.height;
         top = true;
		} else {
			y = pos.y;
         top = false;
		}
		setPosition({x: x, y: y, opacity: 1, top:top,left:left});
	};

	const [position, setPosition] = React.useState({x: pos.x, y: pos.y, opacity: 0});
   const style = [tag.background, {top: position.y, left: position.x, opacity: position.opacity},tag.upleft,tag.upright,tag.botleft,tag.botright]


	return (
		<View style={style} onLayout={onLayout}>
			<Text style={[txt.roboto28, txt.white]}>쩜쩜쩜쩜</Text>
		</View>
	);
};

const tag = StyleSheet.create({
	background: {
		height: 52 * DP,
		paddingHorizontal: 30 * DP,
		position: 'absolute',
		backgroundColor: '#0006',
		borderRadius: 30 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
   upleft:{
      borderTopLeftRadius:0
   },
   upright:{
      borderTopRightRadius:0
   },
   botleft:{
      borderBottomLeftRadius:0
   },
   botright:{
      borderBottomRightRadius:0
   }
});

const BOXCOLOR = false;
const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_img_tag: {
		height: 750 * DP,
		backgroundColor: BOXCOLOR ? 'red' : 'gray',
	},
	box_img: {
		height: 750 * DP,
		backgroundColor: 'gray',
	},
	box_explain: {
		// height: 102 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 48 * DP,
		flex: 1,
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
