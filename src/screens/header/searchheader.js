import React, {useState, useRef} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import {SearchIcon} from 'Asset/image';
import Backbutton from './icon_back.svg';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default SearchHeader = ({scene, previous, navigation}) => {
	const { options } = scene.descriptor;
	return (
		<View style={[style.headerContainer, style.shadow]}>
			<TouchableWithoutFeedback onPress={navigation.goBack}>
				<SvgWrapper style={{width: 32 * DP, height: 32 * DP}} svg={<Backbutton />} />
			</TouchableWithoutFeedback>
         <View style={style.cntr_txtinput}>
			<TextInput style={[style.noto28r,{width:490*DP,paddingBottom:0}]} placeholder='검색'>
         </TextInput>
         <TouchableWithoutFeedback onPress={()=>alert('검색')}>
				<SvgWrapper style={[style.searchbtn]} svg={<SearchIcon />} />
			</TouchableWithoutFeedback>
         </View>
         {/* <View style={style.searchbtn}/> */}
			
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
   cntr_txtinput: {
      flexDirection:'row',
      alignItems:'center',
      width:594*DP,
      justifyContent:'space-between',
      // backgroundColor:'red',
      // height:80*DP,
      backgroundColor:'#fff',
      borderColor:'#DBDBDB',
      borderWidth:2*DP,
      borderRadius: 30*DP,
      // marginRight:-88*DP,
   },
   searchbtn:{
      width: 48 * DP,
      height: 48 * DP,
      // position:'absolute',
      // marginLeft:-48*DP,
      marginRight:20*DP,
      right:0,
      bottom:0,
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
   noto28r: {
      fontFamily: 'NotoSansCJKkr-Regular',
      fontSize: 28 * DP,
		lineHeight: 48 * DP,
   }
});
