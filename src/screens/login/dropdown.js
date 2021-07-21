import React from 'react';
import { FlatList } from 'react-native';
import {TouchableWithoutFeedback, View, Modal,Text} from 'react-native';
import DP from 'Screens/dp';

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
		// setVisible(true);
	};
	const close = () => {
		setUI({...UI, visible: false});
	};

	const onSeletItem = (data)=>{
		props.onSelect(data);
		close();
	}

	return (
		<>
			<TouchableWithoutFeedback onPress={open}>
				<View style={props.style} ref={ref => (component.current = ref)}>
					{props.component}
				</View>
			</TouchableWithoutFeedback>
			{/*dropdown menu*/}
			<Modal transparent visible={UI.visible}>
				<View style={{flex: 1}}>
					<TouchableWithoutFeedback onPress={close}>
						<View style={{height: UI.y + UI.height}}></View>
					</TouchableWithoutFeedback>

					<View style={{flexDirection: 'row'}}>
						<TouchableWithoutFeedback onPress={close}>
							<View style={{width: UI.x}}></View>
						</TouchableWithoutFeedback>
						<View
							style={[
								...props.dropdownContainerStyle,
								{
									// backgroundColor: 'cyan',

									// opacity: 0.5,
									// justifyContent: 'flex-start',
									// position:'absolute',
									borderTopWidth: 0,
									// top: UI.y,
									// left: UI.x,
									// marginTop: UI.height,
								},
							]}
							ref={ref => {
								dropcontainer.current = ref;
							}}>
							{/* {props.data.map((v,i)=>
								<DropItem key={i} style={props.dropItemStyle} onChange={onSeletItem} data={v} />
							)} */}
							<FlatList
								data={props.data}
								// renderItem={
								// 	({item})=><View><Text>{item}</Text></View>
								// }
								renderItem={
									({item})=><DropItem style={props.dropItemStyle} onChange={onSeletItem} data={item} textStyle={props.dropItemTxtStyle}/>
								}
								initialNumToRender={10}
								style={props.dropDownStyle}
								windowSize={20}
								keyExtractor={item=>Math.random()}
							/>
						</View>
						<TouchableWithoutFeedback onPress={close}>
							<View style={{flex: 1}}></View>
						</TouchableWithoutFeedback>
					</View>
					<TouchableWithoutFeedback onPress={close}>
						<View style={{flex: 1}}></View>
					</TouchableWithoutFeedback>
				</View>
			</Modal>
		</>
	);
};

Dropdown.defaultProps = {
	data:[],
	onSelect:()=>{},
	dropDownStyle:{},
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

