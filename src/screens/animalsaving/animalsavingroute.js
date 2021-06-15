import React, {useState} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MyActivity from './myactivity/myactivity';
import Participation from './participation/participation';
import AidRequest from './aidrequest/aidrequest';
import MainHeader from 'Screens/header/mainheader';
import ParticipationDetail from './participation/participationdetail';
import AidRequestDetail from './aidrequest/aidrequestdetail';
import AidRequestForm from './aidrequest/aidrequestform';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


export default AnimalSavingRoute = () => {
	return (
		<Stack.Navigator initialRouteName="AnimalSavingHome" headerMode="screen">
			<Stack.Screen
				name="AnimalSavingHome"
				component={AnimalSavingHome}
				options={{header: (props) => <MainHeader {...props}/>}}
			/>
			<Stack.Screen
				name="임시보호 참여하기"
				component={ParticipationDetail}
			/>
			<Stack.Screen
				name="AidRequestDetail"
				component={AidRequestDetail}
			/>
			<Stack.Screen
				name="보호 활동 신청"
				component={AidRequestForm}
			/>

		</Stack.Navigator>
	);
};

const AnimalSavingHome = () => {
	return (
		<Tab.Navigator initialRouteName="Request">
			<Tab.Screen name="보호요청" component={AidRequest} />
			<Tab.Screen name="내활동" component={MyActivity} />
			<Tab.Screen name="참여방법" component={Participation} />
		</Tab.Navigator>
	);
};