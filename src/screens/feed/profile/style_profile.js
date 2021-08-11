import {StyleSheet, Dimensions} from 'react-native';
import DP from 'Screens/dp';

export const button = StyleSheet.create({
	profileButton: {
		width: 280 * DP,
		height: 60 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:40*DP,
		marginRight:70*DP
	},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
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

export const layout = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		zIndex:1
	},
	profileButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		
		height: 140 * DP,
		// backgroundColor: 'cyan',
		// marginTop: 40 * DP,
		// marginBottom: 40*DP,
		
	},

	tabarea: {
		height: 78 * DP,
		// backgroundColor: 'purple',
		flexDirection:'row',
		// marginTop:-240*DP
		
	},
	tabItem: {
		width:Dimensions.get('screen').width/3,
		alignItems:'center',
		justifyContent:'center'
		
	},
	photoListContainer: {
		flex: 1,
		backgroundColor:'#FAFAF8',
		
	},
	photoListPage:{
		flexDirection:'row',
		
		// flexWrap:'wrap',
		// alignContent:'flex-start',
		// justifyContent: 'center',
		// backgroundColor: 'yellow',
	},
	photoListItems: {
		width: 248*DP,
		height: 248*DP,
		marginTop: 3*DP,
		marginRight:3*DP
	},
	volunteeractivity:{
		backgroundColor:'#FAFAF8',
		// backgroundColor:'yellow',
		width:'100%',
		height: 402*DP
	},
	tabcolor:{
		backgroundColor:'#FFB6A5'
	},
	white:{
		backgroundColor:'white'
	},

});

export const text = StyleSheet.create({
	regular24cjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24*DP,
		lineHeight: 38*DP,
	},
	regular28cjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28*DP,
		lineHeight: 38*DP,
	},
	roboto30bold: {
		fontFamily: 'Roboto-Bold',
		fontSize: 30*DP,
	},
	bold40: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40*DP,
	},
	bold28: {
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
	pink:{
		color:'#FFB6A5',
	}
	
});
