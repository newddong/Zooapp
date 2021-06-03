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
import BelongedPetList from './belongedPetList';
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

export default ProfileInfo = () => {
	return (
		<View style={layoutstyles.profileContainer}>
			<View style={layoutstyles.profileContents}>
				<View style={layoutstyles.profileInfo}>
					<View style={layoutstyles.profilePhoto}>
						<Image
							source={{
								uri: 'https://images.mypetlife.co.kr/content/uploads/2019/09/09152937/blind-dog-2-1024x683.jpg',
							}}
							style={layoutstyles.profilePhoto}
						/>
					</View>
					<View style={layoutstyles.profileLogs}>
						<View style={layoutstyles.profileLogItem}>
							<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>129</Text>
							<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>업로드</Text>
						</View>
						<View style={layoutstyles.profileLogItem}>
							<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>1k</Text>
							<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>팔로워</Text>
						</View>
						<View style={layoutstyles.profileLogItem}>
							<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>250</Text>
							<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>팔로잉</Text>
						</View>
					</View>
				</View>
				<View style={layoutstyles.profileTextContainer}>
					<Text style={[layoutstyles.profileText, textstyles.regular24cjk]}>
						안녕하세요{'\n'}
						5살 구름이와 3살 하늘이랑 함께 살고 있어요!
					</Text>
					<View style={layoutstyles.profileTextMoreView}>
						<Text style={[textstyles.regular24cjk, textstyles.gray]}>더보기</Text>
						<View style={buttonstyle.profileTextMoreView}>
							<DownBracketGray width="100%" height="100%" />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};
