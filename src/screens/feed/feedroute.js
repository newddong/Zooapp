import React, {useState} from 'react';

import Profile from './profile/profile';
import FeedHome from './home/feedhome';
import WriteFeed from './write/writefeed';
import WriteFeedRoute from './write/writefeedroute';
import MainHeader from 'Screens/header/mainheader';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default FeedRoute = () => {
	return (
		<Stack.Navigator initialRouteName="FeedHome" headerMode="screen">
			<Stack.Screen name="FeedHome" component={FeedHome} options={{header: (props) => <MainHeader {...props}/>}} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="WriteFeed" component={WriteFeedRoute} options={{headerShown:false}}/>
		</Stack.Navigator>
	);
};

 
