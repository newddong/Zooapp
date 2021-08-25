import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList, Text, Dimensions} from 'react-native';
import {BtnWriteFeed} from 'Asset/image';

import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import axios from 'axios';
import {serveruri} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default FeedPersonal = ({navigation, route}) => {
	
	const scroll = React.useRef();
	const [data, setData] = React.useState({postList:[],index:0,firstId:'',lastId:''});
	
	const [index, setIndex] = React.useState(0);
	const [postSize, setPostSize] = React.useState({width:0,height:0});
	
	const internals = React.useRef({});
	const currentOffset = React.useRef(0);

	const [postLayout, setPostLayout] = React.useState({width:0,height:0});
	
	const POSTHEIGHT = 1022*DP;
	
	const FIRST_DATA = 1;
	const ADD_PREV_DATA = 2;
	const ADD_NEXT_DATA = 3;
	const NONE_DATA = 4;
	const datamode = React.useRef({mode:NONE_DATA,isLoading:false,length:0});

	React.useEffect(()=>{
		navigation.setOptions({
			title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.'
		})
	},[]);

	React.useEffect(() => {
		console.log('loading');
		getData(2);
	},[]);

	React.useEffect(()=>{
		console.log('feedpersonal.js:datachange'+data.postList.length);
		switch(datamode.current.mode){
			case FIRST_DATA:
				scroll&&scroll.current.scrollToOffset({offset:POSTHEIGHT*data.index,animated:false});
				// datamode.current.isLoading = false;
				break;
			case ADD_PREV_DATA:
				
				console.log('prevdata'+datamode.current.length);
				scroll&&internals.current.firstId&&scroll.current.scrollToOffset({offset:POSTHEIGHT*(datamode.current.length)+currentOffset.current,animated:false});
				
				// scroll&&internals.current.firstId&&scroll.current.scrollToOffset({offset:POSTHEIGHT*(datamode.current.length),animated:false});
				datamode.current.isLoading = false;
				break;
			case ADD_NEXT_DATA:
				datamode.current.isLoading = false;
				break;
			case NONE_DATA:
				break;
		}
		
		// scroll.current&&scroll.current.scrollToOffset({offset:postLayout.height*data.index,animated:false});
	},[data]);

	React.useEffect(()=>{
		console.log('postlayoutchanged');
	}, [postLayout])

	const onlayout = (e)=>{
		console.log('onlayout'+e.nativeEvent.layout.height);
		// datamode.current.isLoading = false;
		// scroll.current&&scroll.current.scrollToOffset({offset:1022*DP*index,animated:false});
		// scroll.current&&scroll.current.scrollToOffset({offset:postLayout.height*data.index,animated:false});
		// setPostLayout(e.nativeEvent.layout);
		// switch(datamode.current.mode){
		// 	case FIRST_DATA:
		// 		scroll&&scroll.current.scrollToOffset({offset:POSTHEIGHT*data.index,animated:false});
		// 		datamode.current.isLoading = false;
		// 		break;
		// 	case ADD_PREV_DATA:
				
		// 		console.log('prevdata'+(datamode.current.length*POSTHEIGHT+currentOffset.current));
		// 		scroll&&internals.current.firstId&&scroll.current.scrollToOffset({offset:POSTHEIGHT*(datamode.current.length)+currentOffset.current,animated:false});
		// 		console.log('prev'+datamode.current.length);
				
		// 		// scroll&&internals.current.firstId&&scroll.current.scrollToOffset({offset:POSTHEIGHT*(datamode.current.length),animated:false});
		// 		datamode.current.isLoading = false;
				
		// 		break;
		// 	case ADD_NEXT_DATA:
		// 		datamode.current.isLoading = false;
		// 		break;
		// 	case NONE_DATA:
		// 		break;
		// }
	}
	
	const getData = async (reqNum) => {
		datamode.current.mode = FIRST_DATA;
		datamode.current.isLoading = true;
		try {
			let recieved = await axios.post(serveruri + '/post/getPostListById',
				{
					user : route.params.user, 
					post_id : route.params.post_id,
					number: reqNum
				});
			const { msg, index, firstId, lastId, status} = recieved.data;
			console.log('feedpersonal.js:fn_getData:'+index+':'+':content:'+msg.map((v,i)=>v.content));
			if (status === 200) {
				internals.current = {firstId:firstId,lastId:lastId};
				setData({postList:msg, index:index, firstId:firstId, lastId:lastId});
			} else {
				alert(msg);
			}
		} catch (err) {
			alert(JSON.stringify(err));
		}
	};

	const getMorePost = async (option, reqNum) => {
		console.log('getmorepost!');
		datamode.current.mode = option==='prev'?ADD_PREV_DATA:ADD_NEXT_DATA;
		try{
				let recieved = await axios.post(serveruri + '/post/getMorePostList',
					{ 
						user:route.params.user,
						post_id:option==='prev'?internals.current.firstId:internals.current.lastId,
						option:option,
						number:reqNum
					});
				const { msg, firstId, lastId, status, length } = recieved.data;
				// console.log('feedpersonal.js:fn_getMorePost:'+option+JSON.stringify(recieved.data));
				console.log('feedpersonal.js:fn_getMorePost:'+option+':content:'+msg.map((v,i)=>v.content));
				if (status === 200) {
					datamode.current.length = length;
					if(option==='next'){
						internals.current.lastId=lastId;
						setData({
							postList:[...data.postList,...msg],
							firstId:firstId,
							lastId:lastId,
							length:length
						});
					}
					if(option==='prev'){
						internals.current.firstId=firstId;
						setData({
							postList:[...msg,...data.postList],
							firstId:firstId,
							// length:length
						});
					}
					// console.log('feedpersonal.js:getMorePost:msg:'+JSON.stringify(msg));	
				} else {
					// console.log('feedpersonal.js:getMorePost:msg:'+JSON.stringify(msg));
					alert(JSON.stringify(msg));
				}
		} catch (err) {
				console.log('feedpersonal.js:getMorePost:err:'+JSON.stringify(err));
				alert(JSON.stringify(err));
		}
	};
	const onScrollBeginDrag = (e) => {
		// console.log('onScrollBeginDrag'+JSON.stringify(e.nativeEvent));
	}
	const onScrollEndDrag = (e) => {
		// console.log('onScrollEndDrag'+JSON.stringify(e.nativeEvent));
	}
	const onMomentumScrollBegin = (e) =>{
		// console.log('onMomentumScrollBegin'+JSON.stringify(e.nativeEvent));
	}
	const onMomentumScrollEnd = (e) => {
		// console.log('onMomentumScrollEnd'+JSON.stringify(e.nativeEvent));
		if(e.nativeEvent.contentOffset.y<POSTHEIGHT&&!datamode.current.isLoading){
				datamode.current.isLoading = true;
				getMorePost('prev',1);
		}
	}

	const onScroll = (e) => {
		currentOffset.current = e.nativeEvent.contentOffset.y;
	}

	const scrollReachBottom = () => {
		if(internals.current.lastId)getMorePost('next',2);
	}	

	const logout = async () => {
		console.log('feedpersonal.js:try to logout');
		// axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		try {
			let result = await axios.post(serveruri + '/auth/logout');
			await AsyncStorage.removeItem('token');
			console.log('feedpersonal.js:'+result);
			navigation.replace('Login');
		} catch (err) {
			alert(err);
		}
	};
	
	const moveToWrite = () => {
		navigation.navigate('WriteFeed',{screen:'writeFeed',params:{navfrom:'FeedPersonal'},merge:true});
	};
	const test = ()=>{
		// scroll&&scroll.current.scrollToOffset({offset:500,animated:false});
		getMorePost('prev',1);
	}

	const renderItem = ({item, index})=> <Post data={item} onLayout={onlayout}/>;

	return (
		<View style={layout.mainContainer}>
			{/* <ScrollView style={layout.contentsScroll}>
				{data.map((e, i) => (
					<Post data={e} key={i} />
				))}
			</ScrollView> */}
			
			<FlatList
				style={layout.contentsScroll}
				data={data.postList}
				renderItem={renderItem}
				keyExtractor={item=>item._id}
				ref={scroll}
				initialNumToRender={4}
				windowSize={3}
				onEndReached={scrollReachBottom}
				onScroll={onScroll}
				onScrollBeginDrag={onScrollBeginDrag}
				onScrollEndDrag={onScrollEndDrag}
				onMomentumScrollEnd={onMomentumScrollEnd}
				onMomentumScrollBegin={onMomentumScrollBegin}
				getItemLayout={(data, index) => { 
					// console.log('getItemlayout'+index);
					return {length: POSTHEIGHT, offset: POSTHEIGHT * index, index} //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
					// return {length: postLayout.height, offset: postLayout.height * index, index}; //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
				 }}
				
			/>


			<View style={[layout.btn_write_shadow]}/>
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
