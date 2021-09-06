import React, {useState} from 'react';
import {Animated} from 'react-native';

import Profile from './profile/profile';
import FeedList from './home/feedlist';
import WriteFeed from './write/writefeed';
import WriteFeedRoute from './write/writefeedroute';
import MainHeader from 'Screens/header/mainheader';
import ProfileHeader from 'Root/screens/feed/profile/profileheader';
import CommentList from './home/post/commentlist';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const forSlide = ({current, next, inverted, layouts: {screen}}) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next
			? next.progress.interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
					extrapolate: 'clamp',
			  })
			: 0,
	);

	return {
		containerStyle: {
			transform: [
				{
					translateX: Animated.multiply(
						progress.interpolate({
							inputRange: [0, 1, 2],
							outputRange: [
								screen.width, // Focused, but offscreen in the beginning
								0, // Fully focused
								screen.width * -0.3, // Fully unfocused
							],
							extrapolate: 'clamp',
						}),
						inverted,
					),
				},
			],
		},
	};
};

export default FeedRoute = () => {
	const tansitConf = {
		animation: 'timing',
		config: {
			duration: 300,
		},
	};
	return (
		<Stack.Navigator initialRouteName="FeedHome" headerMode="screen">
			<Stack.Screen name="FeedHome" component={FeedList} options={{header: props => <MainHeader {...props} />}} />
			<Stack.Screen
				name="FeedPersonal"
				component={FeedList}
				options={{
					transitionSpec: {open: tansitConf, close: tansitConf},
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					header: props => <ProfileHeader {...props} />,
					transitionSpec: {open: tansitConf, close: tansitConf},
					cardStyleInterpolator: forSlide,
				}}
			/>
			<Stack.Screen
				name="WriteFeed"
				component={WriteFeedRoute}
				options={{
					transitionSpec: {open: tansitConf, close: tansitConf},
					cardStyleInterpolator: forSlide,
					// cardStyleInterpolator: ({current}) => ({cardStyle: {transform: [{translateX: current.progress}]}}),
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="CommentList"
				component={CommentList}
				options={{
					title:'댓글보기',
					transitionSpec: {open: tansitConf, close: tansitConf},
					cardStyleInterpolator: forSlide,
				}}
			/>
		</Stack.Navigator>
	);
};
