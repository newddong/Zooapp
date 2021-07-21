import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Modal} from 'react-native';

import {Bracket, DownBracketBlack} from 'Asset/image';
import DP from 'Screens/dp';
import {SvgWrap} from 'Screens/svgwrapper';
import {BLACK, GRAY, GRAY_PLACEHOLDER, GRAY_BRIGHT, MAINCOLOR, GRAY_BRIGHTEST, RED} from '../color';
import FormTxtInput from './formtxtinput';
import {lo, txt, form, btn} from './style_assign';
import {
	BTN_CHECK,
	INQUIRY,
	REQ_CODE,
	REQ_CODE_DESCRIPTION,
	ASK_SHELTER_ASSIGN,
	COMPLETE_ASSIGN,
	SHELTER_NAME,
	SHELTER_ADDRESS,
	REQ_SHELTER_NAME,
	REQ_SHELTER_ADDRESS,
	REQ_DETAIL_ADDRESS,
	SHELTER_PHONE_NUM,
	SHELTER_EMAIL,
	SHELTER_HOMEPAGE,
	SHELTER_DATE_FOUNDATION,
	REQ_SHELTER_URI,
	REQ_SHELTER_PHONE,
} from 'Screens/msg';
import Dropdown from './dropdown';
import {ScrollView} from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case next:

		case first:
	}
};
const ENTRANCE = 0;
const FIRST = 1;
const SECOND = 2;
const THIRD = 3;

export default AssignShelter = () => {
	const [stage, setStage] = React.useState(ENTRANCE);
	const [btnActive, setBtnActive] = React.useState(true);
	const confirmationStage = () => {
		switch (stage) {
			case ENTRANCE:
				setStage(FIRST);
				break;
			case FIRST:
				setStage(SECOND);
				break;
			case SECOND:
				setStage(THIRD);
				break;
			case THIRD:
				setStage(ENTRANCE);
				break;
		}
	};

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				{stage === ENTRANCE && <EntranceStage />}
				{stage === FIRST && <FirtStage />}
				{stage === SECOND && <SecondStage />}
				{stage === THIRD && <ThirdStage />}

				{!btnActive ? (
					<View style={[btn.confirm_button, {backgroundColor: GRAY_BRIGHT}, btn.shadow]}>
						<Text style={[txt.noto32b, txt.white]}>{BTN_CHECK}</Text>
					</View>
				) : (
					<TouchableWithoutFeedback onPress={confirmationStage}>
						<View style={[btn.confirm_button, btn.shadow]}>
							<Text style={[txt.noto32b, txt.white]}>{BTN_CHECK}</Text>
						</View>
					</TouchableWithoutFeedback>
				)}
			</View>
		</View>
	);
};

const EntranceStage = props => {
	return (
		<View style={lo.sctn_shelter_first}>
			<Text style={[txt.noto28, {marginTop: 216 * DP, marginBottom: 115 * DP}]}>{REQ_CODE_DESCRIPTION}</Text>
			<View style={lo.shelter_form}>
				<FormTxtInput
					style={{marginBottom: 20 * DP}}
					inputStyle={[form.input_shelter_code, txt.noto28]}
					placeholder={REQ_CODE}
					placeholderTextColor={GRAY_PLACEHOLDER}></FormTxtInput>
			</View>

			<View style={form.shelter_assign_inquiry}>
				<Text style={[txt.noto24, txt.gray]}>{ASK_SHELTER_ASSIGN} </Text>
				<Text style={[txt.noto24, {color: BLACK}]}>{INQUIRY}</Text>
				<SvgWrap style={{width: 30 * DP, height: 30 * DP}} svg={<Bracket fill={BLACK} />} />
			</View>
		</View>
	);
};

