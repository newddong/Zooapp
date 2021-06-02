import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';

import {
	Shadow,
	DownBracketGray,
	DownBracketBlack,
	HeartEmptyIcon,
	HeartIcon,
} from '../../../../../asset/image';

import {layoutstyles, textstyles} from '../style_profile';

export default BelongedPet = ({source, heart}) => {
	return (
		<View style={layoutstyles.petItems}>
			<Image style={layoutstyles.petItemPhoto} source={source}></Image>
			<View style={layoutstyles.petItemHeart}>
				{heart ? (
					<HeartIcon width="100%" height="100%" />
				) : (
					<HeartEmptyIcon width="100%" height="100%" />
				)}
			</View>
			<Text style={[textstyles.regular24cjk, textstyles.white]}>구름이/5살</Text>
			<Text style={[textstyles.regular24cjk, textstyles.white]}>앙고라터키쉬</Text>
		</View>
	);
};
