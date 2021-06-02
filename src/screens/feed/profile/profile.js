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

import {layoutstyles, textstyles, buttonstyle} from './style_profile';
import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
	UpBracketBlack,
} from '../../../../asset/image';

import BelongedPet from './subcomponent/belongedPet';
import BelongedPetList from './subcomponent/belongedPetList';
import SocialButton from './subcomponent/socialButton';
import ProfileInfo from './subcomponent/profileInfo';
import VolunteerItem from './subcomponent/volunteerItem';

import DP from '../../dp';

import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';

const Profile = () => {
	let testarr = new Array(100);
	const [tab, setTab] = useState(true);

	const [animal, setAnimal] = useState(false);
	const animallist = useSharedValue(0);

	const animalAni = useAnimatedStyle(() => {
		return {
			height: animallist.value * DP,
		};
	});

	const rotate = useSharedValue(0);
	const rotateAni = useAnimatedStyle(()=>{
		return {
			transform:[{rotate:`${rotate.value}deg`}]
		};
	});


	const tabVal = useSharedValue(0);
	const tabAni = useAnimatedStyle(() => {
		return {
			height: tabVal.value * DP,
		};
	});

	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.header}>
				<Text>heaade111r</Text>
			</View>

			<ProfileInfo />

			<View style={layoutstyles.profileButtonContainer}>
				<SocialButton />

				<TouchableWithoutFeedback
					onPress={() => {
						if (!animal) {
							console.log('clicked');
							setAnimal(!animal);
							animallist.value = withTiming(220);
							rotate.value = withSpring(180);
							
						} else {
							console.log('retrieved');
							setAnimal(!animal);
							animallist.value = withTiming(0);
							rotate.value = withTiming(0,{duration:300});
						}
					}}>
					<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
						<Text style={textstyles.regular24cjk}>반려 동물</Text>
						<Animated.View style={[buttonstyle.profileButtonBracketsize,rotateAni]}>
							<DownBracketBlack width="100%" height="100%" />
						</Animated.View>
					</View>
				</TouchableWithoutFeedback>
			</View>
			<Animated.View style={animalAni}>
				<BelongedPetList/>
			</Animated.View>

			<View style={layoutstyles.tabarea}>
				<TouchableWithoutFeedback
					onPress={() => {
						if (!tab) setTab(!tab);
						tabVal.value = withTiming(0);
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
						tabVal.value = withTiming(402);
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

			<Animated.View style={[layoutstyles.volunteeractivity, tabAni]}>
				<Text style={{top: 36 * DP, left: 48 * DP, position: 'absolute'}}>현재 보호/후원 현황</Text>
				<ScrollView
					horizontal
					contentContainerStyle={[layoutstyles.volunteerList,{justifyContent: 'space-evenly'}]}>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
					<VolunteerItem
						source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
					/>
				</ScrollView>
			</Animated.View>

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
							uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
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
				<View style={layoutstyles.photoListPage}>
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
