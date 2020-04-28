
var postData = require('../../../data/posts-data.js');

Page({

  data: {

  },

  onLoad: function(option) {
    // console.log(option);
    var postId = option.id;
    // console.log(postId);
    // console.log(postData.postList);
    var postDataItem = postData.postList[postId];
    // console.log(postDataItem);
    
    /* 因为postDataItem是对象了,所以可以直接写在括号里了 如果是数组的话 才要如下这样写*/
    // this.setData({
    //   postDataItem 
    // }); 
    this.setData(postDataItem); 

  }
})