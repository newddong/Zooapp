import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import DP from 'Screens/dp';
import {
	HeartIcon,
	HeartFocusedIcon,
	RespiratoryIcon,
	RespiratoryFocusedIcon,
	DigestiveIcon,
	DigestiveFocusedIcon,
	UrinaryIcon,
	UrinaryFocusedIcon,
	BrainIcon,
	BrainFocusedIcon,
	SecretionIcon,
	SecretionFocusedIcon,
	MusculoskeletalIcon,
	MusculoskeletalFocusedIcon,
	SkinIcon,
	SkinFocusedIcon,
	InfectionIcon,
	InfectionFocusedIcon,
	FaceIcon,
	FaceFocusedIcon,
	MiscIcon,
	MiscFocusedIcon,
} from 'Asset/image/iconHealth';

import HealthLnbItem from './healthlnbitem';


export default HealthLnb = props => {
	const pre = useRef();
	const prefn = useRef();
	
	prefn.current = e => {};
	
	const icon_size = {width:'100%',height:'100%'}
	
	const	click = (set, isClick, init) => e => {
			console.log(init);
			if (!isClick) {
				prefn.current(!pre.current);
				set(!isClick);
				prefn.current = set;
				pre.current = !isClick;
			}
	};

	return (
		<View style={{...props.style}}>
			{/* <TouchableHighlight onPress={()=>pre.current(true)}><View style={{width:30,height:30,backgroundColor:'blue'}}></View></TouchableHighlight> */}
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<HealthLnbItem label="심장/혈액" init={true} width={92 * DP} height={120 * DP} onPress={click}>
					<HeartIcon {...icon_size}/>
					<HeartFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="호흡기" width={112 * DP} height={100 * DP} onPress={click}>
					<RespiratoryIcon {...icon_size}/>
					<RespiratoryFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="소화기" width={100 * DP} height={120 * DP} onPress={click}>
					<DigestiveIcon {...icon_size}/>
					<DigestiveFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="비뇨기/생식기" width={108 * DP} height={72 * DP} onPress={click}>
					<UrinaryIcon {...icon_size}/>
					<UrinaryFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="뇌/신경" width={104 * DP} height={96 * DP} onPress={click}>
					<BrainIcon {...icon_size}/>
					<BrainFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="내분비" width={104 * DP} height={104 * DP} onPress={click}>
					<SecretionIcon {...icon_size}/>
					<SecretionFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="근골격계" width={48 * DP} height={108 * DP} onPress={click}>
					<MusculoskeletalIcon {...icon_size}/>
					<MusculoskeletalFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="피부" width={108 * DP} height={100 * DP} onPress={click}>
					<SkinIcon {...icon_size}/>
					<SkinFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="감염성" width={116 * DP} height={104 * DP} onPress={click}>
					<InfectionIcon {...icon_size}/>
					<InfectionFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="눈/귀/코/구강" width={104 * DP} height={88 * DP} onPress={click}>
					<FaceIcon {...icon_size}/>
					<FaceFocusedIcon {...icon_size}/>
				</HealthLnbItem>
				<HealthLnbItem label="기타" width={104 * DP} height={104 * DP} onPress={click}>
					<MiscIcon {...icon_size}/>
					<MiscFocusedIcon {...icon_size}/>
				</HealthLnbItem>
			</ScrollView>
		</View>
	);
};
