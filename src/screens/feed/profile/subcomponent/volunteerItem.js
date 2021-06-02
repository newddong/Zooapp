import React, {useState, useRef} from 'react';
import {
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
	Dimensions,
	SafeAreaView,
	TouchableWithoutFeedback,
	StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {layoutstyles, textstyles, buttonstyle} from '../style_profile';
import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
	UpBracketBlack,
	ShelterIcon,
	AnimalIcon,
} from '../../../../../asset/image';

import DP from '../../../dp';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

import WrappedText from 'react-native-wrapped-text';

export default VolunteerItem = ({source}) => {
	return (
		<View style={layoutstyles.volunteerItems}>
			<Image style={layoutstyles.volunteerPhoto} source={source}></Image>
			<View style={layoutstyles.volunteerIDtype}>
				{false ? (
					<ShelterIcon height="100%" width="100%" />
				) : (
					<AnimalIcon height="100%" width="100%" />
				)}
			</View>
			<WrappedText
				textStyle={[styles.notoSans28, textstyles.aligncenter]}
				rowWrapperStyle={{width: 178 * DP, height: 90 * DP,justifyContent:'center'}}>
				하이바이 보호소
			</WrappedText>
			<WrappedText
				textStyle={[styles.notoSans24, textstyles.aligncenter]}
				rowWrapperStyle={{width: 178 * DP, height: 90 * DP,justifyContent:'center'}}>
				인천광역시 남동구
			</WrappedText>
		</View>
	);
};

const styles = StyleSheet.create({
	notoSans28: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15,
		lineHeight: 38 *DP
	},
	notoSans24: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 12,
		lineHeight: 28 *DP
	},
});