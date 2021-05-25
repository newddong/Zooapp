import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/screens/login/login';
import Profile from './src/screens/profile/profile';

const App: () => Node = () => {
  
  
  
  return (
    
    <Profile/>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
