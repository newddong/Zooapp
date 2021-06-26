import React from 'react';

import WriteFeed from './writefeed';
import WriteHeader from './writeheader';
import AddPhoto from './addphoto';
import {createStackNavigator} from '@react-navigation/stack';
import CameraTest from './cameraroll';

const Stack = createStackNavigator();

export default WriteFeedRoute = () => {
	return (
		<Stack.Navigator initialRouteName="writeFeed" headerMode="screen"
         screenOptions={{
            header:(props)=>(<WriteHeader {...props}/>)
         }}
      >
			<Stack.Screen name="writeFeed" component={CameraTest} options={{headerTitle:'새 게시물'}}/>
			{/* <Stack.Screen name="writeFeed" component={WriteFeed} options={{headerTitle:'새 게시물'}}/> */}
			<Stack.Screen name="addPhoto" component={AddPhoto} options={{headerTitle:'새 게시물'}}/>

		</Stack.Navigator>
	);
};

 
