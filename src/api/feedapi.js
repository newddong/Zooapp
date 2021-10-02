import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPostList = async (params, /*data, likedPosts,*/ callback) => {
	console.log('getPostList');
	try {
		let recieved = await axios.post(serveruri + '/post/getPostList', {number: params.number});
		const {msg, status, likedPost} = recieved.data;
		console.log('getPostList likedPost' + likedPost?.toString());
		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost);
		} else {
			alert('getPostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostList Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostList = async (params, /*data, likedPosts,*/ callback) => {
	console.log('getMorePostList' + params.post_id);
	try {
		let recieved = await axios.post(serveruri + '/post/getMorePostList', {
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, status, likedPost} = recieved.data;
		console.log('getMorePostList likedPost : ' + likedPost?.toString());

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost);
		} else {
			alert('getMorePostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostList Code Error : ' + JSON.stringify(err));
	}
};

export const getPostListByUserId = async (params, /*data, likedPosts,*/ callback) => {
	try {
		// data.splice(0);
		let recieved = await axios.post(serveruri + '/post/getPostListByUserId', {
			user: params.user,
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, index, status, likedPost} = recieved.data;
		console.log('getPostListByUserId likedPost: ' + likedPost?.toString());
		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg, likedPost, index);
		} else {
			alert('getPostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostListByUserId = async (params, /* data, likedPosts,*/ callback) => {
	try {
		let recieved = await axios.post(serveruri + '/post/getMorePostListByUserId', {
			user: params.user,
			post_id: params.post_id,
			option: params.option,
			number: params.number,
		});

		const {msg, status, length, likedPost} = recieved.data;
		console.log('getMorePostListByUserId likedPost: ' + likedPost?.toString());

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });

			// if (params.option === 'next') {
			// 	msg.map((v_msg,i)=>{
			// 		!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// 	});
			// }
			// if (params.option === 'prev') {
			// 	msg.reverse().map((v_msg,i)=>{
			// 		!data.find((v_data)=>v_data._id==v_msg._id)&&data.unshift(v_msg);
			// 	});
			// }
			callback(msg, likedPost, length);
		} else {
			alert('getMorePostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export const likePost = async (params, callback) => {
	console.log('likePost=>' + params.post_id);
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
	console.log('dislikePost=>' + params.post_id);
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

export const createPost = async (params, callback) => {
	console.log('createPost=>'+ params);
	let form = new FormData();
	form.append('location',params.location);
	form.append('time',params.time);
	params.imageList?.map((v)=>{
		form.append('imgfile',{
			name:v.uri,type:'image/jpeg',uri:v.uri
		})
	});
	form.append('content',params.content);
	params.imageList?.forEach(v => {
		form.append('images',JSON.stringify(v));
	});

	try{
		await cookieReset(await AsyncStorage.getItem('token'));
		let result = await axios.post(serveruri + '/post/createPost', form, {
			headers:{
				'Content-Type':'multipart/form-data'
			}
		});
		if(result.data.status === 200){
			callback(result.data);
		}else{
			alert('createPost Network Error : '+JSON.stringify(result.data.msg));
		}
	}
	catch(err){
		alert('createPost Code Error : '+JSON.stringify(err));
	}
}

export const editPost = async (params, callback) => {
	// console.log('editPost=>'+ JSON.stringify(params));
	let form = new FormData();
	form.append('post_id',params.post_id);
	form.append('location',params.location);
	form.append('time',params.time);
	form.append('content',params.content);
	if(Array.isArray(params.images)){
		params.images.forEach((v)=>{
			if(v.uri.includes('http')){
				form.append('httpImages',JSON.stringify(v));
				// form.append('httpImages',v);
			}else{
				form.append('localImages',JSON.stringify(v));
				// form.append('localImages',v);
				form.append('imgfile',{
					name:v.uri,type:'image/jpeg',uri:v.uri
				})
			}
		})
	}
	// params.imageList?.map((v)=>{
	// 	form.append('imgfile',{
	// 		name:v.uri,type:'image/jpeg',uri:v.uri
	// 	})
	// });
	// params.images?.forEach(v => {
	// 	form.append('images',JSON.stringify(v));
	// });
	// console.log(form.getAll('images'));
	try{
		// await cookieReset(await AsyncStorage.getItem('token'));
		let result = await axios.post(serveruri + '/post/editPost', form, {
			headers:{
				'Content-Type':'multipart/form-data'
			}
		});
		if(result.data.status === 200){
			callback(result.data);
		}else{
			alert('editPost Network Error : '+JSON.stringify(result.data.msg));
		}
	}
	catch(err){
		alert('editPost Code Error : '+JSON.stringify(err));
	}
}




//comment api




export const getCommentList = async (params, callback) => {
	console.log('getCommentList');
	try {
		let result = await axios.post(serveruri + '/comment/getCommentList', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.liked);
		} else {
			alert('getCommentList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getCommentList Code Error : ' + JSON.stringify(err));
	}
};

export const getChildCommentList = async (params, callback) => {
	console.log('getChildCommentList');
	try {
		let result = await axios.post(serveruri + '/comment/getChildCommentList', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.liked);
		} else {
			alert('getChildCommentList Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getChildCommentList Code Error : ' + JSON.stringify(err));
	}
};

export const createComment = async (params, callback) => {
	console.log('createComment');
	let form = new FormData();
	form.append('post_id', params.post_id);
	form.append('parent_id', params.parent_id);
	form.append('comment', params.comment);
	params.image && form.append('imgfile', {name: params.image, uri: params.image, type: 'image/jpeg'});

	try {
		// await cookieReset(await AsyncStorage.getItem('token'));

		let result = await axios.post(serveruri + '/comment/createComment', form, {headers: {'Content-Type': 'multipart/form-data'}});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.user);
		} else {
			alert('createComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('createComment Code Error : ' + JSON.stringify(err));
	}
};

export const modifyComment = async (params, callback) => {
	console.log('editComment');
	let form = new FormData();
	form.append('comment_id', params.comment_id);
	form.append('comment', params.comment);
	if (params.images) {
		if (params.images.includes('http')) {
			console.log('http');
			form.append('images', params.images);
		} else {
			console.log('file');
			form.append('imgfile', {name: params.images, uri: params.images, type: 'image/jpeg'});
		}
	}

	try {
		// await cookieReset(await AsyncStorage.getItem('token'));

		let result = await axios.post(serveruri + '/comment/editComment', form, {headers: {'Content-Type': 'multipart/form-data'}});
		if (result.data.status === 200) {
			callback(result.data.msg, result.data.user);
		} else {
			alert('createComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('createComment Code Error : ' + JSON.stringify(err));
	}
};

export const deleteComment = async (params, callback) => {
	console.log('deleteComment');
	try {
		let result = await axios.post(serveruri + '/comment/deleteComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('deleteComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('deleteComment Code Error : ' + JSON.stringify(err));
	}
};

export const likeComment = async (params, callback) => {
	console.log('likeComment=>' + params.comment_id);
	try {
		let result = await axios.post(serveruri + '/comment/likeComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('likeComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('likeComment Code Error : ' + JSON.stringify(err));
	}
};

export const dislikeComment = async (params, callback) => {
	console.log('dislikeComment=>' + params.comment_id);
	try {
		let result = await axios.post(serveruri + '/comment/dislikeComment', {
			comment_id: params.comment_id,
		});
		if (result.data.status === 200) {
			callback();
		} else {
			alert('dislikeComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('dislikeComment Code Error : ' + JSON.stringify(err));
	}
};
