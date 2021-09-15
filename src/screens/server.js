import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const serveruri = 'http://10.0.2.2:3000';
// export const serveruri = 'http://172.30.1.22:3000';
// export const serveruri = 'http://220.71.25.203:3000';
export const serveruri = 'https://api.zoodoongi.net';

export const cookieReset = async (token) => {
	await CookieManager.clearAll();
	await CookieManager.set(serveruri, {
		name: 'connect.sid',
		value: token,
		path: '/',
	});
};
