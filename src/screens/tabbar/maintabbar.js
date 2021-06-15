import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {
	FeedIcon,
	FeedIconFocused,
	MyprofileIcon,
	MyprofileIconFocused,
	AnimalSavingIcon,
	AnimalSavingIconFocused,
	MovieIcon,
	MovieIconFocused,
} from 'Asset/image';

export default function MainTabBar({state, descriptors, navigation}) {
	const focusedOptions = descriptors[state.routes[state.index].key].options;
   const icons = [<FeedIcon/>,<MovieIcon/>,<AnimalSavingIcon/>,<MyprofileIcon/>];
   const iconsFocused = [<FeedIconFocused/>,<MovieIconFocused/>,<AnimalSavingIconFocused/>,<MyprofileIconFocused/>];
	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<>
         <Shadow/>
			<View style={tab.wrap_main}>
				{state.routes.map((route, index) => {
					const {options} = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

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

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? {selected: true} : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
                     key={index}
						>
                     <View style={{alignItems:'center',marginTop:20*DP}}>
							<SvgWrapper style={{height:58*DP,width:58*DP}} svg={isFocused?iconsFocused[index]:icons[index]} />
                     {/* {React.cloneElement(options.tabBarIcon,{style:{height:58*DP,width:58*DP}})} */}
							<Text style={[{color: isFocused ? '#FFB6A5' : '#767676'}, txt.noto24r]}>{label}</Text>
                     </View>
						</TouchableOpacity>
					);
				})}
			</View>
		</>
	);
}

const tab = StyleSheet.create({
	wrap_main: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		backgroundColor: '#FFF',
		height: 140 * DP,
	},
});

const txt = StyleSheet.create({
	noto24r: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 24 * DP,
		lineHeight: 36 * DP,
	},
});

const Shadow = () => (
	<>
		<View
			style={{
				position: 'absolute',
				width: '100%',
				height: 146 * DP,
				backgroundColor: '#767676',
				bottom: 0,
				opacity: 0.03,
			}}></View>
		<View
			style={{
				position: 'absolute',
				width: '100%',
				height: 143 * DP,
				backgroundColor: '#767676',
				bottom: 0,
				opacity: 0.1,
			}}></View>
	</>
);
