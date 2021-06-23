import {StyleSheet} from 'react-native';
import DP from 'Screens/dp';


export const lo = StyleSheet.create({
   wrp_main:{
      flex:1,
      backgroundColor:'#FFF',
      paddingHorizontal:48*DP,
   },
   cntr_btn:{
      flexBasis:120*DP,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
   }, 
   sctn_cnts:{
      flex:1,
   },
});


export const btn = StyleSheet.create({
   wrp_btn:{
      backgroundColor:'#FFF',
      borderColor:'#DBDBDB',
      borderWidth:2*DP,
      borderRadius:30*DP,
      flexBasis:306*DP,
      height:60*DP,
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center'
      
   },
   down:{
      marginLeft:60*DP,
      width:20*DP,
      height:12*DP,
      marginRight:20*DP
   }
});


export const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 13,
		lineHeight: 36*DP,
	},
	noto28rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 15.5,
		lineHeight: 38*DP,
	},
	noto30b:{
		fontFamily:'NotoSansKR-Bold',
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
	bold28: {
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