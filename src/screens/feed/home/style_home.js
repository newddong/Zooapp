import {StyleSheet } from 'react-native';
import DP from 'Screens/dp';

export const layoutstyles = StyleSheet.create({
   mainContainer:{
      backgroundColor:'#FFFFFF',
      alignItems:'center'
      
   },
   contentsScroll:{
      width:654*DP,
      
      
   },
   contentsContainer:{
      // height:1114*DP, 
      // backgroundColor:'yellow'
   },
   userinfoContainer:{
      height: 78*DP,
      // backgroundColor:'gray',
      marginTop:30*DP,
      flexDirection:'row',
      alignItems:'center'
   },
   textContainer:{
      // height: 122*DP,
      // backgroundColor:'green',
      marginTop:20*DP
   },
   photoContainer:{
      height: 654*DP,
      // backgroundColor:'purple',
      flexDirection:'row',
      marginTop:20*DP
   },
   photo:{
      // width: 654*DP,
      flex:1,
   },
   userInteractionContainer:{
      // height:129*DP,
      // backgroundColor:'cyan',
      marginTop:20*DP
   }
});

export const userinfo = StyleSheet.create({
      photo:{
         width:70*DP,
         height:70*DP,
         borderRadius:70*DP,
         // backgroundColor:'red'
      },
      infoContainer:{
         width: 400*DP,
         height: '100%',
         // backgroundColor:'green',
         marginLeft:20*DP
      },
      meatBallMenu:{
         width:32*DP,
         height:'100%',
         // backgroundColor:'blue',
         position:'absolute',
         right:0
      },
      

});

export const userinteraction = StyleSheet.create({
   buttonContainer:{
      alignItems:'center',
      // backgroundColor:'darkgoldenrod',
      height:30,
      flexDirection:'row'
      
   },
   commentContainer:{
      // backgroundColor:'deepskyblue',
      // flexDirection:'row',
   },
   infoContainer: {
      flexDirection:'row',
      // backgroundColor:'orange',
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
      // backgroundColor:'gray'  
   },
   userId:{
      paddingTop:6*DP,
      marginRight: 20*DP,
   },
   viewAll:{
      position:'absolute',
      right:0,
   },
   reply:{
      // backgroundColor:'yellow',
      paddingLeft:114*DP
   },
   replyicon:{
      width:14*DP,
      height:14*DP,
      marginTop:14*DP,
      marginRight:8*DP,
   }
})




export const textstyles = StyleSheet.create({
	regular24cjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 13,
		lineHeight: 38*DP,
	},
	regular28cjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.4,
		lineHeight: 38*DP,
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
	bold40: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 22,
	},
	bold28: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 15.4,
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
