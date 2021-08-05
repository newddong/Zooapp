import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import {SearchIcon} from 'Asset/image';
import Backbutton from 'Screens/header/icon_back.svg';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {txt} from '../home/post/style_post';
import {exportUriList} from 'Screens/camera/addphoto';
// import { CommonActions } from '@react-navigation/native';
// import { useNavigationState } from '@react-navigation/native';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {serveruri, cookieReset} from 'Screens/server';
import axios from 'axios';


export default WriteHeader = ({scene, previous, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
	const label_right_btn = scene.route.name === 'addPhoto' ? '선택' : '공유';

	const rightbtn = () => {
		if (scene.route.name === 'addPhoto') {
			navigation.navigate({name: 'writeFeed', params: {images: exportUriList.current}, merge: true});
		} else if ((scene.route.name = 'writeFeed')) {
			// alert(JSON.stringify(scene));
			console.log(scene.route.params);
			createPost();
		}

		// alert(JSON.stringify(exportUriList.current));
	};

	const createPost = async () => {
		let imageList = exportUriList.current?.map((v,i)=>v.uri);
		let form = new FormData();
		form.append('location','서울 어딘가');
		form.append('time','목요일');
		imageList.map((v,i)=>{
			form.append('imgfile',{
				name:v,
				type:'image/jpeg',
				uri:v,
			})
		})
		
		form.append('content',scene.route.params.content);
		form.append('like',987);
		form.append('count_comment',65);

		console.log('createPost');
		// axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		try {
			await cookieReset(await AsyncStorage.getItem('token'));
			
			let result = await axios.post(serveruri + '/post/createPost', form,{
				headers:{
					'Content-Type':'multipart/form-data'
				}
			});
			console.log(result);
			if (result.data.status === 200) {
				alert(result.data.msg);
			} else {
				alert(result.data.msg);
			}
		} catch (err) {
			alert(err);
		}
		alert('업로드가 완료되었습니다.');
		navigation.navigate({name:'FeedHome'})
	};

	return (
		<View style={[style.headerContainer]}>
			<TouchableWithoutFeedback onPress={navigation.goBack}>
				<View style={{width: 62 * DP, height: 62 * DP, justifyContent: 'center'}}>
					<SvgWrapper style={{width: 32 * DP, height: 32 * DP}} svg={<Backbutton />} />
				</View>
			</TouchableWithoutFeedback>
			<View style={style.cntr_title}>
				<Text style={txt.noto40b}>{title}</Text>
			</View>
			<TouchableWithoutFeedback onPress={rightbtn}>
				<View style={style.rightbtn}>
					<Text style={[txt.noto40b, style.blue]}>{label_right_btn}</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		height: 132 * DP,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		// justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	cntr_title: {
		marginLeft: 34 * DP,
		width: 478 * DP,
		alignItems: 'center',
	},
	backbutton: {
		fontSize: 100 * DP,
	},
	rightbtn: {
		width: 150 * DP,
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
	noto40b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40 * DP,
		lineHeight: 60 * DP,
		includeFontPadding: false,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 48 * DP,
	},
	blue: {
		color: '#007EEC',
	},
});
