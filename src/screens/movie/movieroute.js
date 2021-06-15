import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import MainHeader from 'Screens/header/mainheader';
import StackHeader from 'Screens/header/stackheader';

import MovieHome from './moviehome/moviehome';
import MoviePlay from './moviehome/subcomponent/movieplay';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default MovieRoute = () => {
	return (
		// <Stack.Navigator initialRouteName="MovieHome" headerMode='screen'>
		<Stack.Navigator initialRouteName="MovieHome" headerMode='screen' screenOptions={{
			header:(props)=>(<StackHeader {...props}/>)
		}}>
			<Stack.Screen name="MovieHome" component={MovieHome} options={{header: () => <MainHeader />}} />
			<Stack.Screen name="MoviePlay" component={MoviePlay} />
		</Stack.Navigator>
	);
};

