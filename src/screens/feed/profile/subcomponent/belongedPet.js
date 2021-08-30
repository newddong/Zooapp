import React from 'react';
import {Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import {
	HeartEmptyIcon,
	HeartIcon,
} from 'Asset/image';

import DP from 'Screens/dp';
import { text } from '../style_profile';

export default BelongedPet = ({data}) => {
	return (
		<TouchableHighlight onPress={()=>alert('보호중')}>
		<View style={layout.petItems}>
			<Image style={layout.petItemPhoto} source={{uri:data.thumbnail}}></Image>
			<View style={layout.petItemHeart}>
				{data.heart ? (
					<HeartIcon width="100%" height="100%" />
				) : (
					<HeartEmptyIcon width="100%" height="100%" />
				)}
			</View>
			<Text style={[text.regular24cjk, text.gray]}>{data.name}/{data.age}살</Text>
			<Text style={[text.regular24cjk, text.gray,{textAlign:'center'}]}>{data.type}</Text>
		</View>
		</TouchableHighlight>
	);
};


const layout = StyleSheet.create({
	petItems:{
		width:152*DP,
		height:196*DP,
		marginHorizontal:15*DP,
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'red'
	},
	petItemPhoto:{
		width:120*DP,
		height:120*DP,
		borderRadius:120*DP,
		// backgroundColor:'green'
	},
	petItemHeart:{
		width:48*DP,
		height:48*DP,
		position:'absolute',
		right:16*DP,
	},
});