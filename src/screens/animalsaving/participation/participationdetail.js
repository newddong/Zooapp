import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';
import {
   HeartBtnIcon,
   ShareFocusedIcon
} from 'Asset/image';

import DP,{svg_size} from 'Root/screens/dp';

export default ParticipationDetail = (props) => {
	return (
		<View style={detail.wrp_marin}>
			<View style={detail.cntr_img}></View>
			<View style={detail.cntr_img}><HeartBtnIcon {...svg_size}/><ShareFocusedIcon {...svg_size}/></View>
		</View>
	);
};
ParticipationItem.defaultProps={
   title:'제목을 입력하세요'
}


const detail = StyleSheet.create({
	wrp_marin: {
      flex:1,
      paddingHorizontal:48*DP,
      backgroundColor:'yellow'
	},
   cntr_img:{
      backgroundColor:'#EDEDED',
      flexBasis:654*DP,
   }, 

	
});

const txt = StyleSheet.create({
	noto28r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.5,
		lineHeight: 38*DP,
	},
   gray: {
		color: '#767676',
	},
});