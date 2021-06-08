import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const XD_WIDTH = 750;
const DP = WIDTH / XD_WIDTH;
export default DP;
export const svg_size = {width:'100%',height:'100%'};
