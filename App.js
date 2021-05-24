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

const App: () => Node = () => {
  
  
  
  return (
    
    <Login/>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
