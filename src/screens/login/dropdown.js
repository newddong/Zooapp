import React from 'react';
import {TouchableWithoutFeedback, View, Modal} from 'react-native';


const testArr = [];

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

	const onSeletItem = ()=>{


	}

	return (
		<>
			<TouchableWithoutFeedback onPress={open}>
				<View style={props.style} ref={ref => (component.current = ref)}>
					{props.component}
				</View>
				{/* <View style={{backgroundColor: 'yellow', width: 100 * DP, height: 30 * DP}} ref={ref => (component.current = ref)}></View> */}
			</TouchableWithoutFeedback>
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
							{props.children}
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

export const DropItem = props => {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={props.style}></View>
		</TouchableWithoutFeedback>
	);
};

DropItem.defaultProps = {
	onPress: () => {},
	style: {},
};
