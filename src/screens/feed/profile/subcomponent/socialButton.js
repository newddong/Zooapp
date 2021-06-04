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

export default SocialButton = (props) => {
	const [followClick, setFollowClick] = useState(false);
	const followVal = useSharedValue(60);
	const followanimation1 = useAnimatedStyle(() => {
		return {
			height: `${followVal.value/360*100+10}%`,
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
			setFollowClick(!followClick);
		} else {
			console.log('retrieve s');
			followVal.value = withTiming(60, {duration: 300});
			rotate.value = withTiming(0, {duration: 300});
			setFollowClick(!followClick);
		}
		console.log('val:' + followVal.value);
	};

	const closing =()=>{

		console.log('retrieve s');
			followVal.value = withTiming(60, {duration: 300});
			rotate.value = withTiming(0, {duration: 300});
			setFollowClick(!followClick);
	}

	return (
		// <TouchableWithoutFeedback onPress={closing}>
		<Animated.View style={[{...props.style},socialbtn.container,!followClick?[socialbtn.btnPosition,{height:60*DP,width:280*DP}]:{height:'100%',width:'100%'}]}
			onStartShouldSetResponder={()=>true}
			onMoveShouldSetResponder={()=>false}
			onMoveShouldSetResponderCapture={()=>false}
			onResponderGrant={closing}
		>
			<TouchableWithoutFeedback onPress={putButton}>
				
					
					<View style={[socialbtn.profileButton, followClick?socialbtn.btnPosition:{}, button.shadow]}>
						<Text style={text.regular24cjk}>팔로우</Text>
						<Animated.View style={[button.profileButtonBracketsize, rotateAni]}>
							<DownBracketBlack width="100%" height="100%" />
				
						</Animated.View>
					</View>
					
				
			</TouchableWithoutFeedback>
			<Animated.View style={[socialbtn.dropcontainer,followClick?socialbtn.btnPosition:{}, followanimation2]}
				onStartShouldSetResponder={()=>true}
				onMoveShouldSetResponder={()=>false}
				onMoveShouldSetResponderCapture={()=>false}
			>
						<LinearGradient
					start={{x: 0, y: 1}}
					end={{x: 1, y: 0}}
					colors={['#FFB6A5', '#FFE7A4']}
					style={[socialbtn.dropmenu, {height: '100%'}]}>
					{followClick && (
						<>
							<TouchableWithoutFeedback onPress={() => alert('즐겨찾기')}>
								<Text style={socialbtn.textstyle}>
									즐겨찾기 추가
								</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('소식받기')}>
							<Text style={socialbtn.textstyle}>
									소식받기
								</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('차단')}>
							<Text style={socialbtn.textstyle}>
									차단
								</Text>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => alert('팔로우 취소')}>
							<Text style={socialbtn.textstyle}>
									팔로우 취소
								</Text>
							</TouchableWithoutFeedback>
						</>
					)}
				</LinearGradient>
			</Animated.View>
			
		</Animated.View>
		// </TouchableWithoutFeedback>
	);
};

const socialbtn = StyleSheet.create({
	container:{
		// backgroundColor: 'blue',
		position: 'absolute',
		zIndex: 100
	},
	btnPosition:{
		top:316*DP,
		left:74*DP,
	},
	profileButton: {
		width: 280 * DP,
		height: 60 * DP,
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position:'absolute',
		zIndex:3
	},
	dropcontainer: {
		width: 280 * DP,
		borderRadius: 30 * DP,
		position: 'absolute',
		// backgroundColor: 'yellow',
		justifyContent: 'flex-end',
		alignItems: 'center',
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
		// backgroundColor:'yellow'
	},
	textstyle: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.4,
		lineHeight: 38 * DP,
		color: '#FFFFFF',
		marginBottom: 20 * DP,
	},
});
