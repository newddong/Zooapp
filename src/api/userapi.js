import axios from 'axios';
import {serveruri, cookieReset} from 'Screens/server';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserList = async (params, callback) => {
	console.log('getUserList');
	try {
		let recieved = await axios.post(serveruri + '/user/getUserList', {nickname: params.nickname});
		const {msg, status} = recieved.data;

		if (status === 200) {
			// likedPost?.map((v, i) => {
			// 	!likedPosts.includes(v) && likedPosts.push(v);
			// });
			// msg.map((v_msg,i)=>{
			// 	!data.find((v_data)=>v_data._id==v_msg._id)&&data.push(v_msg);
			// });
			callback(msg);
		} else {
			alert('getUserList Network Error : ' + JSON.stringify(msg));
		}
	} catch (err) {
		alert('getUserList Code Error : ' + JSON.stringify(err));
	}
};
