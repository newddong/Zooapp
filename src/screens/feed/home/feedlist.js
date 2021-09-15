import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList, Text, Dimensions} from 'react-native';
import {BtnWriteFeed} from 'Asset/image';
import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {getPostList, getMorePostList, getPostListByUserId, getMorePostListByUserId} from '../feedapi';
import axios from 'axios';
import {serveruri} from 'Screens/server';
import {feedData} from './feeddata';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default FeedList = ({navigation, route}) => {
	const scroll = React.useRef();
	const currentOffset = React.useRef(0);
	const POSTHEIGHT = 1022 * DP;

	const [data, setData] = React.useState({list: [], liked: [], index: 0});
	const initPostNuber = 3;
	const loadPostNumber = 1;
	const initUserPostNumber = 3;
	const loadUserPostNumber = 1;
	const [listRefresh, refresh] = React.useState(false);

	React.useEffect(() => {
		if (route.name === 'FeedListUser') {
			navigation.setOptions({
				title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.',
			});
		}
	}, []);

	React.useEffect(()=>{
		const unsubscribe = navigation.addListener('blur',()=>{
			// console.log('블러'+JSON.stringify(data));
			feedData.feedHomeData = data;
		});
		return unsubscribe;
	},[data])
	console.log('feedDDDD             '+feedData.feedHomeData.liked);

	React.useEffect(() => {
		if (route.name === 'FeedListHome') {
			const unsubscribe = navigation.addListener('focus', () => {
					setData({});
					setImmediate(()=>{
						console.log(feedData.feedHomeData);
						setData(feedData.feedHomeData);
					});
					// getPostList({number: initPostNuber}, (list, liked) => {
					// 	// setHomeData({list: list, liked: liked});
					// 	feedData.feedHomeData = {list: list, liked: liked, index:0};
					// 	setData(feedData.feedHomeData);
					// });
			});
			return unsubscribe;
		}
	}, [navigation]);


	React.useEffect(() => {
		console.log('feedlist first loading');
		if (route.name === 'FeedListHome') {
			getPostList({number: initPostNuber}, (list, liked) => {
				// setHomeData({list: list, liked: liked});
				setData({list: list, liked: liked, index:0});
			});
		}
		if (route.name === 'FeedListUser') {
			getPostListByUserId(
				{
					user: route.params.user,
					post_id: route.params.post_id,
					number: initUserPostNumber,
				},
				(list, liked, index) => {
					console.log('liked' + liked.toString());
					// setUserData({list: list, liked: liked, index: index});
					setData({list: list, liked: liked, index: index});
					// scroll && scroll.current.scrollToOffset({offset: POSTHEIGHT * index, animated: false});
				},
			);
		}
	}, []);

	const onScrollBeginDrag = e => {
		// console.log('onScrollBeginDrag'+JSON.stringify(e.nativeEvent));
	};
	const onScrollEndDrag = e => {
		// console.log('onScrollEndDrag'+JSON.stringify(e.nativeEvent));
	};
	const onMomentumScrollBegin = e => {
		// console.log('onMomentumScrollBegin'+JSON.stringify(e.nativeEvent));
	};
	const onMomentumScrollEnd = e => {
		if (e.nativeEvent.contentOffset.y < 10 && route.name === 'FeedListUser') {
			/*
			getMorePostListByUserId(
				{
					user: route.params.user,
					post_id: feedList[0]._id,
					option: 'prev',
					number: loadUserPostNumber,
				},
				feedList,
				likedPosts,
				length => {
					console.log('length ' + length);
					refresh(!listRefresh);
					// scroll.current.scrollToOffset({offset: POSTHEIGHT * length + currentOffset.current, animated: false});
					scroll.current.scrollToOffset({offset: POSTHEIGHT * (length-1), animated: false});
				},
			);*/
			getMorePostListByUserId(
				{
					user: route.params.user,
					post_id: data.list[0]._id,
					option: 'prev',
					number: loadUserPostNumber,
				},
				(list, liked, length) => {
					console.log('length' + length);
					// setUserData({list: list.concat(feedList), liked: likedPosts.concat(liked), index: length});
					setData({list: list.concat(feedList), liked: likedPosts.concat(liked), index: length});
				},
			);
		}
	};

	const getItemLayout = (data, index) => {
		return {length: POSTHEIGHT, offset: POSTHEIGHT * index, index}; //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
		// return {length: postLayout.height, offset: postLayout.height * index, index}; //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
	};

	const onScroll = e => {
		currentOffset.current = e.nativeEvent.contentOffset.y;
	};

	const scrollReachBottom = () => {
		console.log('reach bottom');
		if (route.name === 'FeedListUser')
			getMorePostListByUserId(
				{
					user: route.params.user,
					post_id: data.list[data.list.length - 1]._id,
					option: 'next',
					number: loadUserPostNumber,
				},
				(list, liked, length) => {
					// setUserData({list: feedList.concat(list), liked: likedPosts.concat(liked)});
					setData({list: data.list.concat(list), liked: data.liked.concat(liked)});
				},
			);
		if (route.name === 'FeedListHome') {
			getMorePostList(
				{
					post_id: data.list[data.list.length - 1]._id,
					number: loadPostNumber,
				},
				(list, liked) => {
					// setHomeData({list: feedList.concat(list), liked: likedPosts.concat(liked)});
					setData({list: data.list.concat(list), liked: data.liked.concat(liked)});
				},
			);
		}
	};

	const logout = async () => {
		// likedPosts = likedPosts.map(v=>v);
		// refresh(!listRefresh);
		console.log('feedpersonal.js:try to logout');
		// axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		try {
			let result = await axios.post(serveruri + '/auth/logout');
			await AsyncStorage.removeItem('token');
			console.log('feedpersonal.js:' + result);
			navigation.replace('Login');
		} catch (err) {
			alert(err);
		}
	};

	const moveToWrite = () => {
		navigation.navigate('WriteFeed', {screen: 'writeFeed', params: {navfrom: route.name}, merge: true});
	};

	const renderItem = ({item, index}) => <Post data={item} index={index} isLike={data.liked?.includes(item._id)} />;
	return (
		<View style={layout.mainContainer}>
			<FlatList
				style={layout.contentsScroll}
				data={data.list}
				renderItem={renderItem}
				keyExtractor={item => item._id}
				ref={scroll}
				extraData={listRefresh}
				// extraData={context.current.likedPostList}
				initialScrollIndex={data.index}
				initialNumToRender={10}
				windowSize={5}
				onEndReached={scrollReachBottom}
				onEndReachedThreshold={0.6}
				onScroll={onScroll}
				onScrollBeginDrag={onScrollBeginDrag}
				onScrollEndDrag={onScrollEndDrag}
				onMomentumScrollEnd={onMomentumScrollEnd}
				onMomentumScrollBegin={onMomentumScrollBegin}
				getItemLayout={getItemLayout}
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
		backgroundColor: 'yellow',
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
