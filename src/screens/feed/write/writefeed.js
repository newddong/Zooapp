import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text, TextInput, Image, TouchableWithoutFeedback} from 'react-native';

import {CameraIcon, LocationPinIcon, PawIcon, DownBracketBlack, DownBracketGray} from 'Asset/image';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import Animated, {useSharedValue, useDerivedValue, useAnimatedStyle, useAnimatedProps, withTiming, withSpring} from 'react-native-reanimated';
import {TabContext} from 'tabContext';
import {TextPropTypes} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import BtnCancel from './btn_cancel.svg';
// import { txt } from '../home/post/style_post';

export const InnerComponent = ({tabVisible, navigation, route}) => {
	const [images,setImages] = React.useState([]);
	

	const editData = route.params?.editData;
	const isFocused = useIsFocused();
	const [data, setData] = React.useState({images:[],content:''});


	React.useEffect(()=>{
		let selectPhotos = route.params.images?.map(v=>v.uri);
		if(editData){
			// setImages(editData.images);
			setData({images:editData.images.concat(selectPhotos),content:editData.content})
		}else{
			// setImages(route.params.images.map(v=>v.uri));
			setData({images:selectPhotos,content:''});
		}
	},[route.params])
	
	React.useEffect(() => {
		if (isFocused) {
			tabVisible(false);
		}
		return () => {
			tabVisible(true);
		};
	}, [isFocused]);


	const textInput = React.useRef();


	const [btnPublicClick, setBtnPublicClick] = React.useState(false);

	const cancel_select = (uri, cancel) => () => {
		setData({
			...data, images:data.images.filter((v,i,a)=>{
				return v!==uri;
			})
		})
	};

	const input = React.useRef();
	const [search, setSearch] = React.useState(false);
	const textinput = e => {
		let lastchar = e.nativeEvent.text.charAt(e.nativeEvent.eventCount - 1);
		switch (lastchar) {
			case '@':
				setSearch(true);
				console.log(input.current);
				break;
			case '#':
				setSearch(true);
				break;
		}
	};

	const textChange = e => {
		console.log('텍스트 변경'+JSON.stringify(route.params));
		// navigation.setParams({...route.params, content: e.nativeEvent.text});
		setData({...data,content:e.nativeEvent.text});
	};


	//move to other pages
	const moveToPhotoSelect = () => {
		navigation.push('AddPhoto',{navfrom:'writeFeed'});
	}
	const moveToCamera = () => {
		navigation.push('camera');
	}

	const moveToTag = () => {
		navigation.push('photoTag');
	}



	//Animation Setting
	const btnPublic = useSharedValue(60);
	const btnPublicAni = useAnimatedStyle(() => {
		return {
			height: btnPublic.value * DP,
		};
	});
	const clickbtnPublic = () => {
		if (btnPublicClick) {
			setBtnPublicClick(false);
			btnPublic.value = withTiming(60);
		} else {
			setBtnPublicClick(true);
			btnPublic.value = withSpring(312);
		}
		console.log(route.params?.images);
	};
	const rotate = useAnimatedStyle(() => {
		return {transform: [{rotate: `${(180 * (btnPublic.value - 60)) / 252}deg`}]};
	});
	//end Animation Setting

	return (
		<View style={lo.wrp_main}>
			<TouchableWithoutFeedback onPress={()=>{textInput.current.focus()}}>
				<View style={lo.box_txtinput}>
					{/* <TextInput style={lo.input_txt} placeholder="내용 입력..." onChange={textChange} multiline ref={(ref)=>input.current=ref} value={route.params?.content}></TextInput> */}
					<FormTxtInput
						onChange={textChange}
						multiline
						value={data.content}
						inputStyle={lo.input_txt}
						placeholder={'내용 입력...'}
						placeholderTextColor={'#767676'}
						ref={textInput}></FormTxtInput>
				</View>
			</TouchableWithoutFeedback>
			{!search ? (
				<View style={[lo.wrp_box, lo.shadow]}>
					<View style={lo.box_btn}>
						<TouchableWithoutFeedback
							onPress={moveToPhotoSelect}>
							<View style={lo.box_actionbtn}>
								<SvgWrapper style={{width: 62 * DP, height: 56 * DP, marginRight: 10 * DP}} svg={<CameraIcon />} />
								<Text style={[txt.noto24r, txt.pink]}>사진추가</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={moveToCamera}>
							<View style={lo.box_actionbtn}>
								<SvgWrapper style={{width: 46 * DP, height: 56 * DP, marginRight: 10 * DP}} svg={<LocationPinIcon />} />
								<Text style={[txt.noto24r, txt.pink]}>위치추가</Text>
							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={moveToTag}>
							<View style={lo.box_actionbtn}>
								<SvgWrapper style={{width: 54 * DP, height: 48 * DP, marginRight: 10 * DP}} svg={<PawIcon fill="#FFB6A5" />} />
								<Text style={[txt.noto24r, txt.pink]}>태그하기</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>

					<View style={{marginTop: 40 * DP, paddingLeft: 48 * DP}}>
						<ScrollView horizontal>
							{data.images?.map((v, i) => (
								<SelectedPhoto source={v} key={i} onPress={cancel_select} />
							))}
						</ScrollView>
					</View>

					<View style={btn.cntr_dropdown}>
						<View style={btn.dropdown}>
							<View style={[btn.size, {...btn.btn_profile, backgroundColor: '#FFB6A5'}, btn.shadow]}>
								<Text style={[txt.noto24b, txt.white]}>임보일기</Text>
							</View>
						</View>
						<View style={btn.dropdown}>
							<View style={[btn.size, btn.btn_profile, btn.shadow]}>
								<Text style={[txt.noto24r, txt.gray]}>댓글기능중지</Text>
							</View>
						</View>
						<View style={btn.dropdown}>
							<Animated.View style={[{...btn.size, ...btn.box_menu}, btn.shadow, btnPublicAni]}>
								{btnPublicClick && (
									<>
										<Text style={[txt.noto28r, txt.white, {marginTop: 60 * DP}]}>전체공개</Text>
										<Text style={[txt.noto28r, txt.white]}>팔로워공개</Text>
										<Text style={[txt.noto28r, txt.white]}>비공개</Text>
									</>
								)}
							</Animated.View>
							<TouchableWithoutFeedback onPress={clickbtnPublic}>
								<View style={[btn.size, btn.btn_profile, btn.shadow, {position: 'absolute'}]}>
									<Text style={[txt.noto24r, txt.gray]}>공개설정</Text>
									<SvgWrapper style={[btn.profileButtonBracketsize, rotate]} svg={<DownBracketGray />} />
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
			) : (
				<SearchList />
			)}
		</View>
	);
};

