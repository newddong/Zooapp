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
	Alert
} from 'react-native';

import {DeleteImage, CameraIconWhite, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from 'Screens/camera/camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';
import Photos from 'Screens/camera/photos';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import {txt} from 'Root/screens/textstyle';
import Swiper from 'react-native-swiper';
import {useNavigation, useRoute} from '@react-navigation/native';
import Tag from './tag';
import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';

export default PhotoTagItem = ({style, data, onMakeTag, onDeleteTag}) => {
	const [tags, setTags] = React.useState(data.tags?data.tags:[]);
	const nav = useNavigation();
	const route = useRoute();
	const clickedPost = React.useRef({x: -1, y: -1});

	const makeTag = e => {
		clickedPost.current = {x: e.nativeEvent.locationX, y: e.nativeEvent.locationY};
		nav.push('userList', {navfrom: route.name});
	};

	const deleteTag = user => {
		// console.log('delete');
		// console.log(user);
		// console.log(tags);
		onDeleteTag&&onDeleteTag(user, data.uri);
		setTags(tags.filter(v => v.user._id !== user._id));
	};

	React.useEffect(() => {
		if(clickedPost.current.x<0||clickedPost.current.y<0)return;

		if (route.params.selectedUser) {
			let newTag = {x: clickedPost.current.x, y: clickedPost.current.y, user: route.params.selectedUser};
			setTags(
				tags.filter(v=>v.user._id!==route.params.selectedUser._id)
					.concat(newTag)
			);
			clickedPost.current = {x:-1,y:-1};
			onMakeTag&&onMakeTag(newTag.user, data.uri);
		}
	}, [route]);

	const test = async () => {
		console.log(tags);
		// let a =  await axios.post(serveruri + '/user/test', {array: tags});
		// console.log(a);
	}



	return (
		<TouchableWithoutFeedback onPress={makeTag}>
			<View style={style}>
				<FastImage style={style} source={{uri: data.uri}} />
				<View style={{backgroundColor:'green',width:750*DP,height:750*DP,position:'absolute'}}>
				{tags.map((v, i) => (
					<Tag pos={v} key={i} user={v.user} onDelete={deleteTag} />
				))}
				</View>
				<TouchableWithoutFeedback onPress={test}>
						<View style={{width:150*DP,height:150*DP,backgroundColor:'red',position:'absolute'}} />
				</TouchableWithoutFeedback>
			</View>
		</TouchableWithoutFeedback>
	);
};

PhotoTagItem.defaultProps = {
	style: {},
	data: {},
	index: 0,
};
