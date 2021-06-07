import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';
import DP from 'Screens/dp';
import {
	HeartBtnIcon,
	MeIcon,
} from 'Asset/image';


export default Comments = () => {
	const svg_size = {width: '100%', height: '100%'};

	return (
		<View style={pop_comment.cntr_comment}>
			<View style={pop_comment.img_user}>
				<Image
					style={pop_comment.img_user}
					source={{
						uri: 'https://blog.kakaocdn.net/dn/bvkdnK/btqD2u3oK3k/kx1ZSi2qwPgfe8DyFlhv30/img.jpg',
					}}
				/>
				<View style={pop_comment.memark}>
					<MeIcon {...svg_size} />
				</View>
			</View>
			<View style={pop_comment.grp_comment_info}>
				<Text style={[txt.roboto24r, txt.gray, {marginRight: 6 * DP}]}>aaasq45_</Text>
				<Text style={[txt.noto24rcjk, txt.dimmergray]}>·</Text>
				<Text style={[txt.noto24rcjk, txt.dimmergray]}>1일 전</Text>
			</View>
			<Text style={txt.noto24rcjk}>
				근데 이렇게 설명해주는거 너무 좋음 병원이 멀어서 애기 몸에 이상 생길 때마다 걱정이었는데,
				이렇게 명확하게 알려줘서 너무 좋음....ㅎㅎ
			</Text>
			<View style={pop_comment.grp_reply_action}>
				<Text style={[txt.noto24rcjk, txt.dimmergray]}>답글2개 보기</Text>

				<View style={pop_comment.grp_btn_action}>
					<View style={pop_comment.icon_size}>
						<HeartBtnIcon {...svg_size} />
					</View>
					<Text style={[txt.roboto24r, txt.dimmergray, {marginLeft: 6 * DP}]}>12</Text>
					<Text style={[txt.noto24rcjk, txt.dimmergray, {marginLeft: 20 * DP}]}>수정</Text>
					<Text style={[txt.noto24rcjk, txt.dimmergray, {marginLeft: 30 * DP}]}>삭제</Text>
				</View>
			</View>
		</View>
	);
};

export const pop_comment = StyleSheet.create({
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
		marginTop: 40 * DP,
		paddingLeft: 80 * DP,
	},
	img_user: {
		width: 60 * DP,
		height: 60 * DP,
		borderRadius: 60 * DP,
		position: 'absolute',
		top: 0,
		left: 0,
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
		justifyContent: 'space-between',
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
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 13,
		lineHeight: 36 * DP,
	},
	noto30b: {
		fontFamily: 'NotoSansCJKkr-Bold',
		fontSize: 16.5,
		lineHeight: 46 * DP,
	},
	noto24b: {
		fontFamily: 'NotoSansCJKkr-Bold',
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
