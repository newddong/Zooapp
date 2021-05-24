import {StyleSheet} from 'react-native';

export const buttonstyle = StyleSheet.create({
  backbutton: {
		width: 16,
		height: 16,
		marginRight: 5,
	},
	autologinButton: {
		width: 25,
		height: 25,
		borderRadius: 25,
    borderWidth:1,
    borderColor:'#707070',
		marginRight: 5,
	},
  loginbutton: {
		height: 52,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
});

export const textstyles = StyleSheet.create({
	regular28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 14,
		fontWeight: 'normal',
	},
  regular28grey: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 14,
		fontWeight: 'normal',
    color:'#999999'
	},
	regular24: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 12,
		fontWeight: 'normal',
	},
	bold40: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 20,
		fontWeight: 'bold',
	},
  bold28: {
    fontFamily: 'NotoSansKR-Regular',
		fontSize: 14,
		fontWeight: 'bold',
	},
  loginbuttontxt: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 16,
		color: '#ffffff',
	},
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
    marginBottom: 60
	},
	inputform: {
    marginBottom: 40
	},
	textinputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 5
	},
	autologinContainer: {
		flexDirection: 'row',
	},
	autologin: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 10,
    
	},

});
