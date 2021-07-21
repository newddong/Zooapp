import React, {useEffect} from 'react';

import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {lo, txt, btn} from './style_address';
import FormTxtInput from 'Screens/login/formtxtinput';
import DP, {svg_size} from 'Screens/dp';
import {SvgWrap} from 'Screens/svgwrapper';
import {SearchIcon} from 'Asset/image';
import {ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import qs from 'qs';

export default AddressResult = props => {
   const [data, setData] = React.useState(
      props.route.params?.data
   )
   const [addrList, setAddrList] = React.useState([]);
   const [page,setPage] = React.useState(1);
   useEffect(() => {
		console.log(addrList)
      setAddrList([]);
      search(data.keyword,1);
	}, [data]);

	const search = (keyword,page) => {
		axios
			.post(
				'https://www.juso.go.kr/addrlink/addrLinkApi.do',
				qs.stringify({
					confmKey: 'devU01TX0FVVEgyMDIxMDcwNzIxMjcwOTExMTM3OTk=',
					currentPage: page,
					countPerPage: 30,
					keyword: keyword,
					resultType: 'json',
				}),
			)
			.then(result => {
				setAddrList([...addrList,...JSON.parse(result.request._response).results.juso]);
			})
			.catch(err => {
				console.log(err);
			});
	};

	
	const keywordInput = (keyword) => {
      setData({...data,keyword:keyword.nativeEvent.text});
      // search(keyword.nativeEvent.text);

   }
   const [onInput,setOnInput] = React.useState(false);
   const scrollReachedEnd = () => {
      setPage(page+1);
      search(data.keyword,page);
   }

	return (
		<View style={lo.wrp_main}>
			<View style={[lo.cntr_contents, lo.shadow]}>
				<View style={lo.cntr_tab}>
					<TouchableWithoutFeedback onPress={()=>{}}>
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
					<Text style={[txt.noto40b, txt.gray, {lineHeight: 42 * DP}]}>·</Text>
					<View>
						<Text style={[txt.noto20, txt.gray, {lineHeight: 28 * DP}]}>
							찾으시려는 도로명 주소의 건물번호 또는 건물명까지 상세히 입력 후 검색해 주세요. (도로명 주소 확인: WWW.juso.go.kr)
						</Text>
						<Text style={[txt.noto20, txt.gray, , {lineHeight: 28 * DP}]}>예) 중앙동, 불정로 432번</Text>
					</View>
				</View>
				<View style={[lo.cntr_form, {marginBottom: 10 * DP}]}>
					<FormTxtInput
                  onChange={keywordInput}
						style={lo.form_input}
						inputStyle={[txt.noto28, {includeFontPadding: false, paddingVertical: 0}]}
						placeholder={'지번/도로명을 입력해 주세요.'}
						placeholderTextColor={'#DBDBDB'}
						value={data.keyword}
                  onFocus={()=>{setOnInput(true)}}
                  onBlur={()=>{setOnInput(false)}}
					/>
					<SvgWrap
						style={{width: 56 * DP, height: 56 * DP}}
						svg={<SearchIcon fill={'#767676'} />}
						onPress={() => {
							alert('클릭');
						}}
					/>
				</View>
				<View style={lo.cntr_msg}>
					<Text style={[txt.noto20, txt.gray, {lineHeight: 28 * DP}]}>
						주소지 선택후 <Text style={[txt.noto20, txt.maincolor]}>상세주소</Text>를 입력해 주세요
					</Text>
				</View>
				<View style={{backgroundColor: 'yellow', flex: 1}}>
					<FlatList
						data={addrList}
                  refreshing
						renderItem={({item}) => <AddrItem data={item} />}
						keyExtractor={item => Math.random()}
                  onEndReached={scrollReachedEnd}
                  onEndReachedThreshold={0.6}
					/>
				</View>
				{!onInput&&<><View style={lo.cntr_detail_addr}>
					<Text style={txt.noto24b}>상세주소 입력</Text>
					<Text style={txt.noto24}>상세주소 입력</Text>
					<FormTxtInput
						style={lo.form_input}
						inputStyle={[txt.noto24, {includeFontPadding: false, paddingVertical: 0}]}
						placeholder={'상세주소를 입력하세요.'}
						placeholderTextColor={'#DBDBDB'}
					/>
				</View>
				<View style={lo.cntr_msg}>
					<Text style={[txt.noto40b, txt.maincolor, {lineHeight: 42 * DP}]}>·</Text>
					<View>
						<Text style={[txt.noto20, txt.maincolor, {lineHeight: 28 * DP}]}>
							기본 주소 선택 후 상세 주소를 반드시 입력해 주세요. 상세 주소가 없는 경우 주소지 특징을 입력해 주세요.
						</Text>
					</View>
				</View>
            <View style={lo.cntr_btn}>
            <TouchableWithoutFeedback onPress={()=>{}}>
						<View style={[btn.confirm_button, btn.shadow]}>
							<Text style={[txt.noto24b, txt.white]}>{'주소 입력 완료'}</Text>
						</View>
            </TouchableWithoutFeedback>
            </View></>}

			</View>
		</View>
	);
};

const AddrItem = props => {
   const [isSelect,setSelect] = React.useState(false);

	return (
		<TouchableWithoutFeedback onPress={() => {}}>
			<View style={props.style}>
				<Text>{props.data.roadAddr}</Text>
				<Text>{props.data.zipNo}</Text>
				<Text>{props.data.jibunAddr}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

AddrItem.defaultProps = ({
   onSelect:()=>{},
})