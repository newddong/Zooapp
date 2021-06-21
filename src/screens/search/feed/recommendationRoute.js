import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Recommendation from './recommendation';


import DP from 'Screens/dp';

const Tab = createMaterialTopTabNavigator();
const SearchStack = createStackNavigator();

export default RecommendationRoute = () => {
	return (
      <Tab.Navigator initialRouteName='recommend' tabBarOptions={{
         activeTintColor:'#FFB6A5',
         inactiveTintColor:'#767676',
         tabStyle:{
            height:68*DP,
         },
         labelStyle:[{
            height:60*DP,
         },txt.noto28rcjk],
         indicatorStyle:{
            backgroundColor:'#FFB6A5',
            paddingHorizontal:48*DP,
         },
      }}
      >
         <Tab.Screen name='recommend' component={Recommendation} options={{tabBarLabel:'추천'}}/>
         <Tab.Screen name='profiles' component={Recommendation} options={{tabBarLabel:'계정'}}/>
         <Tab.Screen name='tags' component={Recommendation} options={{tabBarLabel:'테그'}}/>
         <Tab.Screen name='diary' component={Recommendation} options={{tabBarLabel:'임보일기'}}/>

      </Tab.Navigator>
		
	);
};

const Label = ({focused, color,children})=>{
   return (
      <Text style={[focused?txt.noto28b:txt.noto28rcjk]}>{children}</Text>
   )
}

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 24*DP,
		lineHeight: 36*DP,
	},
	noto28rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 28*DP,
		lineHeight: 38*DP,
	},
   noto28b:{
		fontFamily:'NotoSansCJKkr-Bold',
		fontSize:30*DP,
		lineHeight:38*DP
	},
	noto30b:{
		fontFamily:'NotoSansCJKkr-Bold',
		fontSize:30*DP,
		lineHeight:42*DP
	},
})