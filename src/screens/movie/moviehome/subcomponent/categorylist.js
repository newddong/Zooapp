import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import {lnb, lo, sctn, txt} from '../style_moviehome';

import DP from 'Screens/dp';
import {EyeIcon, ShareIcon} from 'Asset/image';

import MovieItem from './movieItem';
import HealthLnb from './healthlnb';

export default CategoryList = () => {
	return (
		<View style={lo.wrp_main}>
			<ScrollView>
				<HealthLnb style={lo.lnb} />
				<MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem />
			</ScrollView>
		</View>
	);
};
