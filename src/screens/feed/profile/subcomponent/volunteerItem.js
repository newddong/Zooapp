import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native';

import {text} from '../style_profile';
import {ShelterIcon, AnimalIcon} from 'Asset/image';

import DP from 'Screens/dp';

import WrappedText from 'react-native-wrapped-text';

export default VolunteerItem = ({source}) => {
	return (
		<View style={layout.volunteerItems}>
			<TouchableHighlight
				onPress={() => {
					alert('후원중');
				}}>
				<>
					<Image style={layout.volunteerPhoto} source={source}></Image>
					<View style={layout.volunteerIDtype}>
						{true ? (
							<ShelterIcon height="100%" width="100%" />
						) : (
							<AnimalIcon height="100%" width="100%" />
						)}
					</View>
					<WrappedText
						textStyle={[styles.notoSans28, text.aligncenter]}
						rowWrapperStyle={{width: 178 * DP, height: 80 * DP, justifyContent: 'center'}}>
						하이바이 보호소
					</WrappedText>
					<WrappedText
						textStyle={[styles.notoSans24, text.aligncenter]}
						rowWrapperStyle={{width: 178 * DP, height: 35 * DP, justifyContent: 'center'}}>
						인천광역시 남동구
					</WrappedText>
					{true ? (
						<WrappedText
							textStyle={[styles.notoSans24, text.aligncenter, text.pink]}
							rowWrapperStyle={{width: 178 * DP, height: 35 * DP, justifyContent: 'center'}}>
							후원
						</WrappedText>
					) : null}
				</>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	notoSans28: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 15,
		lineHeight: 38 * DP,
	},
	notoSans24: {
		fontFamily: 'NotoSansCJKkr-Regular',
		fontSize: 12,
		lineHeight: 28 * DP,
	},
});

const layout = StyleSheet.create({
	volunteerPhoto: {
		width: 140 * DP,
		height: 140 * DP,
		borderRadius: 140 * DP,
	},
	volunteerIDtype: {
		width: 48 * DP,
		height: 48 * DP,
		position: 'absolute',
		left: 19 * DP,
	},
	volunteerItems: {
		width: 178 * DP,
		marginHorizontal: 11 * DP,
		alignItems: 'center',
	},
});
