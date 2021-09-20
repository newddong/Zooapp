import React from 'react';
import { FlatList } from 'react-native';
import {TouchableWithoutFeedback, View, Modal,Text} from 'react-native';
import DP from 'Screens/dp';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';

export default Dropdown = props => {
	const component = React.useRef();
	const dropcontainer = React.useRef();
	const [UI, setUI] = React.useState({
		x: 0,
		y: 0,
		height: 0,
		visible: false,
	});

	const open = () => {
		if (UI.visible) {
			setUI({...UI, visible: false});
		} else {
			component.current.measure((fx, fy, width, height, px, py) => {
				// console.log('Component width is: ' + width);
				// console.log('Component height is: ' + height);
				// console.log('X offset to frame: ' + fx);
				// console.log('Y offset to frame: ' + fy);
				// console.log('X offset to page: ' + px);
				// console.log('Y offset to page: ' + py);
				// setPosition({...position, drop: {x: px, y: py, height: height}});
				setUI({x: px, y: py, height: height, visible: true});
			});
		}
		props.onOpen && props.onOpen();
	};
	const close = () => {
		props.onClose && props.onClose();
		// setImmediate(setUI({...UI, visible: false}),500);
		if(props.animation){
			setTimeout(setUI,300,{...UI, visible: false});
		}
		else{
			setUI({...UI, visible: false});
		}
	};

	const onSeletItem = (data)=>{
		props.onSelect(data);
		!props.onSelectNotClose&&close();
	}
	const dropdownContainerStyle = Array.isArray(props.dropdownContainerStyle)?
				[...props.dropdownContainerStyle,{ borderTopWidth: 0 }]:
				{...props.dropdownContainerStyle, borderTopWidth: 0};

	const renderItem = (item) => {
		
		const render = props.renderItem?
			<TouchableWithoutFeedback onPress={onSeletItem}>{props.renderItem({item})}</TouchableWithoutFeedback>:
			<DropItem style={props.dropItemStyle} onChange={onSeletItem} data={item} textStyle={props.dropItemTxtStyle}/>;
		
		return (
			render
		);
	}


	const dropdownItems = () => {
		return (
			
			<FlatList
				data={props.data}
				// renderItem={
				// 	({item})=><View><Text>{item}</Text></View>
				// }
				contentContainerStyle={props.listContainerStyle}
				renderItem={({item})=>renderItem(item)}
				initialNumToRender={10}
				style={{flex:1}}
				windowSize={20}
				keyExtractor={item=>Math.random()}
			/>
			
		);
	}

	const dropdownBackground = () => {

		if(props.animation){
			return (
				<Animated.View style={dropdownContainerStyle}{ref=>dropcontainer.current=ref}>
					<Animated.View style={props.listBackgroundStyle}>
					{dropdownItems()}
					</Animated.View>
				</Animated.View>
			);
		}
		else{
			return (
				<View style={dropdownContainerStyle} ref={ref=>dropcontainer.current=ref}>
					<View style={props.listBackgroundStyle}>
					{dropdownItems()}
					</View>
				</View>
			);
		}
	}




	return (
		<>
			
			{/*dropdown menu*/}
			<Modal transparent visible={UI.visible}>
				<View style={{flex: 1}}>
					<TouchableWithoutFeedback onPress={close}>
						<View style={{height: UI.y + UI.height}}>
						</View>
					</TouchableWithoutFeedback>

					<View style={{flexDirection: 'row'}}>
						<TouchableWithoutFeedback onPress={close}>
							<View style={{width: UI.x}}></View>
						</TouchableWithoutFeedback>
							{dropdownBackground()}
						<TouchableWithoutFeedback onPress={close}>
							<View style={{flex: 1}}></View>
						</TouchableWithoutFeedback>
						
					</View>
					<TouchableWithoutFeedback onPress={close}>
						<View style={{flex: 1}}></View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={close}>
						<View style={[props.style,{position:'absolute',top:UI.y,left:UI.x,marginTop:0}]}>
							{props.component}
						</View>
					</TouchableWithoutFeedback>
				</View>
				
			</Modal>
			{/* {<TouchableWithoutFeedback onPress={open}>
				<View style={[props.style,UI.visible&&{opacity:0}]} ref={ref => (component.current = ref)}>
					{props.component}
				</View>
			</TouchableWithoutFeedback>} */}
			{!UI.visible?<TouchableWithoutFeedback onPress={open}>
				<View style={props.style} ref={ref => (component.current = ref)}>
					{props.component}
				</View>
			</TouchableWithoutFeedback>:
			<View style={props.style}></View>
			}
		</>
	);
};

Dropdown.defaultProps = {
	data:[],
	onSelect:()=>{},
	style:{},
	dropDownStyle:{},
	dropItemStyle:{},
	dropItemTxtStyle:{},
	dropdownContainerStyle:{},
	listContainerStyle:{},
}


export const DropItem = props => {
	const selectItem = (e) => {
		props.onChange(props.data)
	}
	return (
		<TouchableWithoutFeedback onPress={selectItem}>
			<View style={props.style}>
				<Text style={props.textStyle}>{props.data}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

DropItem.defaultProps = {
	onPress: () => {},
	style: {},
	data: '',
	textStyle:{},
};

