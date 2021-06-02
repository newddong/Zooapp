import {StyleSheet, Dimensions} from 'react-native';
import DP from '../../dp';

export const buttonstyle = StyleSheet.create({
	profileButton: {
		width: 280 * DP,
		height: 60 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex:2
	},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
	},
	profileButtonDrop: {
		width: 280*DP,
		borderRadius: 30 * DP,
		position: 'absolute',
		justifyContent:'flex-end',
		alignContent:'center',
		flexWrap:'wrap',
		alignItems:'center',
		zIndex:1,
		
	},
	profileTextMoreView: {
		width: 10,
		height: 6,
		alignSelf: 'center',
		marginLeft: 4,
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

export const layoutstyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		zIndex:0
	},
	contents: {
		flex: 1,
		flexDirection: 'column',
		width: '87%',
		backgroundColor: '#FFFFFF',
	},
	header: {
		width: '100%',
		height: 132 * DP,
		// backgroundColor: 'green',
	},
	profileContainer: {
		alignItems: 'center',
		width: '100%',
		// height: 416*DP,
		// backgroundColor: 'yellow',
	},
	profileContents: {
		width: '87%',
		// height: '100%',
		// backgroundColor: 'gray',
	},
	profileInfo: {
		flexDirection: 'row',
		height: 160 * DP,
		// backgroundColor: 'blue',
		marginTop: 6 * DP,
	},
	profilePhoto: {
		width: 160 * DP,
		height: 160 * DP,
		borderRadius: 160 * DP,
		// backgroundColor: 'red',
	},
	profileLogs: {
		marginTop: 58 * DP,
		marginLeft: 80 * DP,
		width: 366 * DP,
		height: 84 * DP,
		// backgroundColor: 'yellow',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	profileLogItem: {
		flexDirection: 'column',
		width: 82 * DP,
		height: 84 * DP,
		// backgroundColor: 'green',
	},
	profileTextContainer: {
		flexDirection: 'row',
		height: 80 * DP,
		// backgroundColor: 'green',
		marginTop: 30 * DP,
	},
	profileText: {
		width: 492 * DP,
		height: 80 * DP,
		// backgroundColor: 'purple',
	},
	profileTextMoreView: {
		height: 40 * DP,
		// backgroundColor: 'red',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginLeft: 46 * DP,
	},
	profileButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		height: 60 * DP,
		// backgroundColor: 'cyan',
		marginTop: 40 * DP,
		marginBottom: 40*DP
	},
	petlist:{
		top:0*DP,
		height: 220 * DP,
		marginHorizontal:0,
	},
	petItems:{
		width:152*DP,
		height:196*DP,
		marginHorizontal:15*DP,
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'red'
	},
	petItemPhoto:{
		width:120*DP,
		height:120*DP,
		borderRadius:120*DP,
		// backgroundColor:'green'
	},
	petItemHeart:{
		width:48*DP,
		height:48*DP,
		position:'absolute',
		right:16*DP,
	},
	tabarea: {
		height: 78 * DP,
		// backgroundColor: 'purple',
		flexDirection:'row'
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
		height: 260 * DP,
		marginHorizontal:0,
		// backgroundColor:'yellow'
	},
	volunteerItems:{
		marginHorizontal:11*DP,
		alignItems:'center',
	},
	volunteerPhoto:{
		width: 140*DP,
		height: 140*DP,
		borderRadius:140*DP,
	},
	volunteerIDtype:{
		width:48*DP,
		height:48*DP,
		position:'absolute',
		left:19*DP,
	},
	tabcolor:{
		backgroundColor:'#FFB6A5'
	},
	white:{
		backgroundColor:'white'
	},

});

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
