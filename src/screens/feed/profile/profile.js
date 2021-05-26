import React, {useState} from 'react';
import {Text, TextInput, View, Image, ScrollView, Dimensions, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {layoutstyles, textstyles, buttonstyle} from './style_profile';
import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
} from '../../../../asset/image';


const Profile = () => {
	let testarr = new Array(100);
   const [tab , setTab] = useState(true);

	return (
		<View style={layoutstyles.container}>
			<View style={layoutstyles.header}>
				<Text>heaader</Text>
			</View>
			<View style={layoutstyles.profileContainer}>
				<View style={layoutstyles.profileContents}>
					<View style={layoutstyles.profileInfo}>
						<View style={layoutstyles.profilePhoto}>
							<Image
								source={{
									uri: 'https://lh3.googleusercontent.com/proxy/D3qDtDq27hbgp5f2_hWOnWEks2PPJuT7jQ1AR3BZERROJxUeyj7DeBvPbxrQQE3AEDxJMKXSyMaFuBqByqzlG2mEZGIXtiEDS3xayO81RGmhoLbuK0g',
								}}
								style={layoutstyles.profilePhoto}
							/>
						</View>
						<View style={layoutstyles.profileLogs}>
							<View style={layoutstyles.profileLogItem}>
								<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>129</Text>
								<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>업로드</Text>
							</View>
							<View style={layoutstyles.profileLogItem}>
								<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>1k</Text>
								<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>팔로워</Text>
							</View>
							<View style={layoutstyles.profileLogItem}>
								<Text style={[textstyles.roboto30bold, textstyles.aligncenter]}>250</Text>
								<Text style={[textstyles.regular24cjk, textstyles.aligncenter]}>팔로잉</Text>
							</View>
						</View>
					</View>
					<View style={layoutstyles.profileTextContainer}>
						<Text style={[layoutstyles.profileText, textstyles.regular24cjk]}>
							안녕하세요{'\n'}
							5살 구름이와 3살 하늘이랑 함께 살고 있어요!
						</Text>
						<View style={layoutstyles.profileTextMoreView}>
							<Text style={[textstyles.regular24cjk, textstyles.gray]}>더보기</Text>
							<View style={buttonstyle.profileTextMoreView}>
								<DownBracketGray width="100%" height="100%" />
							</View>
						</View>
					</View>
					<View style={layoutstyles.profileButtonContainer}>
						<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
							<Text style={textstyles.regular24cjk}>팔로우</Text>
							<View style={buttonstyle.profileButtonBracketsize}>
								<DownBracketBlack width="100%" height="100%" />
							</View>
							{/* <View style={buttonstyle.profileButtonDrop}></View> */}
						</View>
						{false && (
							<LinearGradient
								start={{x: 0, y: 1}}
								end={{x: 1, y: 0}}
								colors={['#FFB6A5', '#FFE7A4']}
								style={buttonstyle.profileButtonDrop}>
								<Text>1</Text>
								<Text>2</Text>
								<Text>3</Text>
								<Text>4</Text>
							</LinearGradient>
						)}
						<View style={[buttonstyle.profileButton, buttonstyle.shadow]}>
							<Text style={textstyles.regular24cjk}>반려 동물</Text>
							<View style={buttonstyle.profileButtonBracketsize}>
								<DownBracketBlack width="100%" height="100%" />
							</View>
						</View>
					</View>
				</View>
			</View>
			{true && (
				<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#FFB6A5', '#FFE7A4']}>
					<ScrollView
						horizontal
						style={layoutstyles.petlist}
						contentContainerStyle={{alignItems: 'center', justifyContent: 'space-evenly'}}>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartEmptyIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{
									uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
								}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartEmptyIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{
									uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
								}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartEmptyIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
						<View style={layoutstyles.petItems}>
							<Image
								style={layoutstyles.petItemPhoto}
								source={{
									uri: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_327/7ae22985-90e8-44c3-a1d6-ee470ddc9073.jpg',
								}}></Image>
							<View style={layoutstyles.petItemHeart}>
								<HeartIcon width="100%" height="100%" />
							</View>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
							<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
						</View>
					</ScrollView>
				</LinearGradient>
			)}
			<View style={layoutstyles.tabarea}>
            <TouchableWithoutFeedback onPress={()=>{if(!tab)setTab(!tab)}}>
					<View style={[layoutstyles.tabItem, tab ? layoutstyles.tabcolor : layoutstyles.white]}>
						<Text
							style={tab ? [textstyles.bold28, textstyles.white] : [textstyles.regular28cjk, textstyles.gray]}>
							피드
						</Text>
					</View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{if(tab)setTab(!tab)}}>
					<View style={[layoutstyles.tabItem, !tab ? layoutstyles.tabcolor : layoutstyles.white]}>
						<Text
							style={!tab ? [textstyles.bold28, textstyles.white] : [textstyles.regular28cjk, textstyles.gray]}>
							보호활동
						</Text>
					</View>
            </TouchableWithoutFeedback>
			</View>

			<View style={layoutstyles.photoListContainer}>
				<Text>{Dimensions.get('screen').height}</Text>
				<Text>{Dimensions.get('screen').width}</Text>
				<Text>{Dimensions.get('window').height}</Text>
				<Text>{Dimensions.get('window').width}</Text>
			</View>
		</View>
	);
};

export default Profile;
