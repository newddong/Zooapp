import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Recommendation from './feed/recommendation';
import AidRequest from './aidrequest/aidrequest';
import HealthMovie from './healthmovie/healthmovie';

import SearchHeader from 'Screens/header/searchheader';

const Searchtab = createMaterialTopTabNavigator();
const SearchStack = createStackNavigator();

export default SearchRoute = () => {
	return (
      <SearchStack.Navigator initialRouteName='Search' headerMode='screen' screenOptions={{
         header:(props)=>(<SearchHeader {...props}/>)
      }}>
         <SearchStack.Screen name='Search' component={SearchTab}/>
      </SearchStack.Navigator>
		
	);
};

const SearchTab = ()=>{
   return (
      <Searchtab.Navigator initialRouteName='Feed' headerMode='screen'>
         <Searchtab.Screen name='Feed' component={Recommendation}/>
         <Searchtab.Screen name='AidRequest' component={AidRequest}/>
         <Searchtab.Screen name='HealthMovie' component={HealthMovie}/>

      </Searchtab.Navigator>
   );
}