import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Kakao, Naver, Instagram, Facebook, Xbutton, CheckedBtn} from '../../../asset/image';
import {layoutstyles, textstyles, buttonstyle, formstyles} from './style_login';

const Login = () => {
	return (
		<KeyboardAvoidingView style={layoutstyles.container}>
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
						<View style={layoutstyles.autologin}>
							<View style={buttonstyle.autologinButton} />
							<Text style={textstyles.regular28}>자동 로그인</Text>
						</View>
						<View style={layoutstyles.autologin}>
							<View style={buttonstyle.autologinButton} />
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
				
				<View
					style={{
						backgroundColor: 'red',
						height: 150,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<View style={{backgroundColor: 'green', height: 100, width: '80%'}}>
						<View
							style={{
								backgroundColor: 'grey',
								height: 40,
								flexDirection: 'row',
							}}>
							<Naver></Naver>
							<Kakao></Kakao>
							<Instagram></Instagram>
							<Facebook></Facebook>
						</View>
						<Text>계정을 잊으셨나요? ID찾기 또는 비밀번호 찾기</Text>
						<Text>아직 회원이 아닌가요? 회원가입</Text>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;
