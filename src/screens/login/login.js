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
	FIND_ID,
	FIND_PASS,
	LOGIN,
	LOGIN_AUTO,
	REQ_PASSWORD,
	REQ_PHONE_NUM_AND_EMAIL,
	SAVE_ID,
	WITHOUT_LOGIN,
} from 'Screens/msg';

const Login = () => {
	const [autoLogin, setAutoLogin] = useState(false);
	const pressAutoLogin = () => {
		setAutoLogin(!autoLogin);
	};
	const [saveId, setSaveId] = useState(false);
	const pressSaveId = () => {
		setSaveId(!saveId);
	};

	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.contents}>
				<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 188 * DP, marginBottom: 70 * DP}}>
					<Text style={[textstyles.noto24, {color: GRAY}]}>{WITHOUT_LOGIN}</Text>
					<SvgWrapper style={{width: 50 * DP, height: 50 * DP}} svg={<Bracket fill={GRAY} />} />
				</View>

				<View style={layoutstyles.inputform}>
					<View style={layoutstyles.textinputContainer}>
						<TextInput
							style={[formstyles.textinput, textstyles.noto28]}
							placeholder={REQ_PHONE_NUM_AND_EMAIL}
							placeholderTextColor={GRAY_PLACEHOLDER}></TextInput>
						<TextInput
							style={[formstyles.textinput, textstyles.noto28]}
							placeholder={REQ_PASSWORD}
							placeholderTextColor={GRAY_PLACEHOLDER}></TextInput>
					</View>

					<View style={layoutstyles.autologinContainer}>
						<CheckBtn onPress={pressAutoLogin} btn_txt={LOGIN_AUTO} isCheck={autoLogin} />
						<CheckBtn onPress={pressSaveId} btn_txt={SAVE_ID} isCheck={saveId} />
					</View>
				</View>

				<View style={[buttonstyle.loginbutton,buttonstyle.shadow]}>
					<Text style={[textstyles.noto32b, textstyles.white]}>{LOGIN}</Text>
				</View>

				<View style={layoutstyles.socialLinkContainer}>
						<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Naver />} />
						<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Kakao />} />
						<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Instagram />} />
						<SvgWrapper style={buttonstyle.socialAppsButton} svg={<Facebook />} />
				</View>

				<View style={layoutstyles.suggestion}>
					<Text style={textstyles.noto24}>
						{ASK_LOST_ID_PASS} <Text style={textstyles.link}>{FIND_ID}</Text> 또는 <Text style={textstyles.link}>{FIND_PASS}</Text>
					</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={textstyles.noto24}>
							<Text style={textstyles.gray}>{ASK_USER}</Text> {ASSIGN_USER}
						</Text>
						<SvgWrapper style={{width: 26 * DP, height: 40 * DP}} svg={<Bracket fill={BLACK} />} />
					</View>
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
						<SvgWrapper style={buttonstyle.checkedButton} svg={<CheckedBtn />}/>
					</View>
				) : (
					<View style={buttonstyle.notcheckButton} />
				)}
			</TouchableWithoutFeedback>
			<Text style={[textstyles.noto28, {color: SLIGHT_BLACK, marginBottom: 6 * DP}]}>{props.btn_txt}</Text>
		</View>
	);
};

export default Login;
