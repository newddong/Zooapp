import {StyleSheet} from 'react-native';

export const layoutstyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	contents: {
		flex: 1,
		flexDirection: 'column',
		width: '87%',
		backgroundColor: '#FFFFFF',
	},
	header: {
		height: 90,
      backgroundColor:'green'
	},
   profileContainer: {
      height: 100,
      backgroundColor:'yellow'
   },
   photoListContainer: {
      flex: 0.5,
      backgroundColor:'blue'
   }
});