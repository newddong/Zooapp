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

export default Photos = props => {
	const [isSelect, select] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const number = React.useRef(0);
	const cursor = React.useRef(() => 'chrl');

	const toggleselect = total => {
		if (isSelect) {
			select(false);

			cursor.current = (v => () => {
				return v;
			})(number.current);
			total.cursor = cursor.current();
			total.count--;

			result = false;
		} else {
			select(true);
			total.count++;

			result = true;
		}
		number.current = total.count;
		setCount(total.count);
		return result;
	};

	const fn = React.useRef(recievecursor => {
		if (number.current >= recievecursor) {
			setCount(--number.current);
		}
	}).current;

	return (
		<TouchableWithoutFeedback
			onPress={
				!props.isCamera
					? props.onPress(props.source, toggleselect, fn)
					: () => {
							props.navigation.push('camera');
					  }
			}>
			<View style={[photo.wrp_photo, {backgroundColor: '#EDEDED'}]}>
				{props.isCamera ? (
					<SvgWrapper style={{width: 70 * DP, height: 62 * DP}} svg={<CameraIconWhite />} />
				) : (
					<>
						<Image style={isSelect ? photo.img_selected : photo.size_img} source={props.source} />
						{isSelect && (
							<>
								<View style={photo.counter}>
									<Text style={[txt.roboto24r, txt.white]}>{count}</Text>
								</View>
								<View style={[photo.size_img, {backgroundColor: '#FFF', position: 'absolute', opacity: 0.4}]}></View>
							</>
						)}
					</>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

Photos.defaultProps = {
	isCamera: false,
	onPress: () => {},
};

const photo = StyleSheet.create({
	wrp_photo: {
		height: 186 * DP,
		width: 186 * DP,
		marginBottom: 2 * DP,
		marginRight: 1.4 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	size_img: {
		height: 186 * DP,
		width: 186 * DP,
	},
	img_selected: {
		height: 182 * DP,
		width: 182 * DP,
		borderWidth: 4 * DP,
		borderColor: '#FFB6A5',
	},
	counter: {
		height: 44 * DP,
		width: 44 * DP,
		borderRadius: 22 * DP,
		backgroundColor: '#FFB6A5',
		position: 'absolute',
		right: 12 * DP,
		top: 12 * DP,
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
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
