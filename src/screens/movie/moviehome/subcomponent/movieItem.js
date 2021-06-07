import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {lnb, lo, sctn, txt} from '../style_moviehome';

import DP from 'Screens/dp';
import {EyeIcon, ShareIcon} from 'Asset/image';
import { TouchableWithoutFeedback } from 'react-native';


export default MovieItem = () => {
	const icon_size = {width: '100%', height: '100%'};
	const nav = useNavigation();
	const handlePress = () => {
		nav.navigate("MoviePlay",{d:'d'});
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={lo.sctn}>
				<View style={sctn.img_thumb}>
					<Image
						style={sctn.img_thumb}
						source={{
							uri: 'https://image.dongascience.com/Photo/2019/11/10ed7359329fe87a2dc84921babb17e0.jpg',
						}}
					/>
					<View style={sctn.cntr_playtime}>
						<Text style={[txt.roboto22r, txt.white]}>00:00:00</Text>
					</View>
				</View>
				<View style={sctn.cntr_info}>
					<View style={sctn.cntr_userimg}>
						<Image
							style={sctn.cntr_userimg}
							source={{uri: 'https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg'}}
						/>
					</View>

					<View style={sctn.wrp_txt}>
						<View style={sctn.cntr_title}>
							<Text style={txt.noto30b}>
								강아지 '눈 건강' 집에서 자가 체크 해보자! [2편] 자가 체크에 필요한 준비물??
							</Text>
						</View>
						<View style={sctn.cntr_userid}>
							<Text style={[txt.noto24rcjk, txt.gray]}>닥터맘마 Dr.Mamma</Text>
						</View>
						<View style={sctn.cntr_popularity}>
							<Text style={[txt.noto24rcjk, txt.gray]}>1.2k</Text>
							<View style={[sctn.cntr_icon, {width: 28 * DP, height: 18 * DP}]}>
								<EyeIcon {...icon_size} />
							</View>
							<Text style={[txt.noto24rcjk, txt.gray]}>109</Text>
							<View style={[sctn.cntr_icon, {width: 24 * DP, height: 28 * DP}]}>
								<ShareIcon {...icon_size} />
							</View>
						</View>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};
