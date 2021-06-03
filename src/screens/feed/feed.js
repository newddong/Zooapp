import React, {useState} from 'react';

import Profile from './profile/profile';
import AppHome from './home/apphome';

import Header from '../header/header';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Feed = () => {
	return (
		<Stack.Navigator initialRouteName="AppHome" headerMode='float'> 
			<Stack.Screen name="AppHome" component={AppHome} options={{header: () => <Header />}}/>
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default Feed;
