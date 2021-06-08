import {StyleSheet} from 'react-native';
import DP from 'Screens/dp';

export const lo = StyleSheet.create({
   wrp_main:{
      flex:1,
      paddingHorizontal:48*DP,
      backgroundColor:'#FFF'
   },
   cntr_btn:{
      flexBasis:200*DP,
      paddingVertical:70*DP,
      alignItems:'center'
   }
   
});

export const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 13,
		lineHeight: 36*DP,
	},
	noto28rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.5,
		lineHeight: 38*DP,
	},
	noto30b:{
		fontFamily:'NotoSansCJKkr-Bold',
		fontSize:16.5,
		lineHeight:46*DP
	},
	roboto30bold: {
		fontFamily: 'Roboto-Bold',
		fontSize: 16.5,
	},
   roboto24r:{
      fontFamily:'Roboto-Regular',
      fontSize: 13,
      lineHeight: 30*DP,
   },
	roboto22r:{
		fontFamily:'Roboto-Regular',
      fontSize: 11.5,
		lineHeight: 28*DP,
	},
	bold40: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 22,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 15.4,
		lineHeight: 36*DP,
	},
	aligncenter: {
		textAlign: 'center',
	},
	link: {
		color: '#007EEC',
	},
	gray: {
		color: '#767676',
	},
	white:{
		color: '#FFFFFF',
		
	},
});