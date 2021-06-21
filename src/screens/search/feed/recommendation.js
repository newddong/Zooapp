import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import FeedList from 'Screens/feed/profile/subcomponent/feedlist';
import profiledata from 'Screens/feed/profile/profiledata.json';

export default Recommendation = (props) => {


   return (
      <View style={{flex:1}}>
         <ScrollView>
            <FeedList  data={profiledata.profile.feeds}/>
         </ScrollView>
      </View>
   )


}