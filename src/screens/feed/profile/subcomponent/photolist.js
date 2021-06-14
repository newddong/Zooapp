import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

import {layout, text, button} from '../style_profile';




export default PhotoList = props => {
	return (
		<ScrollView style={layout.photoListContainer}>
			<View style={layout.photoListPage}>
				<TouchableWithoutFeedback onPress={() => alert('사진')}>
					<Image
						source={{
							uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg',
						}}
						style={layout.photoListItems}
					/>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => alert('사진')}>
					<Image
						source={{
							uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
						}}
						style={layout.photoListItems}
					/>
				</TouchableWithoutFeedback>
			</View>
		</ScrollView>
	);
};
