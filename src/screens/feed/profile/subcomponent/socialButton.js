import React, {useState} from 'react';
import {Text, TextInput, View, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
} from '../../../../../asset/image';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {layoutstyles, buttonstyle, textstyles} from '../style_profile';
import DP from '../../../dp';

export default SocialButton = () => {
	const [followClick, setFollowClick] = useState(false);
	const followVal = useSharedValue(60);
	const followanimation = useAnimatedStyle(() => {
		return {
			height: followVal.value * DP,
		};
	});

	const rotate = useSharedValue(0);
	const rotateAni = useAnimatedStyle(()=>{
		return {
			transform:[{rotate:`${rotate.value}deg`}]
		};
	});

	const he = useDerivedValue(() => {
		return followVal.value * DP;
	}, [followVal]);

	const putButton = () => {
		if (!followClick) {
			console.log('click');
			setFollowClick(!followClick);
			followVal.value = withSpring(360);
			rotate.value = withSpring(180);
		} else {
			console.log('retrieve');
			setFollowClick(!followClick);
			followVal.value = withTiming(60, {duration: 300});
			rotate.value = withTiming(0,{duration:300});
		}
		console.log('val:' + followVal.value);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={putButton}>
				<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
					<Text style={textstyles.regular24cjk}>팔로우</Text>
					<Animated.View style={[buttonstyle.profileButtonBracketsize,rotateAni]}>
						<DownBracketBlack width="100%" height="100%" />
						{/* <UpBracketBlack width="100%" height="100%"/> */}
					</Animated.View>
				</View>
			</TouchableWithoutFeedback>
			<Animated.View style={[style.dropcontainer, followanimation]}>
				<LinearGradient
					start={{x: 0, y: 1}}
					end={{x: 1, y: 0}}
					colors={['#FFB6A5', '#FFE7A4']}
					style={[style.dropmenu, {height: '100%'}]}>
					{followClick && (
						<>
							<TouchableWithoutFeedback onPress={() => alert('즐겨찾기')}>
								<Animated.Text style={style.textstyle}>
									즐겨찾기 추가
								</Animated.Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('소식받기')}>
							<Animated.Text style={style.textstyle}>
									소식받기
								</Animated.Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('차단')}>
							<Animated.Text style={style.textstyle}>
									차단
								</Animated.Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('팔로우 취소')}>
							<Animated.Text style={style.textstyle}>
									팔로우 취소
								</Animated.Text>
							</TouchableWithoutFeedback>
						</>
					)}
				</LinearGradient>
			</Animated.View>
		</>
	);
};

const style = StyleSheet.create({
	dropcontainer: {
		width: 280 * DP,
		borderRadius: 30 * DP,
		position: 'absolute',
		zIndex: 1,
	},
	dropmenu: {
		width: 280 * DP,
		borderRadius: 30 * DP,
		justifyContent: 'flex-end',
		alignContent: 'center',
		flexWrap: 'wrap',
		alignItems: 'center',
		paddingBottom: 20*DP
	},
	textstyle:{
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.4,
		lineHeight: 38*DP,
		color:'#FFFFFF',
		marginBottom:20*DP,
	}
});
