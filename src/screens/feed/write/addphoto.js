import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Platform,
	PermissionsAndroid,
	SafeAreaView,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	Image,
	Alert,
} from 'react-native';

import {CameraIconWhite, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from './camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';

const InnerComponent = props => {
	const [photos, setPhotos] = React.useState([{node: null}]);
	const loadPhotos = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'All',
		})
			.then(r => {
				setPhotos({photos: r.edges});
			})
			.catch(err => {});
	};
	React.useEffect(() => {
		props.tabVisible(false);
	}, []);

	React.useEffect(() => {
		if (Platform.OS === 'ios') {
			loadPhotos();
		} else {
			try {
				const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
				PermissionsAndroid.check(permission).then(isPermit => {
					if (isPermit) {
						loadPhotos();
					} else {
						PermissionsAndroid.request(permission).then(result => {
							console.log(result);
							if (result === 'granted') {
								loadPhotos();
							} else {
								alert('기기의 사진 접근권한을 허용해 주세요');
							}
						});
					}
				});
			} catch (err) {
				console.warn(err);
			}
		}
	}, []);

	const count = React.useRef({count: 0, cursor: 0, subscriber: []}).current;

	const [selected_uri, setUri] = React.useState(0);

	const uriList = React.useRef([]).current; //겔러리 속 사진들 로컬 주소

	const itemClick = (img_uri, toggleselect, fn) => () => {
		setUri(img_uri);
		if (toggleselect(count)) {
			uriList.push(img_uri.uri);
			count.subscriber.push(fn);
		} else {
			uriList.filter((v, i, a) => {
				if (v === img_uri.uri) {
					a.splice(i, 1);
				}
			});
			count.subscriber.filter((v, i, a) => {
				if (v === fn) {
					a.splice(i, 1);
				}
			});
			count.subscriber.forEach(v => {
				v(count.cursor);
			});
		}
		console.log(uriList);
	};

	return (
		<View style={lo.wrp_main}>
			<Image style={lo.box_img} source={selected_uri} />
			<View style={lo.box_title}>
				<Text style={txt.noto36r}>최근 항목</Text>
				<SvgWrapper style={{height: 12 * DP, width: 20 * DP, marginLeft: 14 * DP}} svg={<DownBracketBlack />} />
			</View>
			<ScrollView>
				<View style={lo.box_photolist}>
					<Photos isCamera/>
					{photos.photos?.map((p, i) => (
						<Photos key={i} source={{uri: p.node.image.uri}} onPress={itemClick} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

const Photos = props => {
	const [isSelect, select] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const number = React.useRef(0);
	const cursor = React.useRef(() => 'chrl');

	const toggleselect = total => {
		if (isSelect) {
			select(false);

			cursor.current = (v => () => {
				return v;
			})(number.current);
			total.cursor = cursor.current();
			total.count--;

			result = false;
		} else {
			select(true);
			total.count++;

			result = true;
		}
		number.current = total.count;
		setCount(total.count);
		return result;
	};

	const fn = React.useRef(recievecursor => {
		if (number.current >= recievecursor) {
			setCount(--number.current);
		}
	}).current;

	return (
		<TouchableWithoutFeedback onPress={!props.isCamera?props.onPress(props.source, toggleselect, fn):()=>{alert('촬영')}}>
			<View style={[photo.wrp_photo, {backgroundColor: '#EDEDED'}]}>
				{props.isCamera ? (
					<SvgWrapper style={{width: 70 * DP, height: 62 * DP}} svg={<CameraIconWhite />} />
				) : (
					<>
						<Image style={isSelect ? photo.img_selected : photo.size_img} source={props.source} />
						{isSelect && (
							<>
								<View style={photo.counter}>
									<Text style={[txt.roboto24r, txt.white]}>{count}</Text>
								</View>
								<View style={[photo.size_img, {backgroundColor: '#FFF', position: 'absolute', opacity: 0.4}]}></View>
							</>
						)}
					</>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

Photos.defaultProps = {
	isCamera: false,
	onPress:()=>{},
};

export default AddPhoto = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const photo = StyleSheet.create({
	wrp_photo: {
		height: 186 * DP,
		width: 186 * DP,
		marginBottom: 2 * DP,
		marginRight: 1.4 * DP,
		justifyContent: 'center',
		alignItems: 'center',
	},
	size_img: {
		height: 186 * DP,
		width: 186 * DP,
	},
	img_selected: {
		height: 182 * DP,
		width: 182 * DP,
		borderWidth: 4 * DP,
		borderColor: '#FFB6A5',
	},
	counter: {
		height: 44 * DP,
		width: 44 * DP,
		borderRadius: 22 * DP,
		backgroundColor: '#FFB6A5',
		position: 'absolute',
		right: 12 * DP,
		top: 12 * DP,
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_img: {
		height: 750 * DP,
		backgroundColor: 'gray',
	},
	box_title: {
		height: 102 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 48 * DP,
	},
	box_photolist: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		// justifyContent: 'space-between',
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
});

const btn = StyleSheet.create({
	size: {
		width: 198 * DP,
		height: 60 * DP,
	},
	btn_profile: {
		borderRadius: 30 * DP,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		// position: 'absolute',
		// zIndex: 150,
	},
	cntr_dropdown: {
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		marginTop: 40 * DP,
		justifyContent: 'space-between',
	},
	dropdown: {},
	profileButtonBracketsize: {
		height: 12 * DP,
		width: 20 * DP,
		marginLeft: 14 * DP,
	},
	box_menu: {
		backgroundColor: '#FFB6A5',
		height: 312 * DP,
		borderRadius: 30 * DP,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		elevation: 2,
	},
});

const txt = StyleSheet.create({
	noto24r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 36 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 24 * DP,
		lineHeight: 35 * DP,
	},
	noto28r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
	},
	noto36r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 36 * DP,
		lineHeight: 56 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
		lineHeight: 46 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
		lineHeight: 30 * DP,
	},
	gray: {
		color: '#767676',
	},
	pink: {
		color: '#FFB6A5',
	},
	white: {
		color: '#FFFFFF',
	},
});
