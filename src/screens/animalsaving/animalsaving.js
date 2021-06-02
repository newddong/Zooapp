import React, {useState} from 'react';
import { StyleSheet, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle,withSpring } from 'react-native-reanimated';

export default function AnimalSaving() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: offset.value *100
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = withSpring(Math.random()))} title="Move" />
    </>
  );
}


const styles = StyleSheet.create({
   box:{
     width:40,
     height:40,
     backgroundColor:'blue'
   }
});

