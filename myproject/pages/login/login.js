// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_disabled: false,
    username: "",
    password: "",
  },

  login: function () {
    var that = this
    if (that.data.username == '') {
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入用户名！',
        success: function (res) { }
      })
    }
    else if (that.data.password == '') {
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入密码！',
        success: function (res) { }
      })
    }
    else {
      wx.redirectTo({
        url: "/pages/index/index"
      })
    }
  },

  signup:function(e){
    wx.navigateTo({
      url: '/pages/enroll/enroll'
    })
  },

  loginWx:function(e){
    wx.getUserProfile({
      desc: '必须授权才可以使用',
      success:res=>{
        wx.redirectTo({
          url: "/pages/index/index"
        })
      }
    })
  },

  usernameInput: function (e) {
    this.data.username = e.detail.value
  },

  passwordInput: function (e) {
    this.data.password = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})