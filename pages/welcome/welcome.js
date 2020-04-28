Page({

  onTap: function() {
    //console.log("onTap");

    // wx.navigateTo({
    //   url: '../posts/posts'
    // })

    wx.redirectTo({
      url: '../posts/posts'
    })

  },

  onHide: function() {
    // console.log('welcome page is Hide');
  },

  onUnload: function() {
    // console.log('welcome page is unload');
  }

})