import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import MainHeader from 'Screens/header/mainheader';
import MovieHeader from 'Root/screens/header/movieheader';

import MovieHome from './moviehome/moviehome';
import MoviePlay from './moviehome/subcomponent/movieplay';
import CategoryList from './moviehome/subcomponent/categorylist';

import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default MovieRoute = () => {
	return (
		// <Stack.Navigator initialRouteName="MovieHome" headerMode='screen'>
		<Stack.Navigator initialRouteName="MovieHome" headerMode='screen' screenOptions={{
			header:(props)=>(<MovieHeader {...props}/>)
		}}>
			<Stack.Screen name="MovieHome" component={MovieHome} options={{header: () => <MainHeader />}} />
			<Stack.Screen name="MoviePlay" component={MoviePlay} />
			<Stack.Screen name="MovieCategory" component={CategoryList} />
		</Stack.Navigator>
	);
};

