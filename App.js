import React, {useState} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/login/login';
import MyProfile from './src/screens/myprofile/myprofile';
import FeedRoute from './src/screens/feed/feedroute';
import AnimalSavingRoute from './src/screens/animalsaving/animalsavingroute';
import MovieRoute from './src/screens/movie/movieroute';
import DP from './src/screens/dp';

import {TabContext} from './tabContext';
import MainTabBar from 'Screens/tabbar/maintabbar';

const MainTabNav = createBottomTabNavigator();

const App = () => {
	const [tab, setTab] = useState(true);

	return (
		<SafeAreaView style={{flex:1}}>
			<TabContext.Provider value={{toggle:()=>{setTab(!tab)}}}>
				<NavigationContainer>
					<MainTabNav.Navigator
						tabBar={props=><MainTabBar {...props}/>}
						>
						<MainTabNav.Screen
							name="feed"
							component={FeedRoute}
							options={{
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
								tabBarLabel: 'MY',
							}}
						/>
						{/* <MainTabNav.Screen
							name="login"
							component={Login}
							options={{
								tabBarLabel: 'Login',
							}}
						/> */}
					</MainTabNav.Navigator>
				</NavigationContainer>
				</TabContext.Provider>
				
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
