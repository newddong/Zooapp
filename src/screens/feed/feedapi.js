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

export const getPostList = async (params, data, likedPosts, callback) => {
	console.log('getPostList');
	try {
		let recieved = await axios.post(serveruri + '/post/getPostList', {number: params.number});
      const {msg, status, likedPost} = recieved.data;
		console.log('getPostList likedPost' + likedPost?.toString());
		if (status === 200) {
			likedPost?.map((v, i) => {
				!likedPosts.includes(v) && likedPosts.push(v);
			});
			msg.map((v_msg,i)=>{
				!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			});
			callback();
		} else {
			alert('getPostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostList Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostList = async (params, data, likedPosts, callback) => {
	console.log('getMorePostList'+params.post_id);
	try {
      let recieved = await axios.post(serveruri + '/post/getMorePostList', {
         post_id: params.post_id,
         number: params.number});
      const {msg, status, likedPost} = recieved.data;
		console.log('getMorePostList likedPost : ' + likedPost?.toString());
      
		if (status === 200) {
			likedPost?.map((v, i) => {
				!likedPosts.includes(v) && likedPosts.push(v);
			});
			msg.map((v_msg,i)=>{
				!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			});
			callback();
		} else {
			alert('getMorePostList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getMorePostList Code Error : ' + JSON.stringify(err));
	}
};

export const getPostListByUserId = async (params, data, likedPosts, callback) => {
	try {
		data.splice(0);
		let recieved = await axios.post(serveruri + '/post/getPostListByUserId', {
			user: params.user,
			post_id: params.post_id,
			number: params.number,
		});
		const {msg, index, status, likedPost} = recieved.data;
		console.log('getPostListByUserId likedPost: ' + likedPost?.toString());
		if (status === 200) {
			likedPost?.map((v, i) => {
				!likedPosts.includes(v) && likedPosts.push(v);
			});
			msg.map((v_msg,i)=>{
				!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			});
			callback(index);
		} else {
			alert('getPostListByUserId Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getPostListByUserId Code Error : ' + JSON.stringify(err));
	}
};

export const getMorePostListByUserId = async (params, data, likedPosts, callback) => {
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
			likedPost?.map((v, i) => {
				!likedPosts.includes(v) && likedPosts.push(v);
			});
			
			if (params.option === 'next') {
				msg.map((v_msg,i)=>{
					!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
				});
			}
			if (params.option === 'prev') {
				msg.reverse().map((v_msg,i)=>{
					!data.find((v_data)=>v_data._id==v_msg._id)&&data.unshift(v_msg);
				});
			}
			callback(length);
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

export const getCommentList = async (params, callback) => {
	console.log('getCommentList');
	try{
		let result = await axios.post(serveruri + '/comment/getCommentList', {
			post_id: params.post_id,
		});
		if (result.data.status === 200) {
			callback(result.data.msg);
		} else {
			alert('getCommentList Network Error : ' + JSON.stringify(result.data.msg));
		}
	}catch(err){
		alert('getCommentList Code Error : ' + JSON.stringify(err));
	}

};

export const createComment = async (params, callback) => {
	console.log('createComment');
	try{
		let result = await axios.post(serveruri + '/comment/createComment', {
			post_id: params.post_id,
			comment: params.comment,
		});
		if (result.data.status === 200) {
			callback(result.data.msg,result.data.user);
		} else {
			alert('createComment Network Error : ' + JSON.stringify(result.data.msg));
		}
	}catch(err){
		alert('createComment Code Error : ' + JSON.stringify(err));
	}

}

export const likeComment = async (params, callback) => {
	console.log('likeComment=>'+params.comment_id);
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
	console.log('dislikeComment=>'+params.comment_id);
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