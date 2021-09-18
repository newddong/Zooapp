import React from 'react';

import WriteFeed from './writefeed';
import WriteHeader from './writeheader';
import AddPhoto from 'Screens/camera/addphoto';
import AddSinglePhoto from 'Screens/camera/addphoto';
import PhotoTag from './photoTag';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from 'Screens/camera/camera';

const Stack = createStackNavigator();

export default WriteFeedRoute = () => {
	return (
		<Stack.Navigator initialRouteName="writeFeed" headerMode="screen"
         screenOptions={{
            header:(props)=>(<WriteHeader {...props}/>)
         }}
      >
			<Stack.Screen name="writeFeed" component={WriteFeed} options={{headerTitle:'새 게시물'}}/>
			{/* <Stack.Screen name="addPhoto" component={AddPhoto} options={{headerTitle:'사진선택'}}/> */}
			{/* <Stack.Screen name="AddSinglePhoto" component={AddSinglePhoto} options={{headerTitle:'단일 사진 선택'}}/> */}
			<Stack.Screen name="photoTag" component={PhotoTag} options={{headerTitle:'태그하기'}}/>
			<Stack.Screen name="camera" component={Camera} options={{headerTitle:'카메라'}}/>

		</Stack.Navigator>
	);
};

 
