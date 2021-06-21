import React from 'react';
import {View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
	useSharedValue,
	useDerivedValue,
	useAnimatedStyle,
	useAnimatedProps,
	withTiming,
	withSpring,
} from 'react-native-reanimated';
import DP from 'Screens/dp';

export default SearchTabBar = ({state, descriptors, navigation, position}) => {
	return (
		<View style={{flexDirection: 'row'}}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

            const test = useSharedValue(0);


				//   const inputRange = state.routes.map((_, i) => i);
				//   const opacity = Animated.interpolate(position, {
				//     inputRange,
				//     outputRange: inputRange.map(i => (i === index ? 1 : 0)),
				//   });
            
				return (
					<TouchableWithoutFeedback
						accessibilityRole="button"
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{flex: 1}} key={index}>
                  <Animated.View style={[tab.cntr_tab,{backgroundColor:isFocused?'#FFB6A5':'#fff'},tab.shadow]}>
						<Animated.Text style={[txt.noto30b,{color:isFocused?'#fff':'#767676'}]}>{label}</Animated.Text>
                  </Animated.View>
					</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};

const tab = StyleSheet.create({
   cntr_tab:{
      flex:1,
      height:70*DP,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
   },
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
})

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 13,
		lineHeight: 36*DP,
	},
	noto28rcjk: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15.5,
		lineHeight: 38*DP,
	},
	noto30b:{
		fontFamily:'NotoSansCJKkr-Bold',
		fontSize:30*DP,
		lineHeight:42*DP
	},
})