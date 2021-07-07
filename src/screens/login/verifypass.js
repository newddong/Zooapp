import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import DP from 'Screens/dp';
import {BLACK, GRAY, GRAY_BRIGHT, GRAY_PLACEHOLDER, MAINCOLOR, SLIGHT_BLACK, LINK, WHITE, RED, GRAY_TXT_INPUT, GREEN} from 'Screens/color';
import {
	CHECK_VERIFYCATION_NUM1,
	COMPLETE_VERIFYCATION,
	COMPLETE_ASSIGN,
	VERIFY_CONDITION,
	CHECK_PASS,
	REQ_PASSWORD, 
	REQ_PASSCHECK,
	FAIL_PASS_CHECK
} from 'Screens/msg';
import {DownBracketBlack, CancelInput} from 'Asset/image';
import {txt, lo, btn, form, tab} from './style_assign';
import FormTxtInput from './formtxtinput';


export default VerifyPass = props => {

	const [match, setMatch] = React.useState(false);


	const completeAssign =() => {
		props.navigation.navigate('Assign');
	}

	const [pass,setPass] = React.useState({input:'',check:''});

	const inputPwd =(e) => {
		setPass({...pass,input:e.nativeEvent.text});
		console.log(pass);
	}

	const checkPwd =(e) => {
		setPass({...pass,check:e.nativeEvent.text});
		
	}

	
	
	React.useEffect(()=>{
		console.log(pass);
		if(pass.input===pass.check&&pass.input.length>=8&&pass.check.length>=8){
			//유효성 검사 로직 필요
			setMatch(true);
		}else{
			setMatch(false);
		}
	},[pass])

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				
				<View style={[lo.pass_form, {marginTop: 70 * DP}]}>
						<Text style={[txt.noto24,{color:GRAY_PLACEHOLDER}]}>{VERIFY_CONDITION}</Text>
						
						<FormTxtInput onChange={inputPwd} password style={{marginBottom:20*DP}} inputStyle={[form.input_name,txt.noto28]} placeholder={REQ_PASSWORD} placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
						
						<Text style={[txt.noto30,{color:GRAY}]}>{CHECK_PASS}</Text>
						<FormTxtInput 
								onChange={checkPwd}
								password
								inputStyle={[txt.noto28,form.mobile_input]}
								placeholder={REQ_PASSCHECK}
								placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
				</View>

				<View style={[lo.confirm_status,{borderTopColor:match?GREEN:RED}]}>
					{!match&&<Text style={[txt.noto30,{color:RED}]}>{FAIL_PASS_CHECK}</Text>}
				</View>

				{!match?<View style={[btn.confirm_button, {backgroundColor: GRAY_BRIGHT}, btn.shadow]}>
					<Text style={[txt.noto32b, txt.white]}>{COMPLETE_ASSIGN}</Text>
				</View>:
				<TouchableWithoutFeedback onPress={completeAssign}>
					<View style={[btn.confirm_button, btn.shadow]}>
						<Text style={[txt.noto32b, txt.white]}>{COMPLETE_ASSIGN}</Text>
					</View>
				</TouchableWithoutFeedback>}
				


				
				
				

				{false&&<View style={[lo.msg_pop,btn.shadow]}>
					<Text style={[txt.noto30b,{color:GRAY}]}>{COMPLETE_VERIFYCATION}</Text>
				</View>}
				{false&&<View style={[lo.msg_pop,btn.shadow]}>
					<Text style={[txt.noto30b,{color:GRAY}]}>{CHECK_VERIFYCATION_NUM1}</Text>
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
