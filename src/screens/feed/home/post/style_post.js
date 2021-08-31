import {StyleSheet } from 'react-native';
import DP from 'Screens/dp';

export const lo = StyleSheet.create({
   cntr_contents:{
      marginBottom: 0 * DP,
      // height:1000*DP,
      // backgroundColor:'green'
   },
   cntr_info_user:{
      height: 78*DP,
      // marginTop:30*DP,
      // paddingTop:30*DP,
      flexDirection:'row',
      alignItems:'center',
      // backgroundColor:'yellow'
   },
   cntr_txt:{
      // height: 122*DP,
      marginTop:20*DP,
      // paddingTop:20*DP,
      // backgroundColor:'gold'
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
      // backgroundColor:'blue'
   },
   cntr_txt_footer:{
      height:40*DP,
      // backgroundColor:'yellow',
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

export const comment = StyleSheet.create({
   buttonContainer:{
      alignItems:'center',
      height:60*DP,
      flexDirection:'row',
      // backgroundColor:'yellow'
      
   },
   commentContainer:{
      // height:50*DP,
      // backgroundColor:'gold'
   },
   infoContainer: {
      flexDirection:'row',
      position:'absolute',
      right:10*DP
   },
   iconContainer:{
      flexDirection:'row',
      width:36*DP,
      height:32*DP,
      marginRight:12*DP,
      marginLeft:36*DP
   },
   comment:{
      width:558*DP,
      flexDirection:'row',
   },
   userId:{
      paddingTop:6*DP,
      marginRight: 20*DP,
   },
   viewAll:{
      justifyContent:'flex-end',
      right:0,
   },
   reply:{
      paddingLeft:114*DP
   },
   replyicon:{
      width:14*DP,
      height:14*DP,
      marginTop:14*DP,
      marginRight:8*DP,
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
         height:80*DP,
         position:'absolute',
         right:0*DP
      },
      meatballDropdown:{
         width:300*DP,
         // height:360*DP,
         backgroundColor:'#FFF',
         marginLeft:-270*DP,
         borderRadius:30*DP,
         borderTopRightRadius:0,
         justifyContent:'center'
      },
      meatballListBackGround:{
         height:300*DP,
         // backgroundColor:'red'
      },
      meatballListContainer:{
         height:300*DP,
         justifyContent:'space-between',
         alignItems:'center'
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
         
      }

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
   red:{
      color:'red'
   }
	
});
