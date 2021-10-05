import React, {useState, useRef, Component} from 'react';
import {StyleSheet, Text, View,  TouchableWithoutFeedback, Animated, PanResponder, Dimensions} from 'react-native';
import {
	PanGestureHandler,
	TapGestureHandler,
	ScrollView,
	State,
	PanGestureHandlerGestureEvent,
	TapGestureHandlerStateChangeEvent,
	PanGestureHandlerStateChangeEvent,  
 } from 'react-native-gesture-handler'; 

import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import DP from 'Screens/dp';
import {GRAY, GRAY_PLACEHOLDER, MAINCOLOR, WHITE} from 'Screens/color';
import {
	BTN_CHECK, REQ_NAME, REQ_PHONE_NUM, TAB_VERIFY_EMAIL, TAB_VERIFY_PHONE
	, ASSIGN_USER_DESCRIPTION
	, CHOICE_TYPE, PET_TYPE, PET_SEX, BTN_BACK, BTN_NEXT
	, REQ_VACCINE, COMPREHENSIVE_VACCINE, COVID, KENNEL_COUGH, RABIES
	, DISCLOSE, SKIP   
	} from 'Screens/msg';
import RangeSlider from 'Screens/common/rangeSlider';
import {Progressbar_5_of_5,CalendarIcon, Circle} from 'Asset/image';
import {txt, lo, btn, form, tab, tab_filled_color} from './style_assign';

export default Assign_pet_step5 = props => {
	const windowWidth =650*DP;
	const circleRadius = 30;
	const touchX = new Animated.Value(windowWidth / 2 - circleRadius);
	const translateX = useRef(Animated.add(touchX, new Animated.Value(-circleRadius))).current;			
	const [spot,setSpot] = React.useState(0);	

	const confirmNum = () => {
		props.navigation.push('Assign_pet_step5', {title: '반려동물 등록', data:data});
	};

	const [data, setData] = React.useState({
		name: '',
		email: '',
		emailCompany: 'naver.com',
		userEmailCompany:null,
		phone: '',
	});

	return (
		<View style={lo.wrp_main}>
			<View style={lo.contents}>
				<SvgWrapper style={{width: 654 * DP, height: 48 * DP}} svg={<Progressbar_5_of_5/>} />
				<Text style={[txt.noto28,{marginBottom: 70 * DP}]}>{REQ_VACCINE}</Text>		

					{/* 종합 */}
					<View style={{}}>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto28,{width:112*DP, marginRight:42*DP}]}>{COMPREHENSIVE_VACCINE}</Text>
							<RangeSlider style={{position : "absolute"}} width={500*DP} totalStep={5}/>						
						</View>				
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto20,{marginLeft:210*DP}]}>{"1차"}</Text>	
							<Text style={[txt.noto20,{ marginLeft:70*DP}]}>{"2차"}</Text>	
							<Text style={[txt.noto20,{marginLeft:60*DP}]}>{"3차"}</Text>	
							<Text style={[txt.noto20,{marginLeft:60*DP}]}>{"4차"}</Text>	
							<Text style={[txt.noto20,{marginLeft:60*DP}]}>{"5차"}</Text>	
						</View>
					</View>	

					{/* 코로나 */}
					<View style={{marginTop:40*DP}}>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto28, {width:112*DP, marginRight:42*DP}]}>{COVID}</Text>
							<RangeSlider style={{position : "absolute"}} width={500*DP} totalStep={2}/>												
						</View>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto20,{marginLeft:360*DP}]}>{"1차"}</Text>	
							<Text style={[txt.noto20,{ marginLeft:210*DP}]}>{"2차"}</Text>							
						</View>
					</View>	

					{/* 캔넬코프 */}
					<View style={{marginTop:40*DP}}>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto28, {width:112*DP, marginRight:42*DP}]}>{KENNEL_COUGH}</Text>
							<RangeSlider style={{position : "absolute"}} width={500*DP} totalStep={2}/>													
						</View>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto20,{marginLeft:360*DP}]}>{"1차"}</Text>	
							<Text style={[txt.noto20,{ marginLeft:210*DP}]}>{"2차"}</Text>							
						</View>
					</View>

					{/* 광견병 */}
					<View style={{marginTop:40*DP}}>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto28, {width:112*DP, marginRight:42*DP}]}>{RABIES}</Text>
							<RangeSlider style={{position : "absolute"}} width={250*DP} totalStep={1}/>																		
						</View>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto20,{marginLeft:360*DP}]}>{"1차"}</Text>								
						</View>
					</View>

					{/* 공개 */}
					<View style={{marginTop:40*DP}}>
						<View style={{flexDirection:'row'}}>
							<Text style={[txt.noto28, {width:112*DP, marginRight:42*DP}]}>{DISCLOSE}</Text>			
							<RangeSlider style={{position : "absolute"}} width={84*DP} height={36*DP} totalStep={1}/>																					
						</View>
					</View>
				
					<View style={{flexDirection:'row', justifyContent:'space-between', marginTop:50 * DP}}>
						<TouchableWithoutFeedback onPress={props.navigation.goBack}>
							<View style={[btn.confirm_filled_empty_small, btn.shadow,{marginTop: 50 * DP,}]}>
								<Text style={[txt.noto32b, txt.MAINCOLOR]}>{BTN_BACK}</Text>
							</View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={props.navigation.goBack}>
							<View style={[btn.confirm_filled_empty_small, btn.shadow,{marginTop: 50 * DP,}]}>
								<Text style={[txt.noto32b, txt.MAINCOLOR]}>{SKIP}</Text>
							</View>
						</TouchableWithoutFeedback>

						<TouchableWithoutFeedback onPress={confirmNum}>
							<View style={[btn.confirm_filled_color_small, btn.shadow,{marginTop: 50 * DP,}]}>
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