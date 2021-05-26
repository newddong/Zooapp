import {StyleSheet} from 'react-native';

export const buttonstyle = StyleSheet.create({
	backbutton: {
		width: 16,
		height: 16,
		marginRight: 6,
	},
	notcheckButton: {
		width: 25,
		height: 25,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#707070',
		marginRight: 5,
	},
	checkedButton: {
		width: 25,
		height: 25,
		borderRadius: 25,
		marginRight: 5,
	},
	loginbutton: {
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
  socialAppsButton: {
    width: 40,
    height: 40,
    marginLeft:7.5,
    marginRight:7.5
  }
});

export const textstyles = StyleSheet.create({
	regular28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 14,
	},
	regular28grey: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 14,
		color: '#999999',
	},
	regular24: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 12,
		lineHeight:21,
	},
  regular24cjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 12,
	},
	bold40: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 20,
		lineHeight:30
	},
	bold28: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 14,
	},
	loginbuttontxt: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 16,
		color: '#ffffff',
	},
	link:{
		color: '#007EEC'
	},
	gray: {
		color: '#767676'
	}
});

export const formstyles = StyleSheet.create({
	textinput: {
		width: '100%',
		height: 52,
		backgroundColor: '#FAFAF8',
		marginBottom: 4,
	},
});

export const layoutstyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	contents: {
		flex: 1,
		flexDirection: 'column',
		width: '87%',
		backgroundColor: '#FFFFFF',
	},
	header: {
		height: 30,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 60,
	},
	inputform: {
		marginBottom: 40,
	},
	textinputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 5,
	},
	autologinContainer: {
		flexDirection: 'row',
	},
	autologinButton: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 10,
	},
	socialLinkContainer: {
    marginTop:21,
		alignItems: 'center',
		justifyContent: 'center',
	},
  socialLink: {
    height: 40,
    flexDirection: 'row',
    marginBottom: 11
  },
  suggestion: {
    alignItems: 'center',
  }
});
