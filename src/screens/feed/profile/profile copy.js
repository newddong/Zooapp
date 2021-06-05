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
	UIManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {layoutstyles, textstyles, buttonstyle} from './style_profile';
import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
	UpBracketBlack,
} from 'Asset/image';

import BelongedPet from './subcomponent/belongedPet';

import DP from 'Screens/dp';

import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Profile = () => {
	let testarr = new Array(100);
	const [tab, setTab] = useState(true);

	const followVal = useSharedValue(60);
	const followanimation = useAnimatedStyle(() => {
		return {
			height: followVal.value * DP,
		};
	});
	const textani = useAnimatedStyle(()=>{
		return {
			height: (followVal.value) *DP,
		}
	});

	const rotateVal = useSharedValue(0);
	const rotateAni = useAnimatedStyle(() => {
		return {
			transform: [{rotate: `${rotateVal.value}deg`}],
		};
	});
	
	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.header}>
				<Text>heaade111r</Text>
			</View>
			<View style={layoutstyles.profileContainer}>
				<View style={layoutstyles.profileContents}>
					<View style={layoutstyles.profileInfo}>
						<View style={layoutstyles.profilePhoto}>
							<Image
								source={{
									uri: 'https://lh3.googleusercontent.com/proxy/D3qDtDq27hbgp5f2_hWOnWEks2PPJuT7jQ1AR3BZERROJxUeyj7DeBvPbxrQQE3AEDxJMKXSyMaFuBqByqzlG2mEZGIXtiEDS3xayO81RGmhoLbuK0g',
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
					<View style={layoutstyles.profileButtonContainer}>
						<TouchableWithoutFeedback
							onPress={() => {
								if (followVal.value === 60) {
									console.log('click');
									followVal.value = withSpring(360);
									rotateVal.value = withSpring(180);
								} else {
									console.log('retrieve');
									followVal.value = withTiming(60);
									rotateVal.value = withSpring(0);
								}
								console.log('val:' + followVal.value);
							}}>
							<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
								<Text style={textstyles.regular24cjk}>팔로우</Text>
								<Animated.View style={[buttonstyle.profileButtonBracketsize, rotateAni]}>
									<DownBracketBlack width="100%" height="100%" />
									{/* <UpBracketBlack width="100%" height="100%"/> */}
								</Animated.View>
							</View>
							
						</TouchableWithoutFeedback>
						<Animated.View style={[buttonstyle.profileButtonDrop, followanimation]}>
							<LinearGradient
								start={{x: 0, y: 1}}
								end={{x: 1, y: 0}}
								colors={['#FFB6A5', '#FFE7A4']}
								style={[buttonstyle.profileButtonDrop, {height: '100%'}]}>
								<TouchableWithoutFeedback onPress={() => alert('즐겨찾기')}>
									<Animated.Text style={[textstyles.regular28cjk,textani]}>즐겨찾기 추가</Animated.Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={() => alert('소식받기')}>
								<Animated.Text style={[textstyles.regular28cjk,textani]}>소식받기</Animated.Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={() => alert('차단')}>
								<Animated.Text style={[textstyles.regular28cjk,textani]}>차단</Animated.Text>
								</TouchableWithoutFeedback>
								<TouchableWithoutFeedback onPress={(e) => alert('팔로우 취소')}>
								<Animated.Text style={[textstyles.regular28cjk,textani]}>팔로우 취소</Animated.Text>
								</TouchableWithoutFeedback>
							</LinearGradient>
						</Animated.View>

						<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
							<Text style={textstyles.regular24cjk}>반려 동물</Text>
							<View style={buttonstyle.profileButtonBracketsize}>
								<DownBracketBlack width="100%" height="100%" />
							</View>
						</View>
					</View>
				</View>
			</View>
			{true && (
				<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#FFB6A5', '#FFE7A4']}>
					<ScrollView
						horizontal
						style={layoutstyles.petlist}
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
			)}
			<View style={layoutstyles.tabarea}>
				<TouchableWithoutFeedback
					onPress={() => {
						if (!tab) setTab(!tab);
					}}>
					<View style={[layoutstyles.tabItem, tab ? layoutstyles.tabcolor : layoutstyles.white]}>
						<Text
							style={
								tab
									? [textstyles.bold28, textstyles.white]
									: [textstyles.regular28cjk, textstyles.gray]
							}>
							피드
						</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback
					onPress={() => {
						if (tab) setTab(!tab);
					}}>
					<View style={[layoutstyles.tabItem, !tab ? layoutstyles.tabcolor : layoutstyles.white]}>
						<Text
							style={
								!tab
									? [textstyles.bold28, textstyles.white]
									: [textstyles.regular28cjk, textstyles.gray]
							}>
							보호활동
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>

			<View style={layoutstyles.volunteeractivity}></View>

			<ScrollView style={layoutstyles.photoListContainer}>
				<View style={layoutstyles.photoListPage}>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
					<Image
						source={{
							uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
						}}
						style={layoutstyles.photoListItems}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Profile;
