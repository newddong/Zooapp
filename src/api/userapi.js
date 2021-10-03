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

export const getUserProfile = async (params, callback) => {
	console.log('getUserProfile');
	try {
		let token = await AsyncStorage.getItem('token');
		await cookieReset(token);
		let result = await axios.post(serveruri + '/user/getUserProfile',
		{user: params.user});
		if(result.data.status===200){
			callback(result.data.msg);
		}else{
			alert('getUserProfile Network Error : ' + JSON.stringify(result.data.msg));
		}
	} catch (err) {
		alert('getUserProfile Code Error : ' + JSON.stringify(err));
	}
};

export const addUser = async (params, callback) => {
	console.log('addUser');
	try {
		let form = new FormData();
		form.append('id',data.phone!==''?data.phone:(data.email+'@'+(data.userEmailCompany===null?data.emailCompany:data.userEmailCompany)));
		form.append('password',data.password);
		form.append('name',data.name);
		form.append('nickname',data.nickname);
		form.append('userType','user');
		form.append('idType',data.mobilecompany?'mobile':'email');
		form.append('mobilecompany',data.mobilecompany);
		form.append('imgfile',{
			name: props.route.params?.image,
			type: 'image/jpeg',
			uri: props.route.params?.image
		});
	} catch (err) {
		alert('addUser Code Error : ' + JSON.stringify(err));
	}

}