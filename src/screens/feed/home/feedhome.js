import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet
} from 'react-native';

import Post from './post/post';
import DP from 'Screens/dp';
import feeddata from './feeddata.json';

export default FeedHome = () => {

	return (
		<View style={layoutstyles.mainContainer}>
			<ScrollView style={layoutstyles.contentsScroll}>
				{feeddata.post.map((e,i)=><Post data={e} key={i}/>)}
			</ScrollView>
		</View>
	);
};

const layoutstyles = StyleSheet.create({
   mainContainer:{
      backgroundColor:'#FFFFFF',
      alignItems:'center'
      
   },
   contentsScroll:{
      width:654*DP,
   },
});