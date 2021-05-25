import React, {useState} from 'react';
import type {Node} from 'react';
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

import { layoutstyles } from './style_profile';

const Profile = () => {
	
	return (
		<View style={layoutstyles.container}>
         <View style={layoutstyles.header}>
            <Text>header</Text>

         </View>
         <View style={layoutstyles.profileContainer}>
            <Text>Profile</Text>

         </View>
         <View style={layoutstyles.photoListContainer}>
            <Text>Photos</Text>
         </View>


		</View>
	);
};

export default Profile;
