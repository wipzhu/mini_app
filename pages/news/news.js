// pages/news/news.js
var common = require('../../common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1, 2, 3, 4, 5],
    view: 'MINA'
  },

  // 返回上一级
  goBack: function () {
    var res = getCurrentPages()
    console.log(res)
    var delta = 1
    wx.showModal({
      title: '提示',
      content: "将返回" + delta +"级",
      showCancel: false,
      success: function (res) {
        wx.navigateBack({
          delta: delta //想要返回的层级
        })
      }
    })
  },

  // 跳转页面
  goPage: function () {
    wx.navigateTo({
      url: '../logs/index',
    })
  }, 
  helloMINA: function () {
    common.sayHello('MINA')
  },
  goodbyeMINA: function () {
    common.sayGoodbye('MINA')
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