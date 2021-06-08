import React, {useState} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MyActivity from './myactivity/myactivity';
import Participation from './participation/participation';
import AidRequest from './aidrequest/aidrequest';
import Header from 'Root/screens/header/header';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


export default AnimalSaving = () => {
	return (
		<Stack.Navigator initialRouteName="AnimalSavingHome" headerMode="screen">
			<Stack.Screen
				name="AnimalSavingHome"
				component={AnimalSavingHome}
				options={{header: () => <Header />}}
			/>
		</Stack.Navigator>
	);
};

const AnimalSavingHome = () => {
	return (
		<Tab.Navigator initialRouteName="Request">
			<Tab.Screen name="AidRequest" component={AidRequest} />
			<Tab.Screen name="MyActivity" component={MyActivity} />
			<Tab.Screen name="Participation" component={Participation} />
		</Tab.Navigator>
	);
};