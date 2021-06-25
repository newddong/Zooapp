import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const XD_WIDTH = 750;
const XD_HEIGHT = 1624;
const DPW = WIDTH / XD_WIDTH;
const DPH = HEIGHT/XD_HEIGHT*1.05;

export default DP=(()=>{
   if(HEIGHT/WIDTH>(16/9)){
      return DPW;
   }else{
      return DPH;
   }
})()
export const svg_size = {width:'100%',height:'100%'};
