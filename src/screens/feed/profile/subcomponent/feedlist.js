import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableWithoutFeedback, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {layout, text, button} from '../style_profile';

export default FeedList = ({data}) => {
	return (
		// <ScrollView style={layout.photoListContainer}>
		// 	<View style={layout.photoListPage}>
		// 		{data.map((e,i)=><FeedItem data={e} key={i}/>)}
		// 	</View>
		// </ScrollView>

		<FlatList 
			style={layout.photoListContainer}
			// contentContainerStyle={layout.photoListPage}
			data={data}
			horizontal={false}
			renderItem={({item,index})=>
				<FeedItem data={item}/>
			}
			numColumns={3}
			keyExtractor={item=>item._id}
		/>
	);
};

const FeedItem = ({data}) => {
	const navigation = useNavigation();
	const moveToPost = () => {	
		console.log(data);
		navigation.navigate('FeedPersonal',{user:data.user, user_id:data.user_id, post_id:data._id});
	}

	return (
		<TouchableWithoutFeedback onPress={moveToPost}>
			<Image
				source={{
					uri: data.images[0],
				}}
				style={layout.photoListItems}
			/>
		</TouchableWithoutFeedback>
	);
};
