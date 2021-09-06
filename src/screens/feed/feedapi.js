import axios from 'axios';
import {serveruri} from 'Screens/server';

export const getLikedPostId = async (params, context,cb) => {
	console.log('getLikedPostId');
	try {
		let recieved = await axios.post(serveruri + '/post/getLikedPostId', {start_id: params.firstId, end_id:params.lastId});
		const {status, likedPost} = recieved.data;
		console.log('getLikedPostId' + likedPost?.toString());
		context.current.likedPostList =[];
		if (status === 200) {
			likedPost.map((v, i) => {
				!context.current.likedPostList.includes(v) && context.current.likedPostList.push(v);
			});
			cb();
		} else {
			alert('getLikedPostId Server Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getLikedPostId Code Error : ' + JSON.stringify(err));
	}
};

export const getPostList = async (params, setStateFn, context) => {
	console.log('getPostList');
	try {
		let recieved = await axios.post(serveruri + '/post/getPostList', {number: params.number});
      const {msg, index, firstId, lastId, status, likedPost} = recieved.data;
		console.log('likedPost' + likedPost?.toString());
		context.current.likedPostList.splice(0);
		likedPost.map((v, i) => {
			!context.current.likedPostList.includes(v) && context.current.likedPostList.push(v);
		});
		if (status === 200) {
         context.current = {...context.current, firstId: firstId, lastId: lastId, index: index};
         setStateFn({postList: msg, index: index, firstId: firstId, lastId: lastId});
		} else {
			alert('getPostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostList Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostList = async (params, state, setStateFn, context) => {
	console.log('getMorePostList'+params.post_id);
	try {
      let recieved = await axios.post(serveruri + '/post/getMorePostList', {
         post_id: params.post_id,
         number: params.number});
      const {msg, index, firstId, lastId, status, likedPost} = recieved.data;
		console.log('likedPost : ' + likedPost?.toString());
      likedPost?.map((v, i) => {
         console.log(context.current)
			!context.current.likedPostList.includes(v) && context.current.likedPostList.push(v);
		});
		if (status === 200) {
         // context.current = {...context.current, firstId: firstId, lastId: lastId, index: index};
         context.current.lastId = lastId;
			setStateFn({postList: [...state.postList,...msg], index: index, firstId: firstId, lastId: lastId});
		} else {
			alert('getMorePostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostList Code Error : ' + JSON.stringify(err));
	}
};

export const getPostListByUserId = async (params, setStateFn, context) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getPostListByUserId', {
			user: params.user,
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, index, firstId, lastId, status, likedPost} = recieved.data;
		console.log('getPostListByUserId likedPost: ' + likedPost?.toString());
		likedPost.map((v, i) => {
			!context.current.likedPostList.includes(v) && context.current.likedPostList.push(v);
		});
		if (status === 200) {
			context.current = {...context.current, firstId: firstId, lastId: lastId, index: index};
			setStateFn({postList: msg, index: index, firstId: firstId, lastId: lastId});
		} else {
			alert('getPostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostListByUserId = async (params, state, setStateFn, context) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getMorePostListByUserId', {
			user: params.user,
			post_id: params.option === 'prev' ? context.current.firstId : context.current.lastId,
			option: params.option,
			number: params.number,
		});

		const {msg, firstId, lastId, status, length, likedPost} = recieved.data;
		likedPost?.map((v, i) => {
			!context.current.likedPostList.includes(v) && context.current.likedPostList.push(v);
		});
		console.log('getMorePostListByUserId likedPost: ' + likedPost?.toString());

		if (status === 200) {
			context.current.length = length;
			if (params.option === 'next') {
				context.current.lastId = lastId;
				setStateFn({
					postList: [...state.postList, ...msg],
					firstId: firstId,
					lastId: lastId,
					length: length,
				});
			}
			if (params.option === 'prev') {
				context.current.firstId = firstId;
				setStateFn({
					postList: [...msg, ...state.postList],
					firstId: firstId,
					lastId: lastId,
					length: length,
				});
			}
		} else {
			alert('getMorePostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export const likePost = async (params, callback) => {
	console.log('likePost=>'+params.post_id);
	try {
		let result = await axios.post(serveruri + '/post/likePost', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('likePost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('likePost Code Error : ' + JSON.stringify(err));
	}
};

export const dislikePost = async (params, callback) => {
	console.log('dislikePost=>'+params.post_id);
	try {
		let result = await axios.post(serveruri + '/post/dislikePost', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('dislikePost Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('dislikePost Code Error : ' + JSON.stringify(err));
	}
};
