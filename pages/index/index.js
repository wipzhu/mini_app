//index.js
//获取应用实例
const app = getApp()

Page({
  // 传递到页面中的数据
  data: {
    greeting: 'Hello World!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    // wx.showToast({
    //   title: '吐司框延时3s',
    //   duration: 3000
    // })
  },
  // 页面加载完成自动获取用户信息
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取经纬度
  getLocation:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        var txtContent = '经度为：' + latitude + '\r\n纬度为：'+ longitude
        console.log(res)
        wx.showModal({
          title: '您当前的经纬度',
          content: txtContent,
          showCancel: false,
          confirmText: '确定'
        })
      }
    })
  },
  // 扫描二维码
  scanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 获取当前页面栈
  getCurrentPages: function () {
    var res = getCurrentPages()
    console.log(res)
  },
  // 切换tab
  switchTab:function(){
    wx.switchTab({
      url: '../logs/logs',
    })
  },
  // 跳转页面
  goPage: function () {
    wx.navigateTo({
      url: '../news/news',
    })
  },
  // 跳转URL
  goUrl: function () {
    wx.navigateTo({
      url: '../out/out', //
      success: function () {
      },       //成功后的回调；
      fail: function () { },         //失败后的回调；
      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },
  // 发起请求
  sendRequest:function(){
    wx.request({
      url: 'http://api.laravel_test.cn/testapi/index', //仅为示例，并非真实的接口地址,
      method: 'GET',
      data: {
        x: '123',
        y: '234'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data
        wx.showModal({
          title: '请求结果',
          content: data.key,
          showCancel: false,
          confirmText: '确定'
        })
      }
    })
  },
  // 计次 +1
  incrementNum:function(){
    var num = getApp().globalData.activeNum++
    wx.showModal({
      title: '次数',
      content: '次数：' + num,
      showCancel: false,
      confirmText: '确定'
    })
  }
})
