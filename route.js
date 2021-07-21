import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import Login from './src/screens/login/login';
import AssignRoute from 'Screens/login/assignroute';
import MyProfile from './src/screens/myprofile/myprofile';
import FeedRoute from './src/screens/feed/feedroute';
import AnimalSavingRoute from './src/screens/animalsaving/animalsavingroute';
import MovieRoute from './src/screens/movie/movieroute';
import SearchRoute from './src/screens/search/searchroute';
import AddressSearch from './src/screens/common/address';
import {TabContext} from './tabContext';
import MainTabBar from 'Screens/tabbar/maintabbar';
import StackHeader from 'Screens/header/stackheader';

const MainStack = createStackNavigator();
const MainTabNav = createBottomTabNavigator();

export default Route = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<NavigationContainer>
				<MainStack.Navigator initialRouteName="Login" headerMode='screen'
					screenOptions={{header:()=><></>}}
				>
					<MainStack.Screen name="MainScreen" component={TabRoute} />
               <MainStack.Screen name="Login" component={Login}/>
               <MainStack.Screen name="AssignRoute" component={AssignRoute}/>
               <MainStack.Screen name="Search" component={SearchRoute}/>
					<MainStack.Screen name="AddressSearch" component={AddressSearch} options={{header: (props) => <StackHeader {...props}/>}}/>
				</MainStack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

const TabRoute = () => {
	const [tab, setTab] = useState(true);

	return (
		<TabContext.Provider
			value={{
				toggle: () => {
					setTab(!tab);
				},
				tabVisible: visible => {
					setTab(visible);
				},
			}}>
			<MainTabNav.Navigator tabBar={props => <MainTabBar {...props} />}>
				<MainTabNav.Screen
					name="feed"
					component={FeedRoute}
					options={{
						tabBarVisible: tab,
						tabBarLabel: '피드',
					}}
				/>
				<MainTabNav.Screen
					name="movie"
					component={MovieRoute}
					options={{
						tabBarVisible: tab,
						tabBarLabel: '영상',
					}}
				/>
				<MainTabNav.Screen
					name="animalsave"
					component={AnimalSavingRoute}
					options={{
						tabBarVisible: tab,
						tabBarLabel: '동물보호',
					}}
				/>

				<MainTabNav.Screen
					name="Myprofile"
					component={MyProfile}
					options={{
						tabBarVisible: tab,
						tabBarLabel: 'MY',
					}}
				/>
			</MainTabNav.Navigator>
		</TabContext.Provider>
	);
};
