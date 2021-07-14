import React from 'react';
import {TextInput, View} from 'react-native';
import SvgWrapper, {SvgWrap} from 'Screens/svgwrapper';
import {CancelInput, EyeIcon} from 'Asset/image';
import {GRAY, MAINCOLOR} from 'Screens/color';
import DP from 'Screens/dp';

export default FormTxtInput = props => {
	const [pass, setPass] = React.useState(props.password);
	const focus = e => {
		
	};
	const blur = () => {};

   const input = React.useRef();
	const clear = () => {
		input.current.clear();
      setClear(false);
	};
   const [showClear,setClear] = React.useState(false);
   const countTxt = (e) => {
      if(e.length>0){
         setClear(true);
      }else{
         setClear(false);
      }
   }
   const showpass=()=>{
      setPass(!pass);
   }

	return (
		<View style={{...props.style,justifyContent: 'center'}}>
			<TextInput
				style={props.inputStyle}
				placeholder={props.placeholder}
				placeholderTextColor={props.placeholderTextColor}
				onChange={props.onChange}
            onChangeText={countTxt}
				onFocus={focus}
				onBlur={blur}
				ref={(ref)=>input.current=ref}
            secureTextEntry={pass}
				value={props.value}
				></TextInput>

			{props.password&&showClear && (
				<SvgWrap  style={{width: 36 * DP, height: 24 * DP, position:'absolute', right:88*DP}} onPress={showpass} svg={<EyeIcon fill={pass?GRAY:MAINCOLOR} />} />
			)}

			{showClear&&<SvgWrap style={{width: 52 * DP, height: 52 * DP, position:'absolute',right:20*DP}} onPress={clear} svg={<CancelInput />} />}
			
		</View>
	);
};

FormTxtInput.defaultProps = {
	password: false,
	value:null,
};
