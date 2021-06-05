import React, {useState, useRef} from 'react';
import {
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
	Dimensions,
	SafeAreaView,
	TouchableWithoutFeedback,
	StatusBar,
	StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MeatballIcon, LikeIcon, CommentIcon, CommentReplyIcon} from 'Asset/image';
import DP from 'Screens/dp';
import {layoutstyles, userinfo, textstyles, userinteraction} from '../style_home';

export default Post = () => {
	const nav = useNavigation();
	return (
		<View style={layoutstyles.mainContainer}>
			<ScrollView style={layoutstyles.contentsScroll}>
				<View style={layoutstyles.contentsContainer}>
					<View style={layoutstyles.userinfoContainer}>
						<TouchableWithoutFeedback onPress={() => nav.push('Profile')}>
							<Image
								style={userinfo.photo}
								source={{
									uri: 'https://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg',
								}}
							/>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={() => nav.push('Profile')}>
							<View style={userinfo.infoContainer}>
								<Text style={textstyles.bold28}>my_zoodoongi</Text>
								<Text style={[textstyles.regular24cjk, textstyles.gray]}>서울시 성동구에서</Text>
							</View>
						</TouchableWithoutFeedback>
						<View style={userinfo.meatBallMenu}>
							<MeatballIcon width="100%" height="100%" />
						</View>
					</View>

					<View style={layoutstyles.textContainer}>
						<Text style={[textstyles.regular28cjk, textstyles.gray]}>
							우리 <Text style={{color: '#007EEC'}}>#둥이</Text> 는 언제나{' '}
							<Text style={{color: '#007EEC'}}>#창가</Text> 에 앉아있기를 좋아하는거같다. 다른
							강아지들은 높은곳을 무서워한다는데...
						</Text>
						<Text style={[textstyles.regular24cjk, textstyles.gray]}>2시간전</Text>
					</View>

					<View style={layoutstyles.photoContainer}>
						<ScrollView horizontal>
							<Image
								style={layoutstyles.photo}
								source={{
									uri: 'https://flexible.img.hani.co.kr/flexible/normal/930/620/imgdb/original/2019/1120/20191120501989.jpg',
								}}
							/>
							<Image
								style={layoutstyles.photo}
								source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
							/>
							<Image
								style={layoutstyles.photo}
								source={{
									uri: 'https://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg',
								}}
							/>
							<Image
								style={layoutstyles.photo}
								source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
							/>
							<Image
								style={layoutstyles.photo}
								source={{
									uri: 'https://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg',
								}}
							/>
						</ScrollView>
					</View>

					<View style={layoutstyles.userInteractionContainer}>
						<View style={userinteraction.buttonContainer}>
							<Text style={[textstyles.regular28cjk, textstyles.gray]}>댓글 모두 보기</Text>
							<View style={userinteraction.infoContainer}>
								<View style={userinteraction.iconContainer}>
									<LikeIcon width="100%" height="100%" />
								</View>
								<Text style={textstyles.roboto24r}>109</Text>
								<View style={userinteraction.iconContainer}>
									<CommentIcon width="100%" height="100%" />
								</View>
								<Text style={textstyles.roboto24r}>60</Text>
							</View>
						</View>
						<View style={userinteraction.commentContainer}>
							<View style={userinteraction.comment}>
								<Text style={[textstyles.roboto24r, textstyles.gray, userinteraction.userId]}>
									SUBIN_S
								</Text>
								<Text style={[textstyles.regular24cjk, {flex: 1}]}>
									아아악 너무 귀요워용! 넘 평화로운게 느껴지...
								</Text>
							</View>
							<View style={[userinteraction.comment, userinteraction.reply]}>
								<View style={userinteraction.replyicon}>
									<CommentReplyIcon width="100%" height="100%" />
								</View>
								<Text style={[textstyles.roboto24r, textstyles.gray, userinteraction.userId]}>
									my_zoodoongi
								</Text>
								<Text style={[textstyles.regular24cjk, {flex: 1}]}>감사해요^^*</Text>
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.gray, userinteraction.viewAll]}>
								더보기
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
