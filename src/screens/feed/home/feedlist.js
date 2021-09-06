import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList, Text, Dimensions} from 'react-native';
import {BtnWriteFeed} from 'Asset/image';
import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {getPostList, getMorePostList, getPostListByUserId, getMorePostListByUserId, getLikedPostId} from '../feedapi';

import {feedData} from './feeddata';

export default FeedList = ({navigation, route}) => {
	const scroll = React.useRef();
	const [data, setData] = React.useState({postList: [], index: 0, firstId: '', lastId: ''});
	const currentOffset = React.useRef(0);
	const POSTHEIGHT = 1022 * DP;
	const FIRST_DATA = 1;
	const ADD_PREV_DATA = 2;
	const ADD_NEXT_DATA = 3;
	const NONE_DATA = 4;
	const FOCUSED = 5;
	const [listRefresh, refresh] = React.useState(false);
	const context = React.useRef({
		likedPostList: [],
		datamode: NONE_DATA,
		isDataLoading: false,
		dataLength: 0,
		firstId: undefined,
		lastId: undefined,
		index: 0,
	});

	const feedList = route.name === 'FeedListHome' ? feedData.feedHomeData : feedData.feedUserData;
	const likedPosts = feedData.likedPosts;

	React.useEffect(() => {
		if (route.name === 'FeedListUser') {
			navigation.setOptions({
				title: route.params ? route.params.user_id : '존재하지 않는 유저입니다.',
			});
		}
	}, []);
	/*
	React.useEffect(() => {
		if (route.name === 'FeedListHome') {
			const unsubscribe = navigation.addListener('focus', e => {
				getLikedPostId({firstId: context.current.firstId, lastId: context.current.lastId}, context,()=>{refresh(!listRefresh)});
			});
			return unsubscribe;
		}
	}, []);
*/
	React.useEffect(() => {
		console.log('feedpersonal first loading');
		context.current.datamode = FIRST_DATA;
		context.current.isDataLoading = true;
		if (route.name === 'FeedListHome') {
			getPostList({number: 2}, feedList, likedPosts, () => {
				refresh(!listRefresh);
				console.log(feedList);
			});
		}
		if (route.name === 'FeedListUser') {
			getPostListByUserId(
				{
					user: route.params.user,
					post_id: route.params.post_id,
					number: 2,
				},
				feedList,
				likedPosts,
				index => {
					refresh(!listRefresh);
					scroll && scroll.current.scrollToOffset({offset: POSTHEIGHT * index, animated: false});
				},
			);
		}
	}, []);

	React.useEffect(() => {
		console.log('feedpersonal.js:datachange' + data.postList?.length);
		switch (context.current.datamode) {
			case FIRST_DATA:
				route.name === 'FeedListUser' && scroll && scroll.current.scrollToOffset({offset: POSTHEIGHT * context.current.index, animated: false});
				context.current.isDataLoading = false;
				break;
			case ADD_PREV_DATA:
				console.log('prevdata' + context.current.length);
				scroll &&
					context.current.firstId &&
					scroll.current.scrollToOffset({offset: POSTHEIGHT * context.current.length + currentOffset.current, animated: false});

				context.current.isDataLoading = false;
				break;
			case ADD_NEXT_DATA:
				context.current.isDataLoading = false;
				break;
			case NONE_DATA:
				break;
		}
	}, [data]);

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
		if (e.nativeEvent.contentOffset.y < POSTHEIGHT && route.name === 'FeedListUser') {
			context.current.isDataLoading = true;
			context.current.datamode = ADD_PREV_DATA;
			getMorePostListByUserId(
				{
					user: route.params.user,
					post_id: feedList[0]._id,
					option: 'prev',
					number: 3,
				},
				feedList,
				likedPosts,
				(length) => {
					refresh(!listRefresh);
					scroll.current.scrollToOffset({offset: POSTHEIGHT * length + currentOffset.current, animated: false});
				},
			);
		}
	};

	const getItemLayout = (data, index) => {
		// console.log('getItemlayout'+index);
		return {length: POSTHEIGHT, offset: POSTHEIGHT * index, index}; //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
		// return {length: postLayout.height, offset: postLayout.height * index, index}; //포스트가 최초 랜더링 되었을때의 크기(더보기, 댓글 더보기 기능이 활성화되지않은 기본 크기)
	};

	const onScroll = e => {
		currentOffset.current = e.nativeEvent.contentOffset.y;
	};

	const scrollReachBottom = () => {
		console.log('reach bottom');
		context.current.datamode = ADD_NEXT_DATA;
		if (route.name === 'FeedListUser')
			getMorePostListByUserId(
				{
					user: route.params.user,
					post_id: feedList[feedList.length-1]._id,
					option: 'next',
					number: 2,
				},
				feedList,
				likedPosts,
				() => {
					refresh(!listRefresh);
				},
			);
		if (route.name === 'FeedListHome') {
			getMorePostList(
				{
					post_id: feedList[feedList.length - 1]._id,
					number: 2,
				},
				feedList,
				likedPosts,
				() => {
					refresh(!listRefresh);
				},
			);
		}
	};

	const logout = async () => {
		// console.log('feedpersonal.js:try to logout');
		// // axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
		// try {
		// 	let result = await axios.post(serveruri + '/auth/logout');
		// 	await AsyncStorage.removeItem('token');
		// 	console.log('feedpersonal.js:' + result);
		// 	navigation.replace('Login');
		// } catch (err) {
		// 	alert(err);
		// }
	};

	const moveToWrite = () => {
		navigation.navigate('WriteFeed', {screen: 'writeFeed', params: {navfrom: route.name}, merge: true});
	};

	const renderItem = ({item, index}) => <Post data={item} index={index} extraData={context.current.likedPostList} />;
	console.log('likedPostList' + context.current.likedPostList?.toString());
	return (
		<View style={layout.mainContainer}>
			<FlatList
				style={layout.contentsScroll}
				data={feedList}
				renderItem={renderItem}
				keyExtractor={item => item._id}
				ref={scroll}
				extraData={listRefresh}
				// extraData={context.current.likedPostList}
				initialNumToRender={4}
				windowSize={3}
				onEndReached={scrollReachBottom}
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
