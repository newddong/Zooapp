
export const feedData = {
   feedHomeData:[],
   feedUserData:[],
   likedPosts:[],

};

export const updatePostData = (newdata) => {
   feedData.feedHomeData.forEach((v,i,a)=>{
      if(v._id===newdata._id)a[i]=newdata;
   });
   feedData.feedHomeData.forEach((v,i,a)=>{
      if(v._id===newdata._id)a[i]=newdata;
   });
};