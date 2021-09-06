import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList, Text} from 'react-native';
import {BtnWriteFeed} from 'Asset/image';

import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import feeddata from './feeddata.json';
import axios from 'axios';
import {serveruri} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPostList} from '../feedapi';

export default FeedHome = ({navigation, route}) => {
	// React.useEffect(() => {
	// 	const unsubscribe = navigation.addListener('beforeRemove', e => {
	// 		e.preventDefault();
	//    //Prompt the user before leaving the screen
	// 		Alert.alert('경고',
	// 		'로그아웃 하시겠습니까?',[{text:'예',onPress:()=>navigation.dispatch(e.data.action)},{text:'아니오',onPress:()=>{return;}}]
	// 		);
	// 	});
	// 	return unsubscribe;
	// }, [navigation]);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', e => {
			getPostList(setData);
		});
		return unsubscribe;
	},[navigation]);

	const logout = async () => {
		console.log('try to logout');
		// axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		try {
			let result = await axios.post(serveruri + '/auth/logout');
			await AsyncStorage.removeItem('token');
			console.log(result);
			navigation.replace('Login');
		} catch (err) {
			alert(err);
		}
	};

	const moveToWrite = () => {
		navigation.navigate('WriteFeed',{screen:'writeFeed',params:{navfrom:'FeedHome'},merge:true});
	};
	const renderItem = ({item, index}) => <Post data={item} index={index} extraData={[]} />;

	return (
		<View style={layout.mainContainer}>
			<Text>feed</Text>
			{/* <ScrollView style={layout.contentsScroll}>
				{data.map((e, i) => (
					<Post data={e} key={i} />
				))}
			</ScrollView> */}
			<FlatList
				style={layout.contentsScroll}
				data={data}
				renderItem={renderItem}
				keyExtractor={item=>item._id}
				initialNumToRender={4}
				windowSize={3}
			/>

			

			<View style={[layout.btn_write_shadow]} />
			<TouchableWithoutFeedback onPress={moveToWrite}>
				<View style={layout.btn_write}>
					<SvgWrapper style={{width: 70 * DP, height: 70 * DP}} svg={<BtnWriteFeed fill="#fff" />} />
				</View>
			</TouchableWithoutFeedback>
			
			<TouchableWithoutFeedback onPress={logout}>
				<View style={layout.btn_logout}>
					<SvgWrapper style={{width: 70 * DP, height: 70 * DP}} svg={<BtnWriteFeed fill="#fff" />} />
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const layout = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
	},
	contentsScroll: {
		width: 654 * DP,
	},
	btn_write: {
		position: 'absolute',
		width: 70 * DP,
		height: 70 * DP,
		bottom: 20 * DP,
		right: 20 * DP,
	},
	btn_logout: {
		position: 'absolute',
		width: 70 * DP,
		height: 70 * DP,
		bottom: 990 * DP,
		right: 20 * DP,
		backgroundColor:'yellow'
	},
	btn_write_shadow: {
		position: 'absolute',
		width: 71 * DP,
		height: 71 * DP,
		bottom: 18 * DP,
		right: 18 * DP,
		backgroundColor: '#767676',
		borderRadius: 70 * DP,
		opacity: 0.3,
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
