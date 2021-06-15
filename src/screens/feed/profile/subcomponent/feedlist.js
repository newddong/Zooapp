import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

import {layout, text, button} from '../style_profile';

export default FeedList = ({data}) => {
	return (
		<ScrollView style={layout.photoListContainer}>
			<View style={layout.photoListPage}>
				{data.map((e,i)=><FeedItem data={e}/>)}
			</View>
		</ScrollView>
	);
};

const FeedItem = ({data}) => {
	return (
		<TouchableWithoutFeedback onPress={() => alert('사진')}>
			<Image
				source={{
					uri: data.thumbnail,
				}}
				style={layout.photoListItems}
			/>
		</TouchableWithoutFeedback>
	);
};
