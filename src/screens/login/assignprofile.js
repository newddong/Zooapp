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
	FAIL_PASS_CHECK,
} from 'Screens/msg';
import {DownBracketBlack, CancelInput, BtnWriteFeed} from 'Asset/image';
import {txt, lo, btn, form, tab, assign_profile} from './style_assign';
import FormTxtInput from './formtxtinput';
import axios from 'axios';
//todo:닉네임 체크 로직(서버랑)
export default AssingProfile = props => {
	const [existId, setExistId] = React.useState(false);

	const [match, setMatch] = React.useState(false);

	const completeAssign = () => {
		// props.navigation.navigate('Assign');
		//서버에 유저 추가 신청
		//아이디 중복체크, 비밀번호 유효성 체크, 서버작업 필요
		axios.post('https://api.zoodoongi.net/user/add', {id: data.phone || data.email, password: data.password, name: data.name}).then(res => {
			// console.log(res);
			//성공후 이동
			props.navigation.navigate('Login');
		});
	};

	const inputPwd = e => {
		// setData({...data,password:e.nativeEvent.text,input:e.nativeEvent.text});
	};
	const checkPwd = e => {
		// setData({...data,check:e.nativeEvent.text});
	};

	const [data, setData] = React.useState({
		// ...props.route.params.data,
		password: '',
		input: '',
		check: '',
	});

	// React.useEffect(()=>{
	// 	console.log(data);
	// 	if(data.input===data.check&&data.input.length>=8&&data.check.length>=8){
	// 		//유효성 검사 로직 필요
	// 		setMatch(true);
	// 	}else{
	// 		setMatch(false);
	// 	}
	// },[data])

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				<View style={lo.assign_profile}>
					<Text style={[txt.noto24, txt.gray, {marginTop: 20 * DP}]}>프로필 사진과 닉네임은 나중에도 변경 할 수 있어요.</Text>
               <View style={assign_profile.cntr_profile}>
					<Image
						style={assign_profile.img_profile}
						source={{
							uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
						}}></Image>

               <TouchableWithoutFeedback
						onPress={() => {
							navigation.push('WriteFeed');
						}}>
						<View style={assign_profile.btn_add}>
							<SvgWrapper style={{width: 92 * DP, height: 92 * DP}} svg={<BtnWriteFeed fill="#fff" />} />
						</View>
					</TouchableWithoutFeedback>   
               </View>
					
				</View>

				<View style={[lo.pass_form]}>
					<Text style={[txt.noto30b, {color: GRAY, lineHeight: 40 * DP}]}>{'닉네임'}</Text>
					<Text style={[txt.noto24, {color: GRAY_PLACEHOLDER}]}>{"*2자 이상 15자 이내의 한글,영문,숫자,'_'의 입력만 가능합니다"}</Text>
					<FormTxtInput
						onChange={checkPwd}
						inputStyle={[txt.noto28, form.mobile_input]}
						placeholder={'닉네임을 입력하세요'}
						placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
				</View>

				<View style={[lo.confirm_status, {borderTopColor: existId ? RED : GREEN}]}>
					<Text style={[txt.noto30, {color: existId ? RED : GREEN}]}>{existId ? '이미 사용중인 닉네임입니다.' : '사용이 가능한 닉네임입니다.'}</Text>
				</View>

				{existId ? (
					<View style={[btn.confirm_button, {backgroundColor: GRAY_BRIGHT}, btn.shadow]}>
						<Text style={[txt.noto32b, txt.white]}>{COMPLETE_ASSIGN}</Text>
					</View>
				) : (
					<TouchableWithoutFeedback onPress={completeAssign}>
						<View style={[btn.confirm_button, btn.shadow]}>
							<Text style={[txt.noto32b, txt.white]}>{COMPLETE_ASSIGN}</Text>
						</View>
					</TouchableWithoutFeedback>
				)}

				{false && (
					<View style={[lo.msg_pop, btn.shadow]}>
						<Text style={[txt.noto30b, {color: GRAY}]}>{COMPLETE_VERIFYCATION}</Text>
					</View>
				)}
				{false && (
					<View style={[lo.msg_pop, btn.shadow]}>
						<Text style={[txt.noto30b, {color: GRAY}]}>{CHECK_VERIFYCATION_NUM1}</Text>
					</View>
				)}
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
