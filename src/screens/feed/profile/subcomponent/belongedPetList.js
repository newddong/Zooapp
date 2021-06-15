import React from 'react';
import {
	ScrollView,
	StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BelongedPet from './belongedPet';

import DP from 'Screens/dp';



export default BelongedPetList = props => {
	return (
		<LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#FFB6A5', '#FFE7A4']}>
			<ScrollView
				horizontal
				style={[layout.petlist]}
				contentContainerStyle={{alignItems: 'center', justifyContent: 'space-evenly'}}>
				{props.data.map((e,i)=><BelongedPet
					data={e} key={i}
				/>)}
			</ScrollView>
		</LinearGradient>
	);
};

const layout = StyleSheet.create({
	petlist:{
		top:0*DP,
		height: 220 * DP,
		marginHorizontal:0,
	}
});