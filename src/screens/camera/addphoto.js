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
import {TabContext} from 'tabContext';
import CameraRoll from '@react-native-community/cameraroll';
import {hasAndroidPermission} from './camerapermission';
import {requestPermission, reqeustCameraPermission} from 'permission';
import Photos from './photos';
import Video from 'react-native-video';

export const exportUriList = React.createRef([]); //겔러리 속 사진들 로컬 주소

export default AddPhoto = props => {
	return <TabContext.Consumer>{({tabVisible}) => <AddPhotoInner tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const AddPhotoInner = props => {
	const [photolist, setPhotoList] = React.useState([{node: null}]);
	const loadPhotos = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'All',
			include:['playableDuration']
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

	React.useEffect(()=>{
		props.navigation.addListener('focus',()=>{
			loadPhotos();
		});
	});

	const count = React.useRef({count: 0, cursor: 0, subscriber: []}).current;

	const [last_selected_uri, setLastSelectedUri] = React.useState('default');
	const [isVideo, setVideo] = React.useState(false);
	const uriList = React.useRef([]).current; //겔러리 속 사진들 로컬 주소
	
	const itemClick = (img_uri, toggleselect, refreshItemNum, isVideo) => () => {
		setVideo(isVideo);
		setLastSelectedUri(img_uri);

		if (toggleselect(count)) {
			uriList.push({uri:img_uri,isVideo:isVideo});
			count.subscriber.push(refreshItemNum);
		} else {
			uriList.filter((v, i, a) => {
				if (v.uri === img_uri) {
					a.splice(i, 1);
				}
			});
			count.subscriber.filter((v, i, a) => {
				if (v === refreshItemNum) {
					a.splice(i, 1);
				}
			});
			count.subscriber.forEach(refreshItemNum => {
				refreshItemNum(count.cursor);
			});
		}
		exportUriList.current = uriList;
		console.log(uriList);
	};

	return (
		<View style={lo.wrp_main}>
			{isVideo?<Video style={lo.box_img} source={{uri:last_selected_uri}} muted/>:
			<Image style={lo.box_img} source={{uri:last_selected_uri}} />
			}
			<View style={lo.box_title}>
				<Text style={txt.noto36r}>최근 항목</Text>
				<SvgWrapper style={{height: 12 * DP, width: 20 * DP, marginLeft: 14 * DP}} svg={<DownBracketBlack />} />
			</View>
			<ScrollView>
				<View style={lo.box_photolist}>
					<Photos isCamera navigation={props.navigation}/>
					{photolist.photos?.map((p, i) => (
						<Photos key={i} data={p.node} onPress={itemClick} />
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
