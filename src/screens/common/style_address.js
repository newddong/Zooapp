import { StyleSheet } from 'react-native';
import DP from 'Screens/dp';
import {BLACK, GRAY, GRAY_BRIGHT, GRAY_PLACEHOLDER, MAINCOLOR, SLIGHT_BLACK, LINK, WHITE, RED, GRAY_TXT_INPUT} from 'Screens/color';

export const lo = StyleSheet.create({
   wrp_main:{
      backgroundColor:'#fff',
      flex:1,
   },
   cntr_contents:{
      marginTop:20*DP,
      paddingHorizontal:48*DP,
      flex:1,
   },
   cntr_tab:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10*DP,
   },
   btn_tab:{
      width:322*DP,
      height:56*DP,
      borderWidth:2*DP,
      borderColor:GRAY_BRIGHT,
      alignItems:'center',
      justifyContent:'center'
   },
   tab_selected:{
      backgroundColor:'#FFB6A5',
      borderWidth:0,
   },
   cntr_msg:{
      flexDirection:'row',
      marginBottom:30*DP,
   },
   cntr_form:{
      flexDirection:'row',
      alignItems:'center',
      marginBottom:70*DP,
   },
   form_input:{
      borderColor:GRAY_BRIGHT,
      borderWidth:2*DP,
      width:586*DP,
      height:56*DP,
      marginRight:18*DP,
   },
   cntr_addr_result:{

   },
   shadow:{
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 4,
	},
   cntr_detail_addr:{
      marginTop:70*DP,
      marginBottom:20*DP,
   },
   cntr_btn:{
      alignItems:'center',
      marginBottom:80*DP,
   }
})

export const btn = StyleSheet.create({
	confirm_button: {
		width: 280 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: MAINCOLOR,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		elevation: 2,
	},
});

export const item = StyleSheet.create({
   
})

export const txt = StyleSheet.create({
	noto28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
		includeFontPadding: false,
	},
   noto20:{
      fontFamily: 'NotoSansKR-Regular',
		fontSize: 20 * DP,
   },
	noto24: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 42 * DP,
	},
	noto32: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 32 * DP,
		lineHeight: 42 * DP,
	},
	noto30: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 30 * DP,
		lineHeight: 42 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
	},
	noto40b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40 * DP,
	},
	noto32b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 32 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 36 * DP,
	},
	roboto28: {
		fontFamily: 'Roboto-Regular',
		fontSize: 28 * DP,
	},
	roboto24: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
	},
	center: {
		textAlign: 'center',
	},
	link: {
		color: LINK,
	},
	gray: {
		color: GRAY,
	},
	white: {
		color: WHITE,
	},
	red: {
		color: RED,
	},
   maincolor:{
      color:MAINCOLOR,
   }
});