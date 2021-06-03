import React, {useState, useRef} from 'react';
import {
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
	Dimensions,
	SafeAreaView,
	TouchableWithoutFeedback,
	StatusBar,
} from 'react-native';

import {useRoute} from '@react-navigation/native';

import DP from '../../dp';
import {layoutstyles, textstyles} from './style_home';

import Post from './subcomponent/post';

export default AppHome = () => {

	return (
		<View style={layoutstyles.mainContainer}>
			<ScrollView style={layoutstyles.contentsScroll}>


				<Post/>
				<Post/>
				<Post/>
				<Post/>
				<Post/>
				
			</ScrollView>
		</View>
	);
};
