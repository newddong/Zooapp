import React from 'react';
import {View, ScrollView, StyleSheet,PermissionsAndroid ,SafeAreaView, Text, TextInput, TouchableWithoutFeedback, Image,Alert} from 'react-native';

import {CameraIconWhite, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from './camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';


const InnerComponent = props => {
	const [photos, setPhotos] = React.useState([{node: null}]);

	React.useEffect(() => {
		const unsubscribe = props.navigation.addListener('blur', e => {
			props.tabVisible(true);
		});
		props.tabVisible(false);
		return unsubscribe;
	}, []);

	// React.useEffect(() => {
	// 	try {
			
	// 		const permissions = [PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.CAMERA];
	// 		PermissionsAndroid.requestMultiple(permissions).then((result)=>{
	// 			console.log(result);
	// 			// if (result){
	// 			// CameraRoll.getPhotos({
	// 			// 	first: 20,
	// 			// 	assetType: 'Photos',
	// 			// })
	// 			// 	.then(r => {
	// 			// 		setPhotos({photos: r.edges});
	// 			// 	})
	// 			// 	.catch(err => {
	// 			// 	});
	// 			// }else{
	// 			// 	alert('기기의 사진 열람 및 카메라 촬영 권한을 허용해주세요');
	// 			// }
	// 		});
	// 	} catch (err) {
	// 		console.warn(err);
	// 	}
	// }, []);





	return (
		<View style={lo.wrp_main}>
			<Image style={lo.box_img} source={{uri: 'https://blog.kakaocdn.net/dn/bvkdnK/btqD2u3oK3k/kx1ZSi2qwPgfe8DyFlhv30/img.jpg'}} />
			<View style={lo.box_title}>
				<Text style={txt.noto36r}>최근 항목</Text>
				<SvgWrapper style={{height: 12 * DP, width: 20 * DP, marginLeft: 14 * DP}} svg={<DownBracketBlack />} />
			</View>
			<ScrollView>
				<View style={lo.box_photolist}>
					{photos.photos?.map((p, i) => (
						<Photos key={i} source={{uri: p.node.image.uri}} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

const Photos = props => {
	props.empty;
	return (
		<View style={[photo.wrp_photo, {backgroundColor: '#EDEDED'}]}>
			{/* <Image style={photo.size_img} source={{uri:'https://tgzzmmgvheix1905536.cdn.ntruss.com/2020/08/c20c93c802cd4949ad32134d5a252ff7'}}/> */}
			<Image style={photo.size_img} source={props.source} />
			{/* <SvgWrapper style={{width:70*DP,height:62*DP}} svg={<CameraIconWhite/>}/> */}
		</View>
	);
};

export default AddPhoto = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const photo = StyleSheet.create({
	wrp_photo: {
		height: 186 * DP,
		width: 186 * DP,
		marginBottom: 2 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	size_img: {
		height: 186 * DP,
		width: 186 * DP,
	},
});

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_img: {
		height: 750 * DP,
		backgroundColor: 'red',
	},
	box_title: {
		height: 102 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 48 * DP,
	},
	box_photolist: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
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
		width: 198 * DP,
		height: 60 * DP,
	},
	btn_profile: {
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		// zIndex: 150,
	},
	cntr_dropdown: {
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		marginTop: 40 * DP,
		justifyContent: 'space-between',
	},
	dropdown: {},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
	},
	box_menu: {
		backgroundColor: '#FFB6A5',
		height: 312 * DP,
		borderRadius: 30 * DP,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 2,
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
