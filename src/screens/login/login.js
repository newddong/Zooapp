import React, {useState} from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
	Kakao,
	Naver,
	Instagram,
	Facebook,
	Xbutton,
	CheckedBtn,
	Bracket,
} from '../../../asset/image';
import {layoutstyles, textstyles, buttonstyle, formstyles} from './style_login';

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
				<View style={layoutstyles.header}>
					<Image
						style={buttonstyle.backbutton}
						source={require('../../../asset/image/back_arrow.png')}
					/>
					<Text style={textstyles.bold40}>로그인</Text>
				</View>

				<View style={layoutstyles.inputform}>
					<View style={layoutstyles.textinputContainer}>
						<TextInput
							style={formstyles.textinput}
							placeholder="아이디 또는 이메일을 입력해주세요."
							placeholderTextColor="#999999"></TextInput>
						<TextInput
							style={formstyles.textinput}
							placeholder="비밀번호를 입력해주세요."
							placeholderTextColor="#999999"></TextInput>
					</View>
					<View style={layoutstyles.autologinContainer}>
						<View style={layoutstyles.autologinButton}>
							<TouchableWithoutFeedback onPress={pressAutoLogin}>
								{autoLogin ? (
									<View style={buttonstyle.checkedButton}>
										<CheckedBtn width="100%" height="100%" />
									</View>
								) : (
									<View style={buttonstyle.notcheckButton} />
								)}
							</TouchableWithoutFeedback>
							<Text style={textstyles.regular28}>자동 로그인</Text>
						</View>

						<View style={layoutstyles.autologinButton}>
							<TouchableWithoutFeedback onPress={pressSaveId}>
								{saveId ? (
									<View style={buttonstyle.checkedButton}>
										<CheckedBtn width="100%" height="100%" />
									</View>
								) : (
									<View style={buttonstyle.notcheckButton} />
								)}
							</TouchableWithoutFeedback>
							<Text style={textstyles.regular28}>아이디 저장</Text>
						</View>
					</View>
				</View>

				<LinearGradient
					start={{x: 0, y: 0}}
					end={{x: 1, y: 0}}
					colors={['#FFB6A5', '#FFE7A4']}
					style={buttonstyle.loginbutton}>
					<Text style={textstyles.loginbuttontxt}>로그인</Text>
				</LinearGradient>

				<View style={layoutstyles.socialLinkContainer}>
					<View style={layoutstyles.socialLink}>
						<View style={buttonstyle.socialAppsButton}>
							<Naver width="100%" height="100%" />
						</View>
						<View style={buttonstyle.socialAppsButton}>
							<Kakao width="100%" height="100%" />
						</View>
						<View style={buttonstyle.socialAppsButton}>
							<Instagram width="100%" height="100%" />
						</View>
						<View style={buttonstyle.socialAppsButton}>
							<Facebook width="100%" height="100%" />
						</View>
					</View>
				</View>
				<View style={layoutstyles.suggestion}>
					<Text style={textstyles.regular24}>
						계정을 잊으셨나요? <Text style={textstyles.link}>ID찾기</Text> 또는{' '}
						<Text style={textstyles.link}>비밀번호 찾기</Text>
					</Text>
					<View style={{flexDirection: 'row'}}>
						<Text style={textstyles.regular24}>
							<Text style={textstyles.gray}>아직 회원이 아닌가요?</Text> 회원가입
						</Text>
						<Bracket width="19" height="19" />
					</View>
				</View>
			</View>
		</View>
	);
};

export default Login;
