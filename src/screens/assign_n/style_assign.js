import {StyleSheet} from 'react-native';
import {BLACK, GRAY, GRAY_BRIGHT, GRAY_PLACEHOLDER, MAINCOLOR, SLIGHT_BLACK, LINK, WHITE, RED, GRAY_TXT_INPUT} from 'Screens/color';

export const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: WHITE,
	},
	contents: {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: 48 * DP,
		backgroundColor: WHITE,
	},
	msg: {
		// height: 234 * DP,
		height: 134 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	form: {
		width: 654 * DP,
		marginBottom: 70 * DP,
	},
	pass_form: {
		width: 654 * DP,
	},
	shelter_form: {
		width: 654 * DP,
	},
	cntr_txt_input: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	tab: {
		marginTop: 58 * DP,
		height: 88 * DP,
		flexDirection: 'row',
	},
	input_num_verify: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	msg_pop: {
		width: 550 * DP,
		height: 126 * DP,
		backgroundColor: WHITE,
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30 * DP,
		borderBottomRightRadius: 0,
		position: 'absolute',
		top: 390 * DP,
		left: 52 * DP,
	},
	confirm_status: {
		height: 114 * DP,
		borderTopWidth: 2 * DP,
	},
	sctn_shelter_first: {
		alignItems: 'center',
		marginBottom: 132 * DP,
		justifyContent: 'flex-end',
	},
	assign_profile: {},
});

export const assign_profile = StyleSheet.create({
	cntr_profile: {
		alignSelf: 'center',
		marginVertical: 70 * DP,
		width: 294 * DP,
	},
	img_profile: {
		alignSelf: 'center',
		width: 294 * DP,
		height: 294 * DP,
		borderRadius: 150 * DP,
		backgroundColor:GRAY,
	},
	btn_add: {
		position: 'absolute',
		opacity: 0.8,
		width: 92* DP,
		height: 92 * DP,
		bottom: 10 * DP,
		right: 10 * DP,
	},
});

export const form = StyleSheet.create({
	input_name: {
		width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		letterSpacing: -2 * DP,
	},
	mobile_input: {
		width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		letterSpacing: -2 * DP,
	},
	verify_number: {
		// width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		letterSpacing: -2 * DP,
	},
	verify_time: {
		// width: '100%',
		height: 104 * DP,
		// backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		letterSpacing: -2 * DP,
	},
	email_input: {
		width : 320 * DP,
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		marginRight:  5 * DP,
		letterSpacing: -2 * DP,
	},
	email_domain: {
		width : 25 * DP,
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		marginRight: 12 * DP,
		letterSpacing: -2 * DP,
	},
	select_mobile: {
		flexDirection: 'row',
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
		width: 184 * DP,
		alignItems: 'center',
		justifyContent: 'space-around',
		marginRight: 20 * DP,
	},
	select_email: {
		flexDirection: 'row',
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
		width: 288 * DP,
		height: 48 * DP,
		alignItems: 'center',
		justifyContent: 'space-around',
		marginLeft: 10 * DP,
	},
	input_mobile_email: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input_mobile_phone: {
		flexDirection: 'row',
		// alignItems: 'center',  //인증번호 입력 및 인증 요청 버튼과 space-between 적용하기 위해서 이부분 주석 처리
		justifyContent: 'space-between',
	},
	verifycation_mobile_group: {
		marginTop : 20 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	input_shelter_code: {
		// flex:1,
		width: '100%',
		height: 104 * DP,
		backgroundColor: GRAY_TXT_INPUT,
		paddingHorizontal: 24 * DP,
		paddingVertical: 30 * DP,
		letterSpacing: -2 * DP,
	},
	shelter_assign_inquiry: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
	},
});

export const btn = StyleSheet.create({
	confirm_button: {
		height: 104 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: '#ff9888',
		marginBottom: 42 * DP,
	},
	num_check: {
		width: 216 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: MAINCOLOR,
	},
	search_address: {
		width: 152 * DP,
		height: 60 * DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: '#ff9888',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		elevation: 2,
	},
	dropdown: {
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	cntr_dropdown: {
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
		backgroundColor: WHITE,
	},
	re_verify_button: {
		width: 190 * DP,
		height: 80 * DP,		
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: '#ff9888',
		// marginBottom: 42 * DP,
	},

	followButton:{
		width: 180 * DP,
		height: 100 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFB6A5',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:30*DP,
		marginRight:40*DP,
	},
	followButtonDropDown:{
		width: 220 * DP,
		height: 380 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFB6A5',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:-30*DP,
		elevation:3,
		
	},
	followButtonDropDownEmpty:{
		width: 220 * DP,
		height: 380 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFB6A5',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop:-100*DP,
		marginLeft:-190*DP,
		elevation:3,
		
	},
	followButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		// marginLeft: 14 * DP,
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

export const tab = StyleSheet.create({
	btn_tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2 * DP,
		borderColor: MAINCOLOR,
	},
	btn_tab_notselected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2 * DP,
		borderColor: GRAY_BRIGHT,
	},
});
export const txt = StyleSheet.create({
	noto28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
		includeFontPadding: false,
	},
	noto24: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 42 * DP,
	},
	noto32: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 32 * DP,
		lineHeight: 42 * DP,
	},
	noto30: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 30 * DP,
		lineHeight: 42 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
	},
	noto40b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 40 * DP,
	},
	noto32b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 32 * DP,
		lineHeight: 42 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 36 * DP,
	},
	roboto28: {
		fontFamily: 'Roboto-Regular',
		fontSize: 28 * DP,
	},
	roboto24: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
	},
	center: {
		textAlign: 'center',
	},
	link: {
		color: LINK,
	},
	gray: {
		color: GRAY,
	},
	white: {
		color: WHITE,
	},
	red: {
		color: RED,
	},

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
	pink:{
		color:'#FFB6A5',
	}
});