const FirtStage = () => {
	return (
		<>
			<StageBar style={{marginTop: 30 * DP, marginBottom: 78 * DP}} width={600 * DP} current={1} maxstage={3} />
			<View style={[lo.shelter_form, {marginBottom: 70 * DP}]}>
				<View style={{marginBottom: 80 * DP}}>
					<Text style={[txt.noto30, {color: GRAY}]}>
						{SHELTER_NAME}
						<Text style={{color: RED}}>*</Text>
					</Text>

					<FormTxtInput
						style={{marginBottom: 20 * DP}}
						inputStyle={[form.input_shelter_code, txt.noto28]}
						placeholder={REQ_SHELTER_NAME}
						placeholderTextColor={GRAY_PLACEHOLDER}
					/>
				</View>
				<Text style={[txt.noto30, {color: GRAY}]}>
					{SHELTER_ADDRESS}
					<Text style={{color: RED}}>*</Text>
				</Text>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10 * DP}}>
					<FormTxtInput
						style={{width: 472 * DP, marginRight: 30 * DP}}
						inputStyle={[form.input_shelter_code, txt.noto28]}
						placeholder={REQ_SHELTER_ADDRESS}
						placeholderTextColor={GRAY_PLACEHOLDER}
					/>

					<TouchableWithoutFeedback
						onPress={() => {
							alert('주소검색');
						}}>
						<View style={[btn.search_address, btn.shadow]}>
							<Text style={[txt.noto28, txt.gray]}>주소검색</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<FormTxtInput
					style={{marginBottom: 20 * DP}}
					inputStyle={[form.input_shelter_code, txt.noto28]}
					placeholder={REQ_DETAIL_ADDRESS}
					placeholderTextColor={GRAY_PLACEHOLDER}
				/>
			</View>
		</>
	);
};

