import React from 'react';
import {
	Text,
	View,
	StyleSheet,
   TouchableWithoutFeedback
} from 'react-native';
import DP from 'Screens/dp';
import SvgWrapper from 'Screens/svgwrapper';
import { LikeIcon, LikeUncheckedIcon ,CommentIcon, CommentReplyIcon} from 'Asset/image';
import { txt } from './style_post';
import { useNavigation } from '@react-navigation/native';


export default PostComment = props => {
   const navigation = useNavigation();
	return (
		<View style={comment.commentContainer}>
            {props.comment?.map((e,i)=>{
               return <Comment {...e} key={i}/>
            })}
				<Text style={[txt.noto24r, txt.gray, comment.viewAll]}>
					더보기
				</Text>
		</View>
		
	);
};

const Comment = props => {
   const isReply = props.level === 2;
	return (
	
			<View style={[isReply?comment.reply:null,comment.comment]}>
				{isReply&&<SvgWrapper style={comment.replyicon} svg={<CommentReplyIcon />} />}
				<Text style={[txt.roboto24r, txt.gray, comment.userId]}>
					{props.user_id}
				</Text>
				<Text style={[txt.noto24r, {flex: 1}]}>{props.content}</Text>
			</View>
	);
};

const comment = StyleSheet.create({
   buttonContainer:{
      alignItems:'center',
      height:60*DP,
      flexDirection:'row',
      // backgroundColor:'yellow'
      
   },
   commentContainer:{
      // height:50*DP,
      // backgroundColor:'gold'
   },
   infoContainer: {
      flexDirection:'row',
      position:'absolute',
      right:10*DP
   },
   iconContainer:{
      flexDirection:'row',
      width:36*DP,
      height:32*DP,
      marginRight:12*DP,
      marginLeft:36*DP
   },
   comment:{
      width:558*DP,
      flexDirection:'row',
   },
   userId:{
      paddingTop:6*DP,
      marginRight: 20*DP,
   },
   viewAll:{
      justifyContent:'flex-end',
      right:0,
   },
   reply:{
      paddingLeft:114*DP
   },
   replyicon:{
      width:14*DP,
      height:14*DP,
      marginTop:14*DP,
      marginRight:8*DP,
   }
})