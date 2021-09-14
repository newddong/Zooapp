import React from 'react';
import {View, FlatList, Text} from 'react-native';
import SubComment from './subcomment';
import {getChildCommentList} from '../../feedapi';

export default SubCommentList = (props) => {
   const [replies, setReplies] = React.useState({list:[],liked:[]});


   React.useEffect(()=>{
      getChildCommentList({
         comment_id:props.commentId,
      },(comments,liked)=>{
         setReplies({list:comments,liked:liked});
      })

   },[]);

   


	return (
		<FlatList
			data={replies.list}
			extraData={replies}
			keyExtractor={(item, index) => item._id}
			renderItem={({item}) => <SubComment data={item} liked={replies.liked.includes(item._id)} />}
		/>
	);
};