const SecondStage = () => {
	const [data, setData] = React.useState({
		area_code: '02',
		userEmailCompany: null,
		emailCompany: 'naver.com',
	});

	const emailCompany = e => {
		setData({...data, userEmailCompany: e.nativeEvent.text});
	};

	const selectEmailCompany = item => {
		setData({...data, emailCompany: item});
	};

	const selectAreaCode = item => {
		setData({...data, area_code: item});
	};

	return (
		<>
			<StageBar style={{marginTop: 30 * DP, marginBottom: 78 * DP}} width={600 * DP} current={2} maxstage={3} />
			<View style={[lo.shelter_form, {marginBottom: 70 * DP}]}>
				<View style={{marginBottom: 80 * DP}}>
					<Text style={[txt.noto30, {color: GRAY}]}>
						{SHELTER_PHONE_NUM}
						<Text style={{color: RED}}>*</Text>
					</Text>
					<View style={{flexDirection: 'row'}}>
						<Dropdown
							style={[form.input_shelter_code, {flexDirection: 'row', width: 162 * DP, alignItems: 'center', justifyContent: 'space-around'}]}
							dropdownContainerStyle={[btn.cntr_dropdown, {width: 150 * DP, backgroundColor: form.input_shelter_code.backgroundColor}]}
							data={['02', '051', '031', '032']}
							onSelect={selectAreaCode}
							dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
							dropItemTxtStyle={[txt.roboto28]}
							dropDownStyle={{height: 300 * DP}}
							component={
								<>
									<Text style={txt.roboto28}>{data.area_code}</Text>
									<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
								</>
							}
						/>
						<FormTxtInput
							style={{marginBottom: 20 * DP}}
							inputStyle={[form.input_shelter_code, txt.noto28]}
							placeholder={REQ_SHELTER_PHONE}
							placeholderTextColor={GRAY_PLACEHOLDER}
						/>
					</View>
				</View>
				<Text style={[txt.noto30, {color: GRAY}]}>
					{SHELTER_EMAIL}
					<Text style={{color: RED}}>*</Text>
				</Text>
				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10 * DP}}>
					<FormTxtInput
						style={{width: 300 * DP}}
						inputStyle={[form.input_shelter_code, txt.noto28]}
						placeholder={SHELTER_EMAIL}
						placeholderTextColor={GRAY_PLACEHOLDER}
					/>
					<Text style={[form.input_shelter_code, txt.noto28, {width: 90 * DP}]}>@</Text>

					{data.emailCompany === '직접입력' ? (
						<FormTxtInput
							inputStyle={[form.email_input, txt.noto28, {width: 250 * DP}]}
							placeholder={'naver.com'}
							placeholderTextColor={GRAY_PLACEHOLDER}
							value={data.userEmailCompany}
							onChange={emailCompany}
						/>
					) : (
						<Dropdown
							style={[form.input_shelter_code, {flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-around'}]}
							dropdownContainerStyle={[btn.cntr_dropdown, {width: 260 * DP, backgroundColor: form.input_shelter_code.backgroundColor}]}
							data={['직접입력', 'naver.com', 'daum.net', 'gmail.com']}
							onSelect={selectEmailCompany}
							dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
							dropItemTxtStyle={[txt.roboto28, {color: GRAY}]}
							dropDownStyle={{height: 350 * DP}}
							component={
								<>
									<Text style={[txt.roboto28, {color: GRAY}]}>{data.emailCompany}</Text>
									<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
								</>
							}
						/>
					)}
				</View>
			</View>
		</>
	);
};

const ThirdStage = props => {
	const [layout, setLayout] = React.useState({});
	const [data, setData] = React.useState({
		homepageUri: '',
		foundationData: {year: '연도', month: '월', day: '일'},
	});
	const selectYear = item => {
		console.log(item);
		setData({...data, foundationData: {...data.foundationData, year: item}});
	};
	const selectMonth = item => {
		setData({...data, foundationData: {...data.foundationData, month: item}});
	};
	const selectDay = item => {
		setData({...data, foundationData: {...data.foundationData, day: item}});
	};

	return (
		<>
			<StageBar style={{marginTop: 30 * DP, marginBottom: 78 * DP}} width={600 * DP} current={3} maxstage={3} />
			<View style={[lo.shelter_form, {marginBottom: 70 * DP}]}>
				<View style={{marginBottom: 80 * DP}}>
					<Text style={[txt.noto30, {color: GRAY}]}>{SHELTER_HOMEPAGE}</Text>
					<FormTxtInput
						style={{marginBottom: 20 * DP}}
						inputStyle={[form.input_shelter_code, txt.noto28]}
						placeholder={REQ_SHELTER_URI}
						placeholderTextColor={GRAY_PLACEHOLDER}
					/>
				</View>

				<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10 * DP, justifyContent: 'space-between'}}>
					<Text style={[txt.noto30, {color: GRAY}]}>{SHELTER_DATE_FOUNDATION}</Text>

					<Dropdown
						style={[{width: 172 * DP, height: 48 * DP}, btn.dropdown]}
						dropdownContainerStyle={[btn.cntr_dropdown, {width: 172 * DP}]}
						data={Array.from({length: 75}, (v, i) => i + 1950)}
						onSelect={selectYear}
						dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
						dropItemTxtStyle={[txt.roboto28, {color: 'black'}]}
						dropDownStyle={{height: 350 * DP}}
						component={
							<>
								<Text style={txt.noto24}>{data.foundationData.year}</Text>
								<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
							</>
						}
					/>


					<Dropdown
						style={[{width: 144 * DP, height: 48 * DP}, btn.dropdown]}
						dropdownContainerStyle={[btn.cntr_dropdown,{width:144*DP}]}
						data={Array.from({length: 12}, (v, i) => i+1)}
						onSelect={selectMonth}
						dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
						dropItemTxtStyle={[txt.roboto28, {color: 'black'}]}
						dropDownStyle={{height: 350 * DP}}
						component={
							<>
								<Text style={txt.noto24}>{data.foundationData.month}</Text>
								<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
							</>
						}
					/>
					<Dropdown
						style={[{width: 144 * DP, height: 48 * DP}, btn.dropdown]}
						dropdownContainerStyle={[btn.cntr_dropdown, {width: 144 * DP}]}
						data={Array.from({length: 31}, (v, i) => i+1)}
						onSelect={selectDay}
						dropItemStyle={{marginVertical: 3 * DP, paddingHorizontal: 30 * DP}}
						dropItemTxtStyle={[txt.roboto28, {color: 'black'}]}
						dropDownStyle={{height: 350 * DP}}
						component={
							<>
								<Text style={txt.noto24}>{data.foundationData.day}</Text>
								<SvgWrap style={{height: 12 * DP, width: 20 * DP}} svg={<DownBracketBlack />} />
							</>
						}
					/>

				</View>
			</View>
		</>
	);
};

const StageBar = props => {
	return (
		<View style={{...props.style, flexDirection: 'row', alignItems: 'center'}}>
			<View style={{backgroundColor: GRAY_BRIGHTEST, width: props.width, height: 16 * DP, borderRadius: 8 * DP, marginRight: 8 * DP}}>
				<View
					style={{backgroundColor: MAINCOLOR, width: (props.width / props.maxstage) * props.current, height: 16 * DP, borderRadius: 8 * DP}}></View>
			</View>
			<Text style={[txt.roboto24, {color: GRAY}]}>
				{props.current}/{props.maxstage}
			</Text>
		</View>
	);
};
