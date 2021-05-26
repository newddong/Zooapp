import React, {useState} from 'react';
import {
	Text,
	TextInput,
	View,
	Image,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from 'react-native';

import { layoutstyles } from './style_profile';

const Profile = () => {
	
	return (
		<View style={layoutstyles.container}>
         <View style={layoutstyles.header}>
            <Text>프로필</Text>

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
