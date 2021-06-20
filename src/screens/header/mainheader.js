import React, {useState, useRef} from 'react';
import {Text, TextInput, View, Image, ScrollView, Dimensions, SafeAreaView, StyleSheet} from 'react-native';

import {Logo, AlarmIcon, SearchIcon, AnimalIcon} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default MainHeader = ({navigation}) => {
	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableWithoutFeedback
				onPress={() => {
					alert('logo click');
				}}>
				<SvgWrapper style={style.logoContainer} svg={<Logo />} />
			</TouchableWithoutFeedback>
			<View style={style.buttonContainer}>
				<TouchableWithoutFeedback
					onPress={() => {
						navigation.navigate('Search');
					}}>
					<SvgWrapper style={style.iconContainer} svg={<SearchIcon />} />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						alert('Alarm click');
						// navigation.navigate('animalsave',{screen:'AnimalSavingHome',params:{screen:'Participation'}});
						// navigation.navigate('Participation');
					}}>
					<SvgWrapper style={style.iconContainer} svg={<AlarmIcon />} />
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
		zIndex: 190,
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
