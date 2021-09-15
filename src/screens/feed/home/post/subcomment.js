import React from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import DP from 'Screens/dp';
import {HeartBtnIcon, HeartBtnFocusedIcon, MeIcon} from 'Asset/image';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {likeComment, dislikeComment, deleteComment} from '../../feedapi';

export default React.memo(
	SubComment = ({data, liked}) => {
		const nav = useNavigation();
		const svg_size = {width: '100%', height: '100%'};
		const moveToProfile = () => {
			nav.push('Profile', {user_id: data.user.nickname, user: data.user});
		};
		
		const [like, setLike] = React.useState({isLike: liked, count: data.like_count});
		const [isDeleted, setDelete] = React.useState(false);
		const setLikeComment = () => {
			if (!like.isLike) {
				likeComment(
					{
						comment_id: data._id,
					},
					() => {
						setLike({isLike: true, count: like.count + 1});
					},
				);
			} else {
				dislikeComment(
					{
						comment_id: data._id,
					},
					() => {
						setLike({isLike: false, count: like.count - 1});
					},
				);
			}
		};

		const requestDelete = () => {
			deleteComment({
				comment_id: data._id,
			}, () => {
				setDelete(true);
			});
		};

		return (
			!isDeleted &&<View style={commentStyle.cntr_comment}>
				<View
					style={{
						left: 0 * DP,
						top: -10 * DP,
						width: 14 * DP,
						height: 14 * DP,
						position: 'absolute',
						borderColor: '#767676',
						borderBottomWidth: 2 * DP,
						borderLeftWidth: 2 * DP,
					}}></View>
				{/* <View style={commentStyle.info_writer}> */}
				<TouchableWithoutFeedback onPress={moveToProfile}>
					<View style={commentStyle.img_user}>
						<FastImage
							style={commentStyle.img_user}
							source={{
								uri: data.user.profileImgUri,
							}}
						/>
						<View style={commentStyle.memark}>{data.me && <MeIcon {...svg_size} />}</View>
					</View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={moveToProfile}>
					<View style={commentStyle.grp_comment_info}>
						<Text style={[txt.roboto24r, txt.gray, {marginRight: 6 * DP}]}>{data.user.nickname}</Text>
						<Text style={[txt.noto24rcjk, txt.dimmergray]}>·</Text>
						<Text style={[txt.noto24rcjk, txt.dimmergray]}>{data.reg_date}</Text>
					</View>
				</TouchableWithoutFeedback>
				{/* </View> */}
				<Text style={[txt.noto24rcjk, txt.dimmergray]}>{data.comment}</Text>
				<View style={commentStyle.grp_reply_action}>
					<View style={commentStyle.grp_btn_action}>
						<TouchableWithoutFeedback onPress={setLikeComment}>
							<View style={commentStyle.icon_size}>{like.isLike ? <HeartBtnFocusedIcon {...svg_size} /> : <HeartBtnIcon {...svg_size} />}</View>
						</TouchableWithoutFeedback>
						<Text style={[txt.roboto24r, txt.dimmergray, {marginLeft: 6 * DP}]}>{like.count}</Text>
						<Text style={[txt.noto24rcjk, txt.dimmergray, {marginLeft: 20 * DP}]}>수정</Text>
						<TouchableWithoutFeedback onPress={requestDelete}>
							<Text style={[txt.noto24rcjk, txt.dimmergray, {marginLeft: 30 * DP}]}>삭제</Text>
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
		);
	}
);

SubComment.defaultProps = {
	liked: false,
};

const commentStyle = StyleSheet.create({
	header: {
		flexBasis: 76 * DP,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 48 * DP,
	},
	grp_txt: {
		flexDirection: 'row',
	},
	icon_size: {
		width: 22 * DP,
		height: 22 * DP,
	},
	cntr_scrl: {
		paddingHorizontal: 48 * DP,
		flex: 1,
	},
	cntr_comment: {
		marginBottom: 20 * DP,
		paddingLeft: 94 * DP,
	},
	info_writer: {
		flexDirection: 'row',
	},
	img_user: {
		width: 46 * DP,
		height: 46 * DP,
		borderRadius: 60 * DP,
		position: 'absolute',
		top: 0,
		left: 14 * DP,
	},
	memark: {
		width: 40 * DP,
		height: 27 * DP,
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	grp_comment_info: {
		flexBasis: 36 * DP,
		flexDirection: 'row',
		alignItems: 'center',
	},
	grp_reply_action: {
		marginTop: 6 * DP,
		flexBasis: 36 * DP,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	grp_btn_action: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	cntr_input: {
		backgroundColor: 'aquamarine',
		flexBasis: 136 * DP,
	},
	shadowEffect: {
		shadowColor: '#000000',
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		elevation: 4,
	},
	icon_size: {
		width: 30 * DP,
		height: 28 * DP,
	},
});

const txt = StyleSheet.create({
	noto24rcjk: {
		fontFamily: 'NotoSansKR-Regular',
		fontSize: 13,
		lineHeight: 36 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 16.5,
		lineHeight: 46 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 13,
		lineHeight: 35 * DP,
	},
	roboto24r: {
		fontFamily: 'Roboto-Regular',
		fontSize: 13,
		lineHeight: 30 * DP,
	},
	noto28b: {
		fontFamily: 'NotoSansKR-Bold',
		fontSize: 15.4,
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
