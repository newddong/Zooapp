import React, {useState} from 'react';

import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
	Kakao,
	Naver,
	Instagram,
	Facebook,
	Xbutton,
	CheckedBtn,
	Bracket,
} from '../../../asset/image';

import { layoutstyles } from './style_feed';
import Profile from './profile/profile';

const Feed = () => {
	
	return (
		<Profile/>
	);
};

export default Feed;
