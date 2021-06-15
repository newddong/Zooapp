import React, {useState} from 'react';

import Profile from './profile/profile';
import FeedHome from './home/feedhome';

import MainHeader from 'Screens/header/mainheader';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default FeedRoute = () => {
	return (
		<Stack.Navigator initialRouteName="FeedHome" headerMode="screen">
			<Stack.Screen name="FeedHome" component={FeedHome} options={{header: () => <MainHeader />}} />
			<Stack.Screen name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

 
