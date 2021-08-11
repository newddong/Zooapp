import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList} from 'react-native';
import {BtnWriteFeed} from 'Asset/image';

import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import axios from 'axios';
import {serveruri} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default FeedPersonal = ({navigation, route}) => {
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
	const scroll = React.useRef();
	React.useEffect(()=>{
		navigation.setOptions({
			title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.'
		})
	},[]);
	
	
	const [data, setData] = React.useState([]);
	const [postSize, setPostSize] = React.useState({width:0,height:0});
	const lastId = React.useRef('');
	const firstId = React.useRef('');
	const getData = async () => {
		try {
			let postList = await axios.post(serveruri + '/post/getPostListById',{user:route.params.user,post_id:route.params.post_id});
			
			if (postList.data.status === 200) {
				// setData([...data, postList.data.msg]);
				firstId.current = postList.data.firstId;
				lastId.current = postList.data.lastId;
				console.log(firstId.current +  "  :  " +lastId.current);
				setData(postList.data.msg);
				
				// console.log(postList.data.msg);	
			} else {
				alert(postList.data.msg);
			}
		} catch (err) {
			alert(err);
		}
	};

	const getPreData = async () => {
		console.log(data[0]._id);
		console.log(firstId.current);
		
			console.log('yellow!!');
			try{
				let postList = await axios.post(serveruri + '/post/getPrePostList',{user:route.params.user,post_id:firstId.current});
				console.log(postList.data);
				if (postList.data.status === 200) {
					firstId.current = postList.data.firstId;
					setData([...postList.data.msg,...data]);
					// setData(postList.data.msg);
					
					console.log(postList.data.msg);	
				} else {
					alert(postList.data.msg);
				}
			} catch (err) {
				alert(err);
			}
		
	}

	const getAfterData = async () => {
		try{
			let postList = await axios.post(serveruri + '/post/getAfterPostList',{user:route.params.user,post_id:route.params.post_id});
			console.log(postList.data);
			if (postList.data.status === 200) {
				setData([...data, postList.data.msg]);
				// setData(postList.data.msg);
				
				// console.log(postList.data.msg);	
			} else {
				alert(postList.data.msg);
			}
		} catch (err) {
			alert(err);
		}
	}

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', e => {
			getData();
		});
		
		return unsubscribe;
	},[navigation]);

	// React.useEffect(()=>{
	// 	scroll.current.scrollToIndex({index:0});
	// },[data])
	

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
		navigation.push('WriteFeed');
	};
	
	const scrollUp = (e) => {
		console.log(e.nativeEvent);
		if(e.nativeEvent.contentOffset.y===0){
			getPreData();
		}
	}

	return (
		<View style={layout.mainContainer}>
			{/* <ScrollView style={layout.contentsScroll}>
				{data.map((e, i) => (
					<Post data={e} key={i} />
				))}
			</ScrollView> */}
			<FlatList
				style={layout.contentsScroll}
				data={data}
				renderItem={({item, index})=> <Post data={item}/>}
				keyExtractor={item=>item._id}
				ref={(ref)=>{scroll.current=ref}}
				initialNumToRender={10}
				// onScroll={(e)=>{console.log(e.nativeEvent)}}
				onScrollBeginDrag={scrollUp}
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
