import {StyleSheet } from 'react-native';
import DP from 'Screens/dp';

export const lo = StyleSheet.create({
   cntr_contents:{
      marginBottom: 0 * DP,
      // height:1000*DP,
      backgroundColor:'green'
   },
   cntr_info_user:{
      height: 78*DP,
      // marginTop:30*DP,
      // paddingTop:30*DP,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'yellow'
   },
   cntr_txt:{
      // height: 122*DP,
      marginTop:20*DP,
      // paddingTop:20*DP,
      backgroundColor:'gold'
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
      height:130*DP,
      marginTop:20*DP,
      backgroundColor:'blue'
   },
   cntr_txt_footer:{
      height:40*DP,
      backgroundColor:'yellow',
      flexDirection:'row',
      justifyContent:'space-between'
   }
});

export const btn = StyleSheet.create({
   btn_moreContent:{
      flexDirection:'row',
      alignItems:'center'
   }
})

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
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24*DP,
		lineHeight: 38*DP,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
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
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40*DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
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
