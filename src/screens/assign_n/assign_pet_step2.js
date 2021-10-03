import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import DP from 'Screens/dp';
import {GRAY, GRAY_PLACEHOLDER, MAINCOLOR, WHITE} from 'Screens/color';
import {
	BTN_CHECK,
	REQ_NAME,
	REQ_PHONE_NUM,
	TAB_VERIFY_EMAIL,
	TAB_VERIFY_PHONE,
	ASSIGN_USER_DESCRIPTION,
	REQ_EMAIL,
	CHECK_VERIFYCATION,
	REQUEST_VERIFYCATION,
	INPUT_VERIFYCATION_NUM,
	EMAIL_NAVER,
	EMAIL_DAUM,
	EMAIL_KAKAO,
	EMAIL_NATE,
	EMAIL_GMAIL,
	INPUT_DIRECT,
	INPUT_DOMAIN,
	MALE,
	FEMALE,
	REQ_PET_TYPE_SEX,
	CHOICE_TYPE,
	PET_TYPE,
	PET_SEX,
	BTN_BACK,
	BTN_NEXT,
} from 'Screens/msg';
import {DownBracketBlack, DownBracket, BtnWriteFeed, Progressbar_2_of_5, CancelInput} from 'Asset/image';
import {txt, lo, btn, form, tab, tab_filled_color, assign_profile, pet} from './style_assign';
import FormTxtInput from 'Screens/common/formtxtinput';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import Stagebar from 'Screens/common/stagebar';

