import React from 'react';

import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {lo, txt} from './style_address';
import FormTxtInput from 'Screens/login/formtxtinput';
import DP, {svg_size} from 'Screens/dp';
import {SvgWrap} from 'Screens/svgwrapper';
import {SearchIcon} from 'Asset/image';
//api상 지번주소 도로명 주소 동시에 출력되는데 위에 도로명,지번 구분 탭이 필요한지?

export default AddressSearch = props => {
	const addressSearch = () => {
		props.navigation.push('AddressResult', {title: '주소 검색', data: data});
	};

	const [data, setData] = React.useState({
		keyword: '',
	});

	const keywordInput = input => {
      console.log(data.keyword);
		setData({...data, keyword: input.nativeEvent.text});
	};

	return (
		<View style={lo.wrp_main}>
			<View style={lo.cntr_contents}>
				<View style={lo.cntr_tab}>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[lo.btn_tab]}>
							<Text style={[txt.noto28, txt.gray]}>지번 주소</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[lo.btn_tab, lo.tab_selected]}>
							<Text style={[txt.noto28b, txt.white]}>도로명 주소</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={lo.cntr_msg}>
					<Text style={[txt.noto40b, {lineHeight: 42 * DP}, txt.maincolor]}>·</Text>
					<View>
						<Text style={[txt.noto20, txt.maincolor, {lineHeight: 28 * DP}]}>
							찾으시려는 도로명 주소의 건물번호 또는 건물명까지 상세히 입력 후 검색해 주세요. (도로명 주소 확인: WWW.juso.go.kr)
						</Text>
						<Text style={[txt.noto20, txt.maincolor, , {lineHeight: 28 * DP}]}>예) 중앙동, 불정로 432번</Text>
					</View>
				</View>
				<View style={lo.cntr_form}>
					<FormTxtInput
						onChange={keywordInput}
						style={lo.form_input}
						inputStyle={[txt.noto28, {includeFontPadding: false, paddingVertical: 0}]}
						placeholder={'지번/도로명을 입력해 주세요.'}
						placeholderTextColor={'#DBDBDB'}
                  value={data.keyword}
					></FormTxtInput>
					<SvgWrap style={{width: 56 * DP, height: 56 * DP}} svg={<SearchIcon fill={'#767676'} />} onPress={addressSearch} />
				</View>
				<View style={lo.cntr_msg}>
					<Text style={[txt.noto40b, {lineHeight: 42 * DP}, txt.maincolor]}>·</Text>
					<View>
						<Text style={[txt.noto20, txt.maincolor, {lineHeight: 28 * DP}]}>
							기본 주소 선택 후 상세 주소를 반드시 입력해 주세요. 상세 주소가 없는 경우 주소지 특징을 입력해 주세요.
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
