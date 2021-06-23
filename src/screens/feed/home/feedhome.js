import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	TouchableWithoutFeedback
} from 'react-native';
import {} from 'react-native-gesture-handler';
import { BtnWriteFeed } from 'Asset/image';

import Post from './post/post';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import feeddata from './feeddata.json';

export default FeedHome = ({navigation}) => {
	return (
		<View style={layout.mainContainer}>
			<ScrollView style={layout.contentsScroll}>
				{feeddata.post.map((e,i)=><Post data={e} key={i}/>)}
			</ScrollView>
				<View style={[layout.btn_write_shadow]}/>
			<TouchableWithoutFeedback onPress={()=>{navigation.push('WriteFeed')}}>
				<View style={layout.btn_write}>
				<SvgWrapper style={{width:70*DP,height:70*DP}} svg={<BtnWriteFeed fill='#fff'/>}/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const layout = StyleSheet.create({
   mainContainer:{
      backgroundColor:'#FFFFFF',
      alignItems:'center'
      
   },
   contentsScroll:{
      width:654*DP,
   },
	btn_write:{
		position:'absolute',
		width:70*DP,
		height:70*DP,
		bottom:20*DP,
		right:20*DP,
	},
	btn_write_shadow:{
		position:'absolute',
		width:75*DP,
		height:75*DP,
		bottom:16*DP,
		right:16*DP,
		backgroundColor:'#767676',
		borderRadius:70*DP,
		opacity:0.5,
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