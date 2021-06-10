import React, {useState} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MyActivity from './myactivity/myactivity';
import Participation from './participation/participation';
import AidRequest from './aidrequest/aidrequest';
import Header from 'Root/screens/header/header';
import ParticipationDetail from './participation/participationdetail';
import AidRequestDetail from './aidrequest/aidrequestdetail';

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
			<Stack.Screen
				name="ParticipationDetail"
				component={ParticipationDetail}
			/>
			<Stack.Screen
				name="AidRequestDetail"
				component={AidRequestDetail}
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