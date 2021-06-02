import React, {useState} from 'react';


import Profile from './profile/profile';
import Home from './home/home';

import Header from '../header/header';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Feed = () => {
	
	return (
		<Stack.Navigator initialRouteName="Home" >
			<Stack.Screen name="Home" component={Home} options={{header:()=><Header/>		
		}}/>
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default Feed;
