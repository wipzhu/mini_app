// pages/logs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  // 返回上n级
  goBack: function () {
    var res = getCurrentPages()
    console.log(res)
    var delta = 2
    wx.showModal({
      title: '提示',
      content: "将返回" + delta + "级",
      showCancel: false,
      success: function (res) {
        wx.navigateBack({
          delta: delta //想要返回的层级
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})