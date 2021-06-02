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
} from '../../../../../asset/image';

import BelongedPet from './belongedPet';
import SocialButton from './socialButton';

import DP from '../../../dp';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

export default BelongedPetList = () => {
	return (
		<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#FFB6A5', '#FFE7A4']}>
			<ScrollView
				horizontal
				style={[layoutstyles.petlist]}
				contentContainerStyle={{alignItems: 'center', justifyContent: 'space-evenly'}}>
				<BelongedPet
					source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					heart={true}
				/>
				<BelongedPet
					source={{
						uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
					}}
					heart={false}
				/>
			</ScrollView>
		</LinearGradient>
	);
};
