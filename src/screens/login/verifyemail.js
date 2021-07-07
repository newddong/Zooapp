import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import DP from 'Screens/dp';
import {BLACK, GRAY, GRAY_BRIGHT, GRAY_PLACEHOLDER, MAINCOLOR, SLIGHT_BLACK, LINK, WHITE, RED, GRAY_TXT_INPUT} from 'Screens/color';
import {

	BTN_CHECK,

	REQ_NAME,
	REQ_EMAIL,
	REQ_PHONE_NUM,
	TAB_VERIFY_EMAIL,
	TAB_VERIFY_PHONE,
	ASSIGN_USER_DESCRIPTION,
	SEND_VERIFYCATION_NUM,
	RESEND_VERIFYCATION_NUM,
	COMPLETE_VERIFYCATION,
	CHECK_VERIFYCATION_NUM1,
	INPUT_VERIFYCATION_NUM,
	REQ_VERIFYCATION_NUM,
	CHECK_VERIFYCATION_NUM2,
	PASSWORD_INPUT

} from 'Screens/msg';
import {txt, lo, btn, form, tab} from './style_assign';
import {DownBracketBlack} from 'Asset/image';
import FormTxtInput from './formtxtinput';
import Dropdown from './dropdown';

export default VerifyEmail = props => {

	const [ui, setUI] = React.useState({description: true, send: false, resend: false});

	const sendVerifyNum = () => {
		
		setUI({...ui, send: true});
	};

	const resendVerifyNum =() => {

	}

	const confirmNum = () => {
		props.navigation.push('VerifyPass',{title:PASSWORD_INPUT});
	}

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				<View style={lo.tab}>
					<TabButton txt={TAB_VERIFY_PHONE} select={false} />
					<TabButton txt={TAB_VERIFY_EMAIL} select={true} />
				</View>

				<View style={[lo.form, {marginTop: 70 * DP}]}>
					<View style={(lo.cntr_txt_input, {marginBottom: 32 * DP})}>
						<FormTxtInput style={{marginBottom:20*DP}} inputStyle={[form.input_name, txt.noto28]} placeholder={REQ_NAME} placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
						

                  <View style={form.input_mobile_email}>
							<FormTxtInput
								inputStyle={[form.email_input,txt.noto28]}
								placeholder={REQ_EMAIL}
								placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
                     <Text style={txt.roboto28}>@</Text>
							{/* <View style={form.select_email}>
								<Text style={[txt.roboto28,{color:GRAY}]}>naver.com</Text>
								<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
							</View> */}
							<Dropdown
							style={form.select_email}
							dropdownContainerStyle={[btn.cntr_dropdown, {width: form.select_email.width}]}
							component={
								<>
									<Text style={[txt.roboto28,{color:GRAY}]}>naver.com</Text>
									<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
								</>
							}>
							
								<View style={{backgroundColor: 'red', marginBottom: 10 * DP, width: 30, height: 30}}></View>
								<View style={{backgroundColor: 'red', marginBottom: 10 * DP, width: 30, height: 30}}></View>
								<View style={{backgroundColor: 'red', marginBottom: 10 * DP, width: 30, height: 30}}></View>
								<View style={{backgroundColor: 'red', marginBottom: 10 * DP, width: 30, height: 30}}></View>
								<View style={{backgroundColor: 'red', marginBottom: 10 * DP, width: 30, height: 30}}></View>
							
						</Dropdown>
						</View>
					</View>
				</View>

				{!ui.send&&!ui.resend&&<TouchableWithoutFeedback onPress={sendVerifyNum}>
					<View style={[btn.confirm_button, btn.shadow]}>
						<Text style={[txt.noto32b, txt.white]}>{SEND_VERIFYCATION_NUM}</Text>
					</View>
				</TouchableWithoutFeedback>}
				{ui.send&&<TouchableWithoutFeedback onPress={resendVerifyNum}>
					<View style={[btn.confirm_button, {backgroundColor: WHITE}, btn.shadow]}>
						<Text style={[txt.noto32, txt.gray]}>{RESEND_VERIFYCATION_NUM}</Text>
					</View>
				</TouchableWithoutFeedback>}

				<Text style={[txt.noto30, txt.gray, {marginBottom: 8 * DP}]}>{INPUT_VERIFYCATION_NUM}</Text>
				<View style={lo.input_num_verify}>
					<FormTxtInput inputStyle={[form.mobile_input, {width: 418 * DP}, txt.noto28]} placeholder={REQ_VERIFYCATION_NUM}></FormTxtInput>
					<TouchableWithoutFeedback onPress={confirmNum}>
						<View  style={[btn.num_check, btn.shadow]}>
							<Text style={[txt.noto24b, txt.white]}>{CHECK_VERIFYCATION_NUM2}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>

				{false&&<View style={[lo.msg_pop,btn.shadow]}>
					<Text style={[txt.noto30b,{color:GRAY}]}>{COMPLETE_VERIFYCATION}</Text>
				</View>}




			</View>
		</View>
	);
};

const TabButton = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={props.select ? tab.btn_tab : tab.btn_tab_notselected}>
				<Text style={props.select ? [txt.noto28b, {color: MAINCOLOR}] : [txt.noto28, {color: GRAY}]}>{props.txt}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};


