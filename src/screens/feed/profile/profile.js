import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

import {layout, text, button} from './style_profile';
import {DownBracketBlack} from 'Asset/image';

import BelongedPetList from './subcomponent/belongedPetList';
import SocialButton from './subcomponent/socialButton';
import ProfileInfo from './subcomponent/profileInfo';

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

import PhotoList from './subcomponent/photolist';
import VolunteerList from './subcomponent/volunteerList';

export default Profile = () => {
	const [tab, setTab] = useState(true);

	const [animal, setAnimal] = useState(false);
	const animallist = useSharedValue(0);

	const animalAni = useAnimatedStyle(() => {
		return {
			height: animallist.value * DP,
		};
	});

	const rotate = useSharedValue(0);
	const rotateAni = useAnimatedStyle(() => {
		return {
			transform: [{rotate: `${rotate.value}deg`}],
		};
	});

	const tabVal = useSharedValue(0);
	const tabAni = useAnimatedStyle(() => {
		return {
			height: tabVal.value * DP,
		};
	});

	return (
		<View style={layout.container}>
			<ProfileInfo />
			<SocialButton />
			
			
			<View style={[layout.profileButtonContainer]}>
				<ProfileBtn
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
							rotate.value = withTiming(0, {duration: 300});
						}
					}}
					rotateAni={rotateAni}
				/>
			</View>
			
			<Animated.View style={[animalAni]}>
			
				<BelongedPetList />
			</Animated.View>
			
			<View style={layout.tabarea}>
				<TabMenu
					onPress={() => {
						if (!tab) setTab(!tab);
						tabVal.value = withTiming(0);
					}}
					label="피드"
					selected={tab}
				/>
				<TabMenu
					onPress={() => {
						if (tab) setTab(!tab);
						tabVal.value = withTiming(402);
					}}
					label="보호활동"
					selected={!tab}
				/>
			</View>

			<Animated.View style={[layout.volunteeractivity, tabAni]}>
				<VolunteerList />
			</Animated.View>

			<PhotoList />
		</View>
	);
};

const TabMenu = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[layout.tabItem, props.selected ? layout.tabcolor : layout.white]}>
				<Text style={props.selected ? [text.bold28, text.white] : [text.regular28cjk, text.gray]}>
					{props.label}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const ProfileBtn = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={[button.profileButton, button.shadow]}>
				<Text style={text.regular24cjk}>반려 동물</Text>
				<SvgWrapper
					style={[button.profileButtonBracketsize, props.rotateAni]}
					svg={<DownBracketBlack />}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};
