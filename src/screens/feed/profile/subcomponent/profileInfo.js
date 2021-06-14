import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {text} from '../style_profile';
import {DownBracketGray} from 'Asset/image';

import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

export default ProfileInfo = props => {
	const [isMore, setMore] = useState(false);
	const ani = useSharedValue(0);

	const aniMore = useAnimatedStyle(()=>({
		height:ani.value*400*DP+80*DP,	
	}));

	const rotate = useAnimatedStyle(()=>({
		transform:[{rotate:`${(ani.value)*180}deg`}]
	}));

	


	const more = () => {
		if(isMore){

			ani.value=withTiming(0);
			setMore(false);
		}else{

			ani.value=withTiming(1);
			setMore(true);
		}

	}



	return (
		<View style={layout.profileContainer}>
			<View style={layout.profileContents}>
				<View style={layout.profileInfo}>
					<View style={layout.profilePhoto}>
						<Image
							source={{
								uri: 'https://images.mypetlife.co.kr/content/uploads/2019/09/09152937/blind-dog-2-1024x683.jpg',
							}}
							style={layout.profilePhoto}
						/>
					</View>
					<View style={layout.profileLogs}>
						<ProfileLogItem {...{number: 129, label: '업로드'}} onPress={() => alert('업로드')} />
						<ProfileLogItem {...{number: '1k', label: '팔로워'}} onPress={() => alert('팔로워')} />
						<ProfileLogItem {...{number: 250, label: '팔로잉'}} onPress={() => alert('팔로잉')} />
					</View>
				</View>
				<View style={layout.profileTextContainer}>
					<Animated.Text style={[layout.profileText,text.regular24cjk,aniMore]}>
						안녕하세요{'\n'}
						5살 구름이와 3살 하늘이랑 함께 살고 있어요! 5살 구름이와 3살 하늘이랑 함께 살고 있어요!
						5살 구름이와 3살 하늘이랑 함께 살고 있어요! 5살 구름이와 3살 하늘이랑 함께 살고 있어요!
						5살 구름이와 3살 하늘이랑 함께 살고 있어요! 5살 구름이와 3살 하늘이랑 함께 살고 있어요!
						5살 구름이와 3살 하늘이랑 함께 살고 있어요! 5살 구름이와 3살 하늘이랑 함께 살고 있어요!
					</Animated.Text>
					<TouchableWithoutFeedback>
						<View style={layout.profileTextMoreView}>
							<Text style={[text.regular24cjk, text.gray]}>더보기</Text>
							<SvgWrapper style={[button.profileTextMoreView,rotate]} svg={<DownBracketGray />} />
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		</View>
	);
};

const ProfileLogItem = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={layout.profileLogItem}>
				<Text style={[text.roboto30bold, text.aligncenter]}>{props.number}</Text>
				<Text style={[text.regular24cjk, text.aligncenter]}>{props.label}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const layout = StyleSheet.create({
	profileContainer: {
		alignItems: 'center',
		width: '100%',
		// height: 416*DP,
		backgroundColor: 'yellow',
	},
	profileContents: {
		width: '87%',
		// height: '100%',
		backgroundColor: 'gold',
	},
	profileInfo: {
		flexDirection: 'row',
		flexBasis: 160 * DP,
		// height: 160 * DP,
		marginTop: 6 * DP,
		backgroundColor: 'gray',
	},
	profilePhoto: {
		width: 160 * DP,
		height: 160 * DP,
		borderRadius: 160 * DP,
	},
	profileLogs: {
		marginTop: 58 * DP,
		marginLeft: 80 * DP,
		width: 366 * DP,
		height: 84 * DP,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	profileLogItem: {
		flexDirection: 'column',
		width: 82 * DP,
		height: 84 * DP,
	},
	profileTextContainer: {
		flexDirection: 'row',
		// height: 80 * DP,
		marginTop: 30 * DP,
		backgroundColor: 'cyan',
	},
	profileText: {
		width: 492 * DP,
		// height: 80 * DP,
	},
	profileTextMoreView: {
		height: 40 * DP,
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginLeft: 46 * DP,
	},
});

const button = StyleSheet.create({
	profileTextMoreView: {
		width: 10,
		height: 6,
		alignSelf: 'center',
		marginLeft: 4,
	},
});