export default Assign_pet_step2 = props => {
	const [description, setDescription] = React.useState(ASSIGN_USER_DESCRIPTION);
	const [ui, setUI] = React.useState({mode: TAB_VERIFY_PHONE, description: true, checked: false});
	const [TELCO, setTelco] = React.useState('통신사 선택');
	const [EMAILCO, setEmailco] = React.useState('');

	const tabSelect = menu => () => {
		switch (menu) {
			case TAB_VERIFY_PHONE:
				setUI({...ui, mode: TAB_VERIFY_PHONE});
				break;
			case TAB_VERIFY_EMAIL:
				setUI({...ui, mode: TAB_VERIFY_EMAIL});
				break;
		}
	};

	const check = () => {
		switch (ui.mode) {
			case TAB_VERIFY_PHONE:
				props.navigation.push('VerifyMobile', {title: TAB_VERIFY_PHONE, data: data});
				break;
			case TAB_VERIFY_EMAIL:
				props.navigation.push('VerifyEmail', {title: TAB_VERIFY_EMAIL, data: data});
				break;
		}
	};

	const confirmNum = () => {
		props.navigation.push('Assign_pet_step3', {title: '반려동물 등록', data: data});
	};

	const [data, setData] = React.useState({
		name: '',
		email: '',
		emailCompany: 'naver.com',
		userEmailCompany: null,
		phone: '',
	});

	const emailCompany = e => {
		setData({...data, userEmailCompany: e.nativeEvent.text});
	};

	const followBtnAnimationTelco = useSharedValue(0);
	const followBtnAniStyleTelco = useAnimatedStyle(() => ({
		height: (followBtnAnimationTelco.value * 280 + 60) * DP,
	}));

	const followBtnBracketStyleTelco = useAnimatedStyle(() => ({
		transform: [{rotate: `${followBtnAnimationTelco.value * 180}deg`}],
	}));

	const followBtnItemListStyleTelco = useAnimatedStyle(() => ({
		transform: [{scaleY: followBtnAnimationTelco.value}],
	}));

	const followBtnAnimationEmail = useSharedValue(0);
	const followBtnAniStyleEmail = useAnimatedStyle(() => ({
		height: (followBtnAnimationEmail.value * 420 + 60) * DP,
	}));

	const followBtnBracketStyleEmail = useAnimatedStyle(() => ({
		transform: [{rotate: `${followBtnAnimationEmail.value * 180}deg`}],
	}));

	const followBtnItemListStyleEmail = useAnimatedStyle(() => ({
		transform: [{scaleY: followBtnAnimationEmail.value}],
	}));

	const selectTelco = e => {
		setTelco(e);
	};

	const selectEmailco = e => {
		if (e == INPUT_DIRECT) setEmailco('');
		else setEmailco(e);
	};

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				<Stagebar
					style={assign_profile.container_stagebar}
					width={600 * DP}
					backgroundBarStyle={assign_profile.stagebar_backgroundBar}
					insideBarStyle={assign_profile.stagebar_insideBar}
					textStyle={[txt.roboto24, {color: GRAY}]}
					current={2}
					maxstage={3}
				/>
				<Text style={[txt.noto24, txt.gray, {lineHeight: 36 * DP, marginTop: 12 * DP}]}>{REQ_PET_TYPE_SEX}</Text>

				<View style={{flexDirection: 'row', alignItems: 'center',marginBottom:40*DP,marginTop:70*DP}}>
					<Text style={[txt.noto28, {/*marginTop: 50 * DP,*/ marginRight: 10 * DP, color: GRAY}]}>{PET_TYPE}</Text>

					<Dropdown
						style={pet.select_animal_kind}
						dropdownContainerStyle={[
							followBtnAniStyleEmail,
						]}
						data={['개', '고양이', '새', '햄스터', '이구아나', INPUT_DIRECT]}
						dropItemTxtStyle={[txt.regular28cjk, data.isFollowed ? txt.white : {color: 'black'}]}
						listBackgroundStyle={[{height: 330 * DP, width: 150 * DP, marginTop: 80 * DP}, followBtnItemListStyleEmail]}
						listContainerStyle={{height: 330 * DP, justifyContent: 'space-between', alignItems: 'center'}}
						onSelect={e => {
							selectEmailco(e);
						}}
						onSelectNotClose={false}
						onOpen={() => {
							followBtnAnimationEmail.value = withSpring(1, {duration: 300});
						}}
						onClose={() => {
							followBtnAnimationEmail.value = withTiming(0, {duration: 300});
						}}
						animation
						component={
							<>
								<Text style={txt.noto28}>{'멍멍이'}</Text>
								<SvgWrapper style={[btn.followButtonBracketsize, followBtnBracketStyleEmail]} svg={<DownBracket fill={'#999999'} />} />
							</>
						}
					/>
					{/* <FormTxtInput
						inputStyle={[form.email_domain, txt.noto28, {width: 450 * DP}]}
						placeholder={CHOICE_TYPE}
						placeholderTextColor={GRAY_PLACEHOLDER}
						onChange={emailCompany}
						value={EMAILCO}
					/> */}
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={[txt.noto28, {marginTop: 20 * DP, marginRight: 100 * DP, color: GRAY}]}>{PET_SEX}</Text>
					<TabButton txt={MALE} onPress={tabSelect(TAB_VERIFY_PHONE)} select={ui.mode === TAB_VERIFY_PHONE} />
					<TabButton txt={FEMALE} onPress={tabSelect(TAB_VERIFY_EMAIL)} select={ui.mode === TAB_VERIFY_EMAIL} />
				</View>

				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 * DP}}>
					<TouchableWithoutFeedback onPress={props.navigation.goBack}>
						<View style={[btn.confirm_filled_empty, btn.shadow, {marginTop: 50 * DP}]}>
							<Text style={[txt.noto32b, txt.MAINCOLOR]}>{BTN_BACK}</Text>
						</View>
					</TouchableWithoutFeedback>

					<TouchableWithoutFeedback onPress={confirmNum}>
						<View style={[btn.confirm_filled_color, btn.shadow, {marginTop: 50 * DP}]}>
							<Text style={[txt.noto32b, txt.white]}>{BTN_NEXT}</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
	);
};

const TabButton = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={props.select ? tab_filled_color.btn_tab : tab_filled_color.btn_tab_notselected}>
				<Text style={props.select ? [txt.noto28b, {color: WHITE}] : [txt.noto28, {color: GRAY}]}>{props.txt}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};
