import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text, TextInput, TouchableWithoutFeedback} from 'react-native';

import {CameraIcon, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TabContext} from 'tabContext';
import { TextPropTypes } from 'react-native';

export const InnerComponent = props => {
	React.useEffect(() => {
		const unsubscribe = props.navigation.addListener('blur', e => {
			props.tabVisible(true);
		});
		props.tabVisible(false);
		return unsubscribe;
	}, []);

	const [btnPublicClick, setBtnPublicClick] = React.useState(false);
	const btnPublic = useSharedValue(60);
	const btnPublicAni = useAnimatedStyle(() => {
		return {
			height: btnPublic.value *DP,
		};
	});
	const clickbtnPublic = () => {
		if (btnPublicClick) {
			setBtnPublicClick(false);
			btnPublic.value = withTiming(60);
		} else {
			setBtnPublicClick(true);
			btnPublic.value = withSpring(312);
		}
	};
	const rotate = useAnimatedStyle(()=>{
		return {transform:[{rotate:`${180*(btnPublic.value-60)/252}deg`}]};
	});

	return (
		<View style={lo.wrp_main}>
			<View style={lo.box_txtinput}>
				<TextInput style={lo.input_txt} placeholder="내용 입력..." multiline></TextInput>
			</View>

			<View style={[lo.wrp_box, lo.shadow]}>
				<View style={lo.box_btn}>
					<TouchableWithoutFeedback
						onPress={() => {
							props.navigation.push('addPhoto');
						}}>
						<View style={lo.box_actionbtn}>
							<SvgWrapper style={{width: 62 * DP, height: 56 * DP, marginRight: 10 * DP}} svg={<CameraIcon />} />
							<Text style={[txt.noto24r, txt.pink]}>사진추가</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => {
							props.navigation.push('cameratest');
						}}>
						<View style={lo.box_actionbtn}>
							<SvgWrapper style={{width: 46 * DP, height: 56 * DP, marginRight: 10 * DP}} svg={<LocationPinIcon />} />
							<Text style={[txt.noto24r, txt.pink]}>위치추가</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => {
							alert('태그하기');
							props.tabVisible(false);
						}}>
						<View style={lo.box_actionbtn}>
							<SvgWrapper style={{width: 54 * DP, height: 48 * DP, marginRight: 10 * DP}} svg={<PawIcon fill="#FFB6A5" />} />
							<Text style={[txt.noto24r, txt.pink]}>태그하기</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={btn.cntr_dropdown}>
					<View style={btn.dropdown}>
						<View style={[btn.size, {...btn.btn_profile, backgroundColor: '#FFB6A5'}, btn.shadow]}>
							<Text style={[txt.noto24b, txt.white]}>임보일기</Text>
						</View>
					</View>
					<View style={btn.dropdown}>
						<View style={[btn.size, btn.btn_profile, btn.shadow]}>
							<Text style={[txt.noto24r, txt.gray]}>댓글기능중지</Text>
						</View>
					</View>
					<View style={btn.dropdown}>
						<Animated.View style={[{...btn.size, ...btn.box_menu}, btn.shadow, btnPublicAni]}>
							{btnPublicClick && (
								<>
									<Text style={[txt.noto28r, txt.white, {marginTop: 60 * DP}]}>전체공개</Text>
									<Text style={[txt.noto28r, txt.white]}>팔로워공개</Text>
									<Text style={[txt.noto28r, txt.white]}>비공개</Text>
								</>
							)}
						</Animated.View>
						<TouchableWithoutFeedback onPress={clickbtnPublic}>
							<View style={[btn.size, btn.btn_profile, btn.shadow, {position: 'absolute'}]}>
								<Text style={[txt.noto24r, txt.gray]}>공개설정</Text>
								<SvgWrapper style={[btn.profileButtonBracketsize,rotate]} svg={<DownBracketGray />} />
							</View>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
		</View>
	);
};

export default WriteFeed = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_txtinput: {
		height: 300 * DP,
		paddingHorizontal: 48 * DP,
		paddingTop: 40 * DP,
		backgroundColor: '#FFF',
	},
	input_txt: {
		paddingVertical: 0,
		borderWidth: 0,
		includeFontPadding: false,
	},
	wrp_box: {
		flex: 1,
		backgroundColor: '#fff',
	},
	box_btn: {
		marginTop: 40 * DP,
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent: 'space-around',
	},
	box_actionbtn: {
		flexDirection: 'row',
		height: 56 * DP,
		alignItems: 'center',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
});

const btn = StyleSheet.create({
	size: {
		width: 198 * DP,
		height: 60 * DP,
	},
	btn_profile: {
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		// zIndex: 150,
	},
	cntr_dropdown: {
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		marginTop: 40 * DP,
		justifyContent: 'space-between',
	},
	dropdown: {},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
	},
	box_menu: {
		backgroundColor: '#FFB6A5',
		height: 312 * DP,
		borderRadius: 30 * DP,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 2,
	},
});

const txt = StyleSheet.create({
	noto24r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 36 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 24 * DP,
		lineHeight: 35 * DP,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
		lineHeight: 46 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
		lineHeight: 30 * DP,
	},
	gray: {
		color: '#767676',
	},
	pink: {
		color: '#FFB6A5',
	},
	white: {
		color: '#FFFFFF',
	},
});
