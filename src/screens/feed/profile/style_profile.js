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
		width:'50%',
		alignItems:'center',
		justifyContent:'center'
		
	},
	photoListContainer: {
		flex: 1,
		backgroundColor:'#FAFAF8',
		
	},
	photoListPage:{
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent: 'space-around',
		// backgroundColor: 'yellow',
	},
	photoListItems: {
		width: 246*DP,
		height: 246*DP,
		marginTop: 3*DP
	},
	volunteeractivity:{
		backgroundColor:'#FAFAF8',
		// backgroundColor:'yellow',
		width:'100%',
		height: 402*DP
	},
	volunteerList:{
		top:102*DP,
		// height: 260 * DP,
		marginHorizontal:0,
		// backgroundColor:'yellow'
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
	pink:{
		color:'#FFB6A5',
	}
	
});
