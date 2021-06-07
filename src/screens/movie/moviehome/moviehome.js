import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import {lnb, lo, sctn, txt} from './style_moviehome';

import DP from 'Screens/dp';
import {EyeIcon, ShareIcon} from 'Asset/image';
import {
	HeartIcon,
	RespiratoryIcon,
	DigestiveIcon,
	UrinaryIcon,
	BrainIcon,
	SecretionIcon,
	MusculoskeletalIcon,
	SkinIcon,
	InfectionIcon,
	FaceIcon,
	MiscIcon,
} from 'Asset/image/iconHealth';
import MovieItem from './subcomponent/movieItem';
import HealthLnb from './subcomponent/healthlnb';

export default MovieHome = () => {
	const icon_size = {width: '100%', height: '100%'};
	return (
		<View style={lo.wrp_main}>
			<ScrollView>
				<MovieItem />
				<HealthLnb style={lo.lnb} />
				<MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem />
			</ScrollView>
		</View>
	);
};
