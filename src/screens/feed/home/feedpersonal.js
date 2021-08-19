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
	const dataLoading = React.useRef(false);
	const scroll = React.useRef();
	const [data, setData] = React.useState([]);
	const [index, setIndex] = React.useState(0);
	const [postSize, setPostSize] = React.useState({width:0,height:0});
	const lastId = React.useRef('');
	const firstId = React.useRef('');


	React.useEffect(()=>{
		navigation.setOptions({
			title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.'
		})
	},[]);

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', e => {
			getData();
		});
		return unsubscribe;
	},[navigation]);

	const getData = async () => {
		try {
			let postList = await axios.post(serveruri + '/post/getPostListById',{user:route.params.user,post_id:route.params.post_id});
			console.log(postList.data.index);
			if (postList.data.status === 200) {
				// setData([...data, postList.data.msg]);
				firstId.current = postList.data.firstId;
				lastId.current = postList.data.lastId;
				setData(postList.data.msg);
				setIndex(postList.data.index);
				// console.log(postList.data.msg);	
			} else {
				alert(postList.data.msg);
			}
		} catch (err) {
			alert(err);
		}
	};

	const getMorePost = async (option, reqNum) => {
		dataLoading.current=true;
		try{
				let postList = await axios.post(serveruri + '/post/getMorePostList',{user:route.params.user,post_id:option==='prev'?firstId.current:lastId.current,option:option,number:reqNum});
				console.log(postList.data);
				if (postList.data.status === 200) {
					if(option==='next'){
						lastId.current = postList.data.lastId;
						setData([...data,...postList.data.msg]);
					}
					if(option==='prev'){
						firstId.current = postList.data.firstId;
						setData([...postList.data.msg, ...data]);
					}
					console.log(postList.data.msg);	
				} else {
					console.log(postList.data.msg);
					alert(postList.data.msg);
				}
		} catch (err) {
				console.log(err);
				alert(err);
		}
	}

	const onScroll = (e) => {
		console.log(e.nativeEvent.contentOffset.y);
		let currentOffset = e.nativeEvent.contentOffset.y;
		if(e.nativeEvent.contentOffset.y<1022*DP&&!dataLoading.current){
			console.log('trigger');
			getMorePost('prev',2);
			scroll.current.scrollToOffset({y:1022*DP*4,animated:false});
			dataLoading.current = false;
		}
	}

	const scrollReachBottom = () => {
		getMorePost('next',2);
		dataLoading.current=false;
	}	

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
		navigation.navigate('WriteFeed',{screen:'writeFeed',params:{navfrom:'FeedPersonal'},merge:true});
	};
	

	
	const offset = React.useRef(0);
	const test = () => {

		
		
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
				ref={scroll}
				initialNumToRender={4}
				initialScrollIndex={index} //API에서 받아오는 첫 포스트 리스트의 해당 개시물 index는 2
				onScroll={onScroll}
				// onScrollBeginDrag={(e)=>{console.log('scroll begin drag'+JSON.stringify(e.nativeEvent))}}
				// onScrollBeginDrag={test2}
				// onScrollEndDrag={test2}
				// onScroll={test2}
				// onMomentumScrollBegin={test2}
				// onScroll={(e)=>{console.log(e.nativeEvent)}}
				onEndReached={scrollReachBottom}
				getItemLayout={(data, index) => (
					{length: 1022*DP, offset: 1022*DP * index, index} //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
				 )}
				
				
			/>

			

			<View style={[layout.btn_write_shadow]} />
			<TouchableWithoutFeedback onPress={moveToWrite}>
				<View style={layout.btn_write}>
					<SvgWrapper style={{width: 70 * DP, height: 70 * DP}} svg={<BtnWriteFeed fill="#fff" />} />
				</View>
			</TouchableWithoutFeedback>
			
			<TouchableWithoutFeedback onPress={test}>
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
