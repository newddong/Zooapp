import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import {SearchIcon} from 'Asset/image';
import Backbutton from 'Screens/header/icon_back.svg';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { txt } from '../home/post/style_post';
// import { CommonActions } from '@react-navigation/native';
// import { useNavigationState } from '@react-navigation/native';

export default WriteHeader = ({scene, previous, navigation}) => {
	const {options} = scene.descriptor;
	const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
	return (
		<View style={[style.headerContainer]}>
			<TouchableWithoutFeedback onPress={navigation.goBack}>
				<SvgWrapper style={{width: 32 * DP, height: 32 * DP}} svg={<Backbutton />} />
			</TouchableWithoutFeedback>
			<View style={style.cntr_title}>
					<Text style={txt.noto40b}>{title}</Text>
			</View>
					<Text style={[txt.noto40b,style.blue]}>공유</Text>
		</View>
	);
};

const style = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		height: 132 * DP,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		// justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	cntr_title: {
		marginLeft:34*DP,
		width: 508 * DP,
		alignItems:'center'
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
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40 * DP,
		lineHeight: 60 * DP,
		includeFontPadding:false,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 48 * DP,
	},
	blue:{
		color:'#007EEC',
	}
});
