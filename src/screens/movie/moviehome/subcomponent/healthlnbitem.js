import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {txt} from '../style_moviehome';
import DP from 'Screens/dp';


export default HealthLnbItem = (props) => {
	const iconsize = {width: props.width, height: props.height};
	props.children[0].props = iconsize;
	props.children[1].props = iconsize;

	const [isClick, setClick] = useState(false);
	const init = useRef();
	init.current = props.init;

   const click = (e) => {
      
		console.log(init.current);
      
   }
	// useEffect(()=>{
	// 	setClick(init.current);
	// },[])
	

	return (
		<TouchableWithoutFeedback onPress={props.onPress(setClick,isClick,init.current)}>
			<View style={lnb.wrp_item} >
				<View style={lnb.cntr_icon}>
					{isClick?props.children[1]:props.children[0]}
				</View>
				<Text style={[lnb.cntr_txt, txt.noto24rcjk,txt.gray]}>{props.label}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};


HealthLnbItem.defaultProps = {
	onPress : ()=>(evt)=>console.log('함수할당안됨'),
	init: false
};


const lnb = StyleSheet.create({
	wrp_item: {
		// backgroundColor: 'yellow',
		width: 140 * DP,
		marginHorizontal: 9 * DP,
	},
	cntr_icon: {
		height: 140 * DP,
		// backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
	},
	cntr_txt: {
		height: 36 * DP,
		// backgroundColor: 'rosybrown',
		textAlign: 'center',
	},
});
