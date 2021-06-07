import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import Header from 'Screens/header/header';

import MovieHome from './moviehome/moviehome';
import MoviePlay from './moviehome/subcomponent/movieplay';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default Movie = () => {
	return (
		<Stack.Navigator initialRouteName="MovieHome" headerMode='screen'>
			<Stack.Screen name="MovieHome" component={MovieHome} options={{header: () => <Header />}} />
			<Stack.Screen name="MoviePlay" component={MoviePlay} />
		</Stack.Navigator>
	);
};

