import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';


import VolunteerItem from './volunteerItem';

import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

export default VolunteerList = () => {
	return (
		<>
			<Text style={{top: 36 * DP, left: 48 * DP, position: 'absolute'}}>현재 보호/후원 현황</Text>
			<ScrollView
				horizontal
				contentContainerStyle={[layout.volunteerList, {justifyContent: 'space-evenly'}]}>
				<VolunteerItem
					source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
				/>
				<VolunteerItem
					source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
				/>
			</ScrollView>
		</>
	);
};

const layout = StyleSheet.create({
	volunteeractivity:{
		backgroundColor:'#FAFAF8',
		// backgroundColor:'yellow',
		width:'100%',
		height: 402*DP
	},
	volunteerList:{
		top:102*DP,
		// height: 260 * DP,
		marginHorizontal:0,
		// backgroundColor:'yellow'
	},
});