const SearchList = props => {
	return (
		<View style={[lo.wrp_box, lo.shadow]}>
			<ScrollView contentContainerStyle={{paddingTop: 10 * DP}}>
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
				<SearchItem />
			</ScrollView>
		</View>
	);
};

const SearchItem = props => {
	return (
		<View style={search.wrap_item}>
			<View style={search.box_info}>
				<Image style={search.img_thumb} source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}></Image>
				<View style={search.box_useinfo}>
					<Text style={[txt.noto28b, txt.gray]}>dog_kim</Text>
					<Text style={[txt.noto24r, txt.gray]}>까꿍이</Text>
				</View>
			</View>
			<View style={search.box_status}>
				<Text style={[txt.noto24r, txt.gray]}>팔로우중</Text>
			</View>
		</View>
	);
};

const SelectedPhoto = props => {
	const [isCancel, setCancel] = React.useState(false);
	const cancel = () => {
		setCancel(false);
	};
	return (
		!isCancel && (
			<View style={selected.wrp_image}>
				<Image style={selected.image} source={{uri: props.source}} />
				<TouchableWithoutFeedback style={selected.btn_cancel} onPress={props.onPress(props.source, cancel)}>
					<View style={[selected.btn_cancel, selected.shadow]}>
						<SvgWrapper style={{width: 36 * DP, height: 36 * DP}} svg={<BtnCancel fill="#fff" />} />
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	);
};

export default WriteFeed = props => {
	return <TabContext.Consumer>{({tabVisible}) => <InnerComponent tabVisible={tabVisible} {...props} />}</TabContext.Consumer>;
};

const selected = StyleSheet.create({
	wrp_image: {
		marginRight: 30 * DP,
	},
	image: {
		width: 190 * DP,
		height: 190 * DP,
		borderRadius: 30 * DP,
	},
	btn_cancel: {
		width: 36 * DP,
		height: 36 * DP,
		top: 6 * DP,
		right: 6 * DP,
		position: 'absolute',
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

const lo = StyleSheet.create({
	wrp_main: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	box_txtinput: {
		height: 300 * DP,
		paddingHorizontal: 48 * DP,
		paddingTop: 40 * DP,
		backgroundColor: '#FFF',
	},
	input_txt: {
		paddingVertical: 0,
		borderWidth: 0,
		includeFontPadding: false,
	},
	wrp_box: {
		flex: 1,
		backgroundColor: '#fff',
	},
	box_btn: {
		marginTop: 40 * DP,
		flexDirection: 'row',
		backgroundColor: '#fff',
		justifyContent: 'space-around',
	},
	box_actionbtn: {
		flexDirection: 'row',
		height: 56 * DP,
		alignItems: 'center',
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
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 42 * DP,
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

const search = StyleSheet.create({
	wrap_item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
		marginVertical: 20 * DP,
	},

	img_thumb: {
		width: 76 * DP,
		height: 76 * DP,
		borderRadius: 38 * DP,
		marginRight: 20 * DP,
	},
	box_info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	box_useinfo: {},
	box_status: {},
});
