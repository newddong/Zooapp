import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import Assign from 'Screens/login/assign';
import AssignUser from 'Screens/login/assignuser';
import AssignShelter from 'Screens/login/assignshelter';
import VerifyUser from 'Screens/login/verifyuser';
import VerifyEmail from 'Screens/login/verifyemail';
import VerifyMobile from 'Screens/login/verifymobile';
import VerifyPass from 'Screens/login/verifypass';
import StackHeader from 'Screens/header/stackheader';
import AssingProfile from 'Screens/login/assignprofile';

const AssignStack = createStackNavigator();

export default AssignRoute = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
				<AssignStack.Navigator initialRouteName="Assign" headerMode='screen'
					screenOptions={{header: (props) => <StackHeader {...props}/>}}
				>
               <AssignStack.Screen name="VerifyUser" component={VerifyUser} options={{headerShown:false}}/>
					<AssignStack.Screen name="Assign" component={Assign}/>
					<AssignStack.Screen name="AssignUser" component={AssignUser}/>
					<AssignStack.Screen name="AssignShelter" component={AssignShelter}/>
					<AssignStack.Screen name="VerifyEmail" component={VerifyEmail}/>
					<AssignStack.Screen name="VerifyMobile" component={VerifyMobile}/>
					<AssignStack.Screen name="VerifyPass" component={VerifyPass}/>
					<AssignStack.Screen name="AssingProfile" component={AssingProfile}/>
				</AssignStack.Navigator>
		</SafeAreaView>
	);
};