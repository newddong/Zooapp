import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView, TextInput, Keyboard, FlatList} from 'react-native';
import DP from 'Screens/dp';
import SvgWrapper,{SvgWrap} from 'Screens/svgwrapper';
import {BtnX, GliderIcon} from 'Asset/image';
import {LikeIcon, LikeUncheckedIcon, CommentIcon, CommentReplyIcon} from 'Asset/image';
import dummy from './comments.json';
import Comment from './comment';
import PostContents from './postcontents';
import {useKeyboardBottom} from './usekeyboardbottom';
import {TabContext} from 'tabContext';


export default CommentList = props => {
	const [UI, setUI] = React.useState({});
	const tab = React.useContext(TabContext);
	
	const keyboardY = useKeyboardBottom();
	React.useEffect(()=>{
		tab.tabVisible(false);
		const unsubscribe = props.navigation.addListener('blur', e => {
			tab.tabVisible(true);
			
		});
		return unsubscribe;
	},[])

	const writeComment = () => {

	};

	return (
		<View style={{flex: 1}}>
			<View style={layout.cntr_postContent}>
				<PostContents data={props.route.params.data} />
			</View>
			<View style={layout.cntr_commentList}>
				{/* <TouchableWithoutFeedback>
						<View style={layout.pop_margin}></View>
					</TouchableWithoutFeedback> */}
				<View style={layout.cntr_listheader}>
					<TouchableWithoutFeedback>
						<View style={{height: 80 * DP}}>
							<Text style={[txt.noto28, txt.gray, {lineHeight: 48 * DP}]}>댓글 더 보기</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={writeComment}>
						<View style={{height: 80 * DP}}>
							<Text style={[txt.noto28, txt.gray, {lineHeight: 48 * DP}]}>댓글 작성</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>

				<View style={layout.sctn_comment}>
					<FlatList
						data={dummy.data[0].comments}
						keyExtractor={({item,index})=>(Math.random())}
						renderItem={({item})=><Comment data={item}/>}
					/>
				</View>
				
			</View>
			<View style={{...writecomment.cntr_input, ...writecomment.shadow,bottom:keyboardY}}>
					<TextInput style={[txt.noto24r, txt.dimmergray, writecomment.form_input]} placeholder={'댓글 쓰기'}></TextInput>
					<View style={writecomment.btn_comit_comment}>
						<SvgWrap onPress={writeComment} svg={<GliderIcon fill="#FFB6A5" />} />
					</View>
			</View>
		</View>
	);
};

export const writecomment = StyleSheet.create({
	cntr_input: {
		// flexBasis: 136 * DP,
		height: 136 * DP,
		width: '100%',
		// bottom: 0,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		alignItems: 'center',
		position: 'absolute',
		// zIndex:100
	},
	btn_comit_comment: {
		width: 30 * DP,
		height: 28 * DP,
	},
	form_input: {
		width: 592 * DP,
		height: 80 * DP,
		borderWidth: 0 * DP,
		paddingLeft: 20 * DP,
		paddingVertical: 0 * DP,
		marginRight: 20 * DP,
		includeFontPadding: false,
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

export const layout = StyleSheet.create({
	cntr_postContent: {
		height: 330 * DP,
		width: '100%',
		paddingHorizontal: 48 * DP,
		paddingTop: 40 * DP,
		backgroundColor: '#fff',
		marginBottom: 2 * DP,
		// borderBottomWidth:2*DP,
		// borderColor:'#DBDBDB'
	},
	cntr_commentList: {
		flex:1
		// width: '100%',
		// backgroundColor: 'green',
		// opacity: 0.7,
	},
	cntr_listheader: {
		height: 100 * DP,
		backgroundColor: '#fff',
		flexDirection: 'row',
		paddingHorizontal: 48 * DP,
		paddingVertical: 28 * DP,
		justifyContent: 'space-between',
	},
	shadowEffect: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 8,
	},
	sctn_comment: {
		backgroundColor: '#FFF',
		paddingHorizontal: 48 * DP,
		flex: 1,
	},
});

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
		lineHeight: 36 * DP,
	},
	noto24r: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 24 * DP,
	},
	noto28: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 28 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 30 * DP,
		lineHeight: 46 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 24 * DP,
		lineHeight: 35 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 24 * DP,
		lineHeight: 30 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 28 * DP,
		lineHeight: 36 * DP,
	},
	link: {
		color: '#007EEC',
	},
	gray: {
		color: '#767676',
	},
	dimmergray: {
		color: '#999999',
	},
	white: {
		color: '#FFFFFF',
	},
});