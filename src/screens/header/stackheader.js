import React, {useState, useRef} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import {SearchIcon} from 'Asset/image';
import Backbutton from './icon_back.svg';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default StackHeader = ({scene, previous, navigation}) => {
	const { options } = scene.descriptor;
	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableWithoutFeedback onPress={navigation.goBack}>
				<SvgWrapper style={{width: 32 * DP, height: 32 * DP}} svg={<Backbutton />} />
			</TouchableWithoutFeedback>
			<Text style={style.noto40b}>{scene.route.params.title}</Text>
			<TouchableWithoutFeedback>
				<SvgWrapper style={{width: 48 * DP, height: 48 * DP}} svg={<SearchIcon />} />
			</TouchableWithoutFeedback>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		height: 132 * DP,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	backbutton: {
		fontSize: 100 * DP,
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
	noto40b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 40 * DP,
		lineHeight: 60 * DP,
	},
});
