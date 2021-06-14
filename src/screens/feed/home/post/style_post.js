import {StyleSheet } from 'react-native';
import DP from 'Screens/dp';

export const lo = StyleSheet.create({
   cntr_contents:{
      marginBottom: 70 * DP
   },
   cntr_info_user:{
      height: 78*DP,
      marginTop:30*DP,
      flexDirection:'row',
      alignItems:'center'
   },
   cntr_txt:{
      // height: 122*DP,
      marginTop:20*DP
   },
   cntr_photo:{
      height: 654*DP,
      flexDirection:'row',
      marginTop:20*DP
   },
   photo:{
      // width: 654*DP,
      flex:1,
   },
   cntr_comment:{
      // height:129*DP,
      marginTop:20*DP
   }
});

export const userinfo = StyleSheet.create({
      photo:{
         width:70*DP,
         height:70*DP,
         borderRadius:70*DP,
      },
      grp_info:{
         width: 400*DP,
         height: '100%',
         marginLeft:20*DP
      },
      meatBallMenu:{
         width:32*DP,
         height:'100%',
         position:'absolute',
         right:0
      },
      

});

export const txt = StyleSheet.create({
	noto24r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 24*DP,
		lineHeight: 38*DP,
	},
	noto28r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 28*DP,
		lineHeight: 38*DP,
	},
	roboto30b: {
		fontFamily: 'Roboto-Bold',
		fontSize: 30*DP,
	},
   roboto24r:{
      fontFamily:'Roboto-Regular',
      fontSize: 24*DP,
      lineHeight: 30*DP,
   }, 
	noto40b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 40*DP,
	},
	noto28b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 28*DP,
		lineHeight: 38*DP,
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
