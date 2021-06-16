import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';

import {lnb, lo, sctn, txt} from './style_moviehome';

import DP from 'Screens/dp';

import MovieItem from './subcomponent/movieItem';
import HealthLnb from './subcomponent/healthlnb';
import dummydata from './moviedata.json';

export default MovieHome = props => {
	return (
		<View style={lo.wrp_main}>
			<ScrollView>
				<MovieItem data={dummydata.movies[0]}/>
				<HealthLnb style={lo.lnb}/>
				<MovieItem data={dummydata.movies[0]}/>
				<MovieItem data={dummydata.movies[0]}/>
				<MovieItem data={dummydata.movies[0]}/>
				<MovieItem data={dummydata.movies[0]}/>
				<MovieItem data={dummydata.movies[0]}/>
				{/* <MovieItem />
				<MovieItem />
				<MovieItem />
				<MovieItem /> */}
			</ScrollView>
		</View>
	);
};
