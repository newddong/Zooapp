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
import {BLACK, GRAY, GRAY_BRIGHT, GRAY_PLACEHOLDER, MAINCOLOR, SLIGHT_BLACK, LINK, WHITE, RED, GRAY_TXT_INPUT} from 'Screens/color';
import {CameraIconWhite, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from './camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';
import Photos from './photosingle';
import Video from 'react-native-video';

export const exportUri = React.createRef(); //겔러리 속 사진 로컬 주소

export default AddSinglePhoto = props => {
	return <TabContext.Consumer>{({tabVisible}) => <AddPhotoInner tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const AddPhotoInner = props => {
	const [photolist, setPhotoList] = React.useState([{node: null}]);
	const loadPhotos = () => {
		CameraRoll.getPhotos({
			first: 200,
			assetType: 'All',
			include: ['playableDuration'],
		})
			.then(r => {
				setPhotoList({photos: r.edges});
				// console.log(JSON.stringify(r));
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

	React.useEffect(() => {
		props.navigation.addListener('focus', () => {
			loadPhotos();
		});
	});

	const count = React.useRef({count: 0, cursor: 0, subscriber: []}).current;

	const [last_selected_uri, setLastSelectedUri] = React.useState('default');
	const [isVideo, setVideo] = React.useState(false);
	const selectedUri = React.useRef(); //겔러리 속 사진들 로컬 주소
	const lasttoggle = React.useRef(()=>{});

	const itemClick = (img_uri, isVideo, index, toggle) => () => {
		setVideo(isVideo);
		setLastSelectedUri(img_uri);
		selectedUri.current = img_uri;

      lasttoggle.current(index);
      toggle(index);
		lasttoggle.current = toggle;

		exportUri.current = selectedUri.current;
		console.log(selectedUri.current);
	};

	const clickcheck = () => {
		// props.navigation.navigate(props.route.params?.navfrom,{})
		props.navigation.navigate({name:props.route.params?.navfrom,params:{image:exportUri.current},merge:true});
	}

	return (
		<View style={lo.wrp_main}>
			{isVideo ? (
				<Video style={lo.box_img} source={{uri: last_selected_uri}} muted />
			) : (
				<Image style={lo.box_img} source={{uri: last_selected_uri}} />
			)}
			<View style={[lo.box_title]}>
				<View style={lo.box_item_myphone}>
				<Text style={txt.noto36r}>내 기기 항목</Text>
				<SvgWrapper style={{height: 12 * DP, width: 20 * DP, marginLeft: 14 * DP}} svg={<DownBracketBlack />} />
				</View>
				<TouchableWithoutFeedback onPress={clickcheck}>
					<View style={[btn.confirm_button, btn.shadow]}>
						<Text style={[txt.noto32b, txt.white]}>사진등록</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
			
			<ScrollView>
				<View style={lo.box_photolist}>
					<Photos isCamera navigation={props.navigation} />
					{photolist.photos?.map((p, i) => (
						<Photos key={i} data={p.node} onPress={itemClick} index={i} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

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
		justifyContent:'space-between',
		paddingHorizontal: 48 * DP,
	},
	box_item_myphone:{
		flexDirection: 'row',
		alignItems: 'center',
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
	confirm_button: {
		height: 70 * DP,
		width:120*DP,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30 * DP,
		backgroundColor: MAINCOLOR,
	},
	shadow: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 1,
			height: 2,
		},
		elevation: 2,
	},
})

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