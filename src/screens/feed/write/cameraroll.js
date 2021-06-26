import React from 'react';
import {View, Button, ScrollView, Image} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";

export default CameraTest = () => {
	const [photos, setPhotos] = React.useState([{node:null}]);

	_handleButtonPress = () => {
		CameraRoll.getPhotos({
			first: 20,
			assetType: 'Photos',
		})
			.then(r => {
            setPhotos({photos:r.edges});
				// this.setState({photos: r.edges});
			})
			.catch(err => {
				//Error Loading Images
			});
	};

	return (
		<View>
			<Button title="Load Images" onPress={this._handleButtonPress} />
			<ScrollView>
				{photos.photos?.map((p, i) => {
					return (
						<Image
							key={i}
							style={{
								width: 300,
								height: 100,
							}}
							source={{uri: p.node.image.uri}}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};
