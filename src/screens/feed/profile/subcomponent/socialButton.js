import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback, TouchableHighlight, StyleSheet} from 'react-native';

import {DownBracketBlack} from '../../../../../asset/image';

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
import DP from '../../../dp';

export default SocialButton = () => {
	const [followClick, setFollowClick] = useState(false);
	const followVal = useSharedValue(60);
	const followanimation = useAnimatedStyle(() => {
		return {
			height: followVal.value * DP,
			// transform: [{rotate: `${followVal.value*0.1}deg`}]
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
			setFollowClick(!followClick);
			followVal.value = withSpring(360);
			rotate.value = withSpring(180);
		} else {
			console.log('retrieve s');
			setFollowClick(!followClick);
			followVal.value = withTiming(60, {duration: 300});
			rotate.value = withTiming(0, {duration: 300});
		}
		console.log('val:' + followVal.value);
	};

	return (
		<View>
			<TouchableWithoutFeedback onPress={putButton}>
				{/* <View style={{width:'100%',height:60*DP,backgroundColor:'gray'}}> */}
					
					<View style={[style.profileButton, button.shadow]}>
						<Text style={text.regular24cjk}>팔로우</Text>
						<Animated.View style={[button.profileButtonBracketsize, rotateAni]}>
							<DownBracketBlack width="100%" height="100%" />
							{/* <UpBracketBlack width="100%" height="100%"/> */}
						</Animated.View>
					</View>
					
				{/* </View> */}
			</TouchableWithoutFeedback>
			<Animated.View style={[style.dropcontainer, followanimation]} onS>
						<View style={{width: 30, height: 30, backgroundColor: 'yellow'}}>
							<TouchableWithoutFeedback
								onPress={() => {
									alert('그린');
								}}>
								<View style={{width: '100%', height: '100%', backgroundColor: 'green'}}></View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{width: 30, height: 30, backgroundColor: 'yellow'}}>
							<TouchableWithoutFeedback
								onPress={() => {
									alert('노랑');
								}}>
								<View style={{width: '100%', height: '100%', backgroundColor: 'yellow'}}></View>
							</TouchableWithoutFeedback>
						</View>
						<View style={{width: 30, height: 30, backgroundColor: 'yellow'}}>
							<TouchableWithoutFeedback
								onPress={() => {
									alert('즐겨찾기');
									followVal.value = withTiming(60, {duration: 300});
									rotate.value = withTiming(0, {duration: 300});
									setFollowClick(!followClick);
								}}>
								<View style={{width: '100%', height: '100%', backgroundColor: 'blue'}}></View>
							</TouchableWithoutFeedback>
						</View>
			</Animated.View>
			{/* <Animated.View style={[style.dropcontainer, followanimation]}>
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
			</Animated.View> */}
		</View>
	);
};

const style = StyleSheet.create({
	profileButton: {
		width: 280 * DP,
		height: 60 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex:3
	},
	dropcontainer: {
		width: 280 * DP,
		borderRadius: 30 * DP,
		position: 'absolute',
		backgroundColor: 'red',
		justifyContent: 'flex-end',
		alignItems: 'center',
		top:10*DP,
		zIndex:2
	},
	dropmenu: {
		width: 280 * DP,
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
});
