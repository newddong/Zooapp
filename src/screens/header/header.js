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
	StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {Logo, AlarmIcon, SearchIcon, AnimalIcon} from '../../../asset/image';
import DP from '../dp';

export default Header = () => {
	const r = useRoute();
	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableWithoutFeedback
				onPress={() => {
					alert('logo click');
				}}>
				<View style={style.logoContainer}>
					<Logo width="100%" height="100%" />
				</View>
			</TouchableWithoutFeedback>
			<View style={style.buttonContainer}>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('Search click');
					}}>
					<View style={style.iconContainer}>
						<SearchIcon width="100%" height="100%" />
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('Alarm click');
					}}>
					<View style={style.iconContainer}>
						<AlarmIcon width="100%" height="100%" />
					</View>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'flex-end',
		height: 132 * DP,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
	},
	logoContainer: {
		marginLeft: 48 * DP,
		marginRight: 368 * DP,
		marginBottom: 34 * DP,
		width: 174 * DP,
		height: 40 * DP,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginBottom: 30 * DP,
	},
	iconContainer: {
		width: 48 * DP,
		height: 48 * DP,
		marginRight: 16 * DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
});
