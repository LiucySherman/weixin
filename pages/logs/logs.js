//logs.js
const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    userInfo:{}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      userInfo: getApp().globalData.userInfo
    })
  },
  openMap:function () {

    wx.switchTab({
      url: '/pages/map/map'
    })
  }
})
