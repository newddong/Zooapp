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
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/login/login';
import Profile from './src/screens/profile/profile';
import Feed from './src/screens/feed/feed';
import AnimalSaving from './src/screens/animalsaving/animalsaving';
import Movie from './src/screens/movie/movie';
import DP from './src/screens/dp';

import {
	FeedIcon,
	FeedIconFocused,
	MyprofileIcon,
	MyprofileIconFocused,
	AnimalSavingIcon,
	AnimalSavingIconFocused,
	MovieIcon,
	MovieIconFocused,
} from './asset/image';
import {textstyles} from './src/screens/feed/home/style_home';

import Test from './experiment/test';
import {TouchableWithoutFeedback} from 'react-native';
import {TabContext} from './tabContext';

const MainTabNav = createBottomTabNavigator();

const App = () => {
	const [tab, setTab] = useState(true);

	return (
		<SafeAreaView style={{flex: 1}}>
			<TabContext.Provider value={{toggle:()=>{setTab(!tab)}}}>
				<NavigationContainer>
					<MainTabNav.Navigator
						tabBarOptions={{
							activeTintColor: '#FFB6A5',
							inactiveTintColor: '#767676',
						}}>
						<MainTabNav.Screen
							name="feed"
							component={Feed}
							options={{
								tabBarLabel: '피드',
								tabBarIcon: ({focused, color, size}) => (
									<View style={{width: size, height: size}}>
										{focused ? (
											<FeedIconFocused width="100%" height="100%" />
										) : (
											<FeedIcon width="100%" height="100%" />
										)}
									</View>
								),
							}}
						/>
						<MainTabNav.Screen
							name="movie"
							component={Movie}
							options={{
								tabBarVisible: tab,
								tabBarLabel: '영상',
								tabBarIcon: ({focused, color, size}) => (
									<View style={{width: size, height: size}}>
										{focused ? (
											<MovieIconFocused width="100%" height="100%" />
										) : (
											<MovieIcon width="100%" height="100%" />
										)}
									</View>
								),
							}}
						/>
						<MainTabNav.Screen
							name="animalsave"
							component={AnimalSaving}
							options={{
								tabBarVisible: tab,
								tabBarLabel: '동물보호',
								tabBarIcon: ({focused, color, size}) => (
									<View style={{width: size, height: size}}>
										{focused ? (
											<AnimalSavingIconFocused width="100%" height="100%" />
										) : (
											<AnimalSavingIcon width="100%" height="100%" />
										)}
									</View>
								),
							}}
						/>

						<MainTabNav.Screen
							name="profile"
							component={Profile}
							options={{
								tabBarLabel: 'MY',
								tabBarIcon: ({focused, color, size}) => (
									<View style={{width: size, height: size}}>
										{focused ? (
											<MyprofileIconFocused width="100%" height="100%" />
										) : (
											<MyprofileIcon width="100%" height="100%" />
										)}
									</View>
								),
							}}
						/>
						{/* <MainTabNav.Screen
							name="login"
							component={Login}
							options={{
								tabBarLabel: 'Login',
								tabBarIcon: ({focused, color, size}) => (
									<View style={{width: size, height: size}}>
										{focused ? (
											<FeedIconFocused width="100%" height="100%" />
										) : (
											<FeedIcon width="100%" height="100%" />
										)}
									</View>
								),
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
