import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableHighlight, StyleSheet} from 'react-native';

import {DownBracketBlack} from 'Asset/image';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {button, text} from '../style_profile';
import DP from 'Screens/dp';
import svgwrapper from 'Root/screens/svgwrapper';

export default SocialButton = props => {
	const [followClick, setFollowClick] = useState(false);
	const followVal = useSharedValue(60);
	const followanimation1 = useAnimatedStyle(() => {
		return {
			height: `${(followVal.value / 360) * 100 + 10}%`,
		};
	});
	const followanimation2 = useAnimatedStyle(() => {
		return {
			height: followVal.value * DP,
		};
	});

	const rotate = useSharedValue(0);
	const rotateAni = useAnimatedStyle(() => {
		return {
			transform: [{rotate: `${rotate.value}deg`}],
		};
	});

	const putButton = () => {
		if (!followClick) {
			console.log('click s');
			followVal.value = withSpring(360);
			rotate.value = withSpring(180);
			setFollowClick(true);
		} else {
			closing();
		}
		console.log('val:' + followVal.value);
	};

	const closing = () => {
		console.log('retrieve s');
		followVal.value = withTiming(60, {duration: 300});
		rotate.value = withTiming(0, {duration: 300});
		setFollowClick(false);
	};
	return (
		<>
			<Animated.View
				style={[btn.background, !followClick ? [btn.size,btn.btn_position] : btn.size_open]}
				onStartShouldSetResponder={() => true}
				onMoveShouldSetResponder={() => false}
				onMoveShouldSetResponderCapture={() => false}
				onResponderGrant={closing}
			/>
			<Animated.View style={[{backgroundColor:'red',position:'absolute',zIndex:100},btn.size,btn.btn_position,props.style]}>
				<Animated.View
					style={[btn.cntr_dropdown, btn.shadow, followanimation2]}
					onStartShouldSetResponder={() => true}
					onMoveShouldSetResponder={() => false}
					onMoveShouldSetResponderCapture={() => false}>
					<LinearGradient
						start={{x: 0, y: 1}}
						end={{x: 1, y: 0}}
						colors={['#FFB6A5', '#FFE7A4']}
						style={[btn.dropmenu]}>
						{followClick && (
							<>
								<TouchableWithoutFeedback onPress={() => alert('즐겨찾기')}>
									<Text style={btn.textstyle}>즐겨찾기 추가</Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={() => alert('소식받기')}>
									<Text style={btn.textstyle}>소식받기</Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={() => alert('차단')}>
									<Text style={btn.textstyle}>차단</Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={() => alert('팔로우 취소')}>
									<Text style={btn.textstyle}>팔로우 취소</Text>
								</TouchableWithoutFeedback>
							</>
						)}
					</LinearGradient>
				</Animated.View>

				<TouchableWithoutFeedback onPress={putButton}>
					<Animated.View style={[btn.size,btn.btn_profile, btn.shadow]}>
						<Text style={text.regular24cjk}>팔로우</Text>
						<SvgWrapper
							style={[button.profileButtonBracketsize, rotateAni]}
							svg={<DownBracketBlack />}
						/>
					</Animated.View>
				</TouchableWithoutFeedback>
			</Animated.View>
		</>
	);
};

const btn = StyleSheet.create({
	background: {
		position: 'absolute',
		backgroundColor: 'green',
		opacity: 0.2,
		zIndex: 100,
	},
	size: {
		width: 280 * DP,
		height: 60 * DP,
	},
	size_open: {
		height: '100%',
		width: '100%',
	},
	btn_position: {
		top: 316 * DP,
		left: 74 * DP,
	},
	btn_profile: {
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 150,
	},
	cntr_dropdown: {
		// width: 280 * DP,
		borderRadius: 30 * DP,
		position: 'absolute',
		zIndex: 120,
	},
	dropmenu: {
		width: 280 * DP,
		height: '100%',
		borderRadius: 30 * DP,
		justifyContent: 'flex-end',
		alignContent: 'center',
		flexWrap: 'wrap',
		alignItems: 'center',
		paddingBottom: 20 * DP,
	},
	textstyle: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.4,
		lineHeight: 38 * DP,
		color: '#FFFFFF',
		marginBottom: 20 * DP,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 4,
	},
});
