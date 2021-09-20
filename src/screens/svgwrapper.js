import React from 'react';

import {View, TouchableWithoutFeedback} from 'react-native';
import DP, {svg_size} from 'Screens/dp';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';

export default SvgWrapper = props => {
	return (
		<Animated.View style={props.style}>
			{props.svg
				? React.cloneElement(props.svg, {...svg_size})
				: React.Children.map(props.children, child => {
						return React.cloneElement(child, {...svg_size});
				  })}
		</Animated.View>
	);
};

export const SvgWrap = props => {
	const svgcomponent = () => (
		<View style={props.style}>
			{props.svg
				? React.cloneElement(props.svg, {...svg_size})
				: React.Children.map(props.children, child => {
						return React.cloneElement(child, {...svg_size});
				  })}
		</View>
	);
	
	const render = () => {
		if(props.hitboxStyle){
			return (<View style={props.hitboxStyle}>
				{svgcomponent()}
			</View>);
		}else{
			return svgcomponent();
		}
	}

	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			{render()}
		</TouchableWithoutFeedback>
	);
};

SvgWrapper.defaultProps = {
	style: {},
};

SvgWrap.defaultProps = {
	style: {},
	onPress: () => {},
};
