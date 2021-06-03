import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';

import { text } from '../style_profile';
import {
	DownBracketGray,
} from '../../../../../asset/image';

import DP from '../../../dp';

export default ProfileInfo = () => {
	return (
		<View style={layout.profileContainer}>
			<View style={layout.profileContents}>
				<View style={layout.profileInfo}>
					<View style={layout.profilePhoto}>
						<Image
							source={{
								uri: 'https://images.mypetlife.co.kr/content/uploads/2019/09/09152937/blind-dog-2-1024x683.jpg',
							}}
							style={layout.profilePhoto}
						/>
					</View>
					<View style={layout.profileLogs}>
						<View style={layout.profileLogItem}>
							<Text style={[text.roboto30bold, text.aligncenter]}>129</Text>
							<Text style={[text.regular24cjk, text.aligncenter]}>업로드</Text>
						</View>
						<View style={layout.profileLogItem}>
							<Text style={[text.roboto30bold, text.aligncenter]}>1k</Text>
							<Text style={[text.regular24cjk, text.aligncenter]}>팔로워</Text>
						</View>
						<View style={layout.profileLogItem}>
							<Text style={[text.roboto30bold, text.aligncenter]}>250</Text>
							<Text style={[text.regular24cjk, text.aligncenter]}>팔로잉</Text>
						</View>
					</View>
				</View>
				<View style={layout.profileTextContainer}>
					<Text style={[layout.profileText, text.regular24cjk]}>
						안녕하세요{'\n'}
						5살 구름이와 3살 하늘이랑 함께 살고 있어요!
					</Text>
					<View style={layout.profileTextMoreView}>
						<Text style={[text.regular24cjk, text.gray]}>더보기</Text>
						<View style={button.profileTextMoreView}>
							<DownBracketGray width="100%" height="100%" />
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const layout = StyleSheet.create({
	profileContainer: {
		alignItems: 'center',
		width: '100%',
		// height: 416*DP,
		// backgroundColor: 'yellow',
	},
	profileContents: {
		width: '87%',
		// height: '100%',
		// backgroundColor: 'gray',
	},
	profileInfo: {
		flexDirection: 'row',
		height: 160 * DP,
		// backgroundColor: 'blue',
		marginTop: 6 * DP,
	},
	profilePhoto: {
		width: 160 * DP,
		height: 160 * DP,
		borderRadius: 160 * DP,
		// backgroundColor: 'red',
	},
	profileLogs: {
		marginTop: 58 * DP,
		marginLeft: 80 * DP,
		width: 366 * DP,
		height: 84 * DP,
		// backgroundColor: 'yellow',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	profileLogItem: {
		flexDirection: 'column',
		width: 82 * DP,
		height: 84 * DP,
		// backgroundColor: 'green',
	},
	profileTextContainer: {
		flexDirection: 'row',
		height: 80 * DP,
		// backgroundColor: 'green',
		marginTop: 30 * DP,
	},
	profileText: {
		width: 492 * DP,
		height: 80 * DP,
		// backgroundColor: 'purple',
	},
	profileTextMoreView: {
		height: 40 * DP,
		// backgroundColor: 'red',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginLeft: 46 * DP,
	},
});

const button = StyleSheet.create({
	profileTextMoreView: {
		width: 10,
		height: 6,
		alignSelf: 'center',
		marginLeft: 4,
	},
});