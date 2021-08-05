import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SvgWrapper from 'Screens/svgwrapper';
import Swiper from 'react-native-swiper';
import {MeatballIcon} from 'Asset/image';

import {lo, userinfo, txt} from './style_post';
import PostComment from './postcomment';

export default Post = props => {
	const nav = useNavigation();
	return (
		<View style={lo.cntr_contents}>
			<View style={[lo.cntr_info_user]}>
				<TouchableWithoutFeedback onPress={() => nav.push('Profile')}>
					<Image
						style={userinfo.photo}
						source={{
							uri: props.data.photo_user,
						}}
					/>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => nav.push('Profile')}>
					<View style={userinfo.grp_info}>
						<Text style={txt.noto28b}>{props.data.user_id}</Text>
						<Text style={[txt.noto24r, txt.gray]}>{props.data.location}에서</Text>
					</View>
				</TouchableWithoutFeedback>
				<SvgWrapper style={userinfo.meatBallMenu} svg={<MeatballIcon />}/>
			</View>

			<View style={[lo.cntr_txt]}>
				<Text style={[txt.noto24r, txt.gray]}>{props.data.content}</Text>
				{/* <TxtContainHash data={props.data.content}/> */}
				<Text style={[txt.noto24r, txt.gray]}>{props.data.time}</Text>
			</View>

			<Swiper showsButtons style={lo.cntr_photo} activeDotColor='#FFB6A5' showsButtons={false}>
				{props.data.images.map((data, idx) => (
					<Image style={lo.photo} source={{uri: data}} key={idx} />
				))}
			</Swiper>

			<View style={lo.cntr_comment}>
				<PostComment comment={props.data.comment} like={props.data.like} count_comment={props.data.count_comment}/>
			</View>
		</View>
	);
};

const TxtContainHash = (props) => {
	let arr = parseData(props.data);
	return (
		<Text style={[txt.noto24r, txt.gray]}>
			{arr.map((e,i)=><Text style={{color:e[1].charAt(0)==='#'?'#007EEC':'#767676'}} key={i}>{e[1]}</Text>)}
		</Text>
	);
};

function parseData(string){
	const regexp = />(.*?)</g;
	return [...string.matchAll(regexp)];
}