import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const XD_WIDTH = 750;
const XD_HEIGHT = 1624;
const DPW = WIDTH / XD_WIDTH;
const DPH = HEIGHT/XD_HEIGHT*1.05;

export default DP=(()=>{
   if(HEIGHT/WIDTH>(17/9)){
      return DPW;
   }else{
      return DPH;
   }
})()
export const svg_size = {width:'100%',height:'100%'};

//iPhone 12 Pro Max  428x926
//iPhone 12 Pro      390x844
//iPhone 12          390x844
//iPhone 12 mini     375x812
//iPhone 11 Pro Max  414x896
//iPhone 11 Pro      375x812
//iPhone 11          414x896
//iPhone Xs Max      414x896
//iPhone Xs          375x812
//iPhone Xr          414x896
//iPhone X           375x812
//iPhone 8 Plus      414x736
//iPhone 8           375x667
//iPhone 7 Plus      414x736
//iPhone 7           375x667
//iPhone 6s Plus     414x736
//iPhone 6s          375x667
//iPhone 6 Plus      414x736
//iPhone 6           375x667
//4.7" iPhone SE     375x667
//4" iPhone SE       320x568

//428 414 390 375 320 
//926 896 844 812 736 667 568