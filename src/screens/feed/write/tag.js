import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Image, Animated, PanResponder} from 'react-native';

import {DeleteImage} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {txt} from 'Root/screens/textstyle';
import {useNavigation, useRoute} from '@react-navigation/native';

export default Tag = ({pos, user, content, onDelete}) => {
	const [position, setPosition] = React.useState({x: pos.x, y: pos.y, opacity: 0});

	React.useEffect(() => {
		setPosition({...position, x: pos.x, y: pos.y});
	}, [pos.x, pos.y]);

	const WIDTH = 750 * DP;
	const HEIGHT = 750 * DP;

	const onLayout = e => {
		let layout = e.nativeEvent.layout;
		let x = 0;
		let y = 0;
		let left = true;
		let top = true;
		if (pos.x + layout.width > WIDTH) {
			console.log('true');
			x = pos.x - layout.width;
			left = false;
		} else {
			x = pos.x;
			left = true;
		}
		if (pos.y + layout.height > HEIGHT) {
			console.log('true');
			y = pos.y - layout.height;
			top = false;
		} else {
			y = pos.y;
			top = true;
		}
		setPosition({x: x, y: y, opacity: 1, top: top, left: left});
	};
	const border = () => {
		if (position.left) {
			return position.top ? tag.upleft : tag.botleft;
		} else {
			return position.top ? tag.upright : tag.botright;
		}
	};

	

	const deleteTag = () => {
		onDelete(user);
	};

	const tagMove = e => {
		console.log('tagmove     ' + JSON.stringify(e.nativeEvent));
	};

   const pan = React.useRef(new Animated.ValueXY()).current;
	const panresponder = React.useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				pan.setOffset({
					x: pan.x._value,
					y: pan.y._value,
				});
			},
			onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}],{listener:(e,g)=>{console.log(e.nativeEvent)},useNativeDriver:false}),
			onPanResponderRelease: () => {
				pan.flattenOffset();
            // Animated.spring(
            //    pan,
            //    {toValue:{x:0,y:0}}
            // ).start();
			},
		})
	).current;
   
   // const style = [tag.background, {top: position.y, left: position.x, opacity: position.opacity}, border()];
	return (
      <Animated.View style={{transform:[{translateX:pan.x},{translateY:pan.y}]}} {...panresponder.panHandlers}>
      <View style={[tag.background, {top: position.y, left: position.x, opacity: position.opacity}, border()]} onLayout={onLayout} >
				<Text style={[txt.roboto28, txt.white]}>{user.nickname}</Text>
				<SvgWrap style={tag.delete} svg={<DeleteImage />} onPress={deleteTag} />
			</View>
   </Animated.View>
	);
};

const tag = StyleSheet.create({
	background: {
		height: 52 * DP,
		paddingHorizontal: 30 * DP,
		backgroundColor: '#0006',
		borderRadius: 30 * DP,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	upleft: {
		borderTopLeftRadius: 0,
	},
	upright: {
		borderTopRightRadius: 0,
	},
	botleft: {
		borderBottomLeftRadius: 0,
	},
	botright: {
		borderBottomRightRadius: 0,
	},
	delete: {
		width: 36 * DP,
		height: 36 * DP,
		marginLeft: 10 * DP,
	},
});
