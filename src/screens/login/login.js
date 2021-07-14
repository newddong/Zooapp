import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Kakao, Naver, Instagram, Facebook, Xbutton, CheckedBtn, Bracket} from 'Asset/image';
import {layoutstyles, textstyles, buttonstyle, formstyles} from './style_login';
import {layout} from '../feed/profile/style_profile';
import SvgWrapper from 'Screens/svgwrapper';
import DP from 'Screens/dp';
import {BLACK, GRAY, GRAY_PLACEHOLDER, SLIGHT_BLACK} from 'Screens/color';
import {
	ASK_LOST_ID_PASS,
	ASK_USER,
	ASSIGN_USER,
	FAIL_LOGIN_COUNT,
	FAIL_LOGIN_LOCK,
	FAIL_MSG,
	FIND_ID,
	FIND_PASS,
	LOGIN,
	LOGIN_AUTO,
	RECAPTCHA,
	REQ_PASSWORD,
	REQ_PHONE_NUM_AND_EMAIL,
	SAVE_ID,
	WITHOUT_LOGIN,
} from 'Screens/msg';
import FormTxtInput from './formtxtinput';
import axios from 'axios';

export default Login = props => {
	const [autoLogin, setAutoLogin] = useState(false);
	const pressAutoLogin = () => {
		setAutoLogin(!autoLogin);
	};
	const [saveId, setSaveId] = useState(false);
	const pressSaveId = () => {
		setSaveId(!saveId);
	};
	const moveToFindId = () => {
		props.navigation.navigate('AssignRoute', {screen: 'VerifyUser'});
	};
	const moveToAssignUser = () => {
		props.navigation.push('AssignRoute', {screen: 'Assign', params: {title: '회원가입'}});
	};
	const moveToHome = () => {
		props.navigation.navigate('MainScreen');
	};

	const loginClick = () =>{
		axios.post('https://api.zoodoongi.net/login',{id:data.id,password:data.password}).then(
			(result)=>{
				console.log(result);
				if(result.data.msg){
					alert(result.data.msg[0].id+'님 로그인 성공');
					setInterval(moveToHome,1500);
					// moveToHome();
				}else{
					alert('로그인에 실패하였습니다. 아이디와 비밀번호를 확인해주세요'+result.msg);
				}
			}
		)
	};
	const [data, setData] =React.useState({
		id:'',password:''
	})
	const idChange = (e)=>{
		setData({...data,id:e.nativeEvent.text});
	}
	const passwordChange = (e)=>{
		setData({...data,password:e.nativeEvent.text});
	}

	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.contents}>
				<TouchableWithoutFeedback onPress={moveToHome}>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 188 * DP, marginBottom: 70 * DP}}>
						<Text style={[textstyles.noto24, {color: GRAY}]}>{WITHOUT_LOGIN}</Text>
						<SvgWrapper style={{width: 50 * DP, height: 50 * DP}} svg={<Bracket fill={GRAY} />} />
					</View>
				</TouchableWithoutFeedback>

				<View style={layoutstyles.inputform}>
					<View style={(layoutstyles.textinputContainer, {marginBottom: 32 * DP})}>
						<FormTxtInput
							inputStyle={[formstyles.id_input, textstyles.noto28]}
							placeholder={REQ_PHONE_NUM_AND_EMAIL}
							placeholderTextColor={GRAY_PLACEHOLDER}
							onChange={idChange}
							></FormTxtInput>
						<FormTxtInput
							inputStyle={[formstyles.pass_input, textstyles.noto28]}
							placeholder={REQ_PASSWORD}
							placeholderTextColor={GRAY_PLACEHOLDER}
							onChange={passwordChange}
							password></FormTxtInput>
					</View>
					{false && (
						<View style={formstyles.fail_msg}>
							<Text style={[textstyles.noto28, textstyles.red]}>{FAIL_MSG}</Text>
						</View>
					)}
					{false && (
						<View style={formstyles.fail_description}>
							<Text style={[textstyles.noto28, textstyles.red]}>{FAIL_LOGIN_COUNT}</Text>
							<Text style={[textstyles.noto28, textstyles.gray]}>{FAIL_LOGIN_LOCK}</Text>
						</View>
					)}
					{false && (
						<View style={layoutstyles.container_recaptcha}>
							<View style={layoutstyles.recaptcha}>
								<Text>ReCaptcha</Text>
							</View>
							<TextInput
								style={[formstyles.pass_input, textstyles.noto28]}
								placeholder={RECAPTCHA}
								placeholderTextColor={GRAY_PLACEHOLDER}></TextInput>
						</View>
					)}

					<View style={layoutstyles.autologinContainer}>
						<CheckBtn onPress={pressAutoLogin} btn_txt={LOGIN_AUTO} isCheck={autoLogin} />
						<CheckBtn onPress={pressSaveId} btn_txt={SAVE_ID} isCheck={saveId} />
					</View>
				</View>
				<TouchableWithoutFeedback onPress={loginClick}>
					<View style={[buttonstyle.loginbutton, buttonstyle.shadow]}>
						<Text style={[textstyles.noto32b, textstyles.white]}>{LOGIN}</Text>
					</View>
				</TouchableWithoutFeedback>

				<View style={layoutstyles.socialLinkContainer}>
					<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Naver />} />
					<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Kakao />} />
					<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Instagram />} />
					<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Facebook />} />
				</View>

				<View style={layoutstyles.suggestion}>
					<TouchableWithoutFeedback onPress={moveToFindId}>
						<Text style={textstyles.noto24}>
							{ASK_LOST_ID_PASS} <Text style={textstyles.link}>{FIND_ID}</Text> 또는 <Text style={textstyles.link}>{FIND_PASS}</Text>
						</Text>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={moveToAssignUser}>
						<View style={{flexDirection: 'row'}}>
							<Text style={textstyles.noto24}>
								<Text style={textstyles.gray}>{ASK_USER}</Text> {ASSIGN_USER}
							</Text>
							<SvgWrapper style={{width: 26 * DP, height: 40 * DP}} svg={<Bracket fill={BLACK} />} />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
	);
};

const CheckBtn = props => {
	return (
		<View style={buttonstyle.autologinButton}>
			<TouchableWithoutFeedback onPress={props.onPress}>
				{props.isCheck ? (
					<View style={buttonstyle.checkedButton}>
						<SvgWrapper style={buttonstyle.checkedButton} svg={<CheckedBtn />} />
					</View>
				) : (
					<View style={buttonstyle.notcheckButton} />
				)}
			</TouchableWithoutFeedback>
			<Text style={[textstyles.noto28, {color: SLIGHT_BLACK, marginBottom: 6 * DP}]}>{props.btn_txt}</Text>
		</View>
	);
};
