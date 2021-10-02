import React, {useEffect} from 'react';
import Route from './route';
import SplashScreen from 'react-native-splash-screen'; 

export default App = () => {
	useEffect(() => {
		try {
		  setTimeout(() => {
				SplashScreen.hide();
		  }, 1000); /** 스플래시 시간 조절 (1초) **/
		} catch(e) {
		  console.warn('Error');
		  console.warn(e);
		}
	 });	

	return (
		<Route/>
	);
};

