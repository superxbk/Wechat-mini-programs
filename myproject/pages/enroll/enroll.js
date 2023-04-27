// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    phoneNumber:'',
    password:'',
    passwordack:'',
  },
  //注册按钮
  regist(e){
    var that=this
    //判断电话号码是否有效的表达式
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(19[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    //判断用户名是否为空
    if(that.data.username == ""){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel:false,
        complete: (res) => {
        }
      })
    //判断电话号码是否为空
    }else if(that.data.phoneNumber == ""){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel:false,
        complete: (res) => {
        }
      })
    //判断电话号码的长度是否有效
    }else if(that.data.phoneNumber.length != 11){
      wx.showModal({
        title: '提示',
        content: '号码长度有误请重新输入',
        showCancel:false,
        complete: (res) => {
        }
      })
    //使用正则表达式判断电话号码是否有效
    }else if(!myreg.test(that.data.phoneNumber)){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号吗',
        showCancel:false,
        complete: (res) => {
        }
      })
    //判断密码是否为空
    }else if(that.data.password == ""){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel:false,
        complete: (res) => {
        }
      })
    //判断确认密码是否为空
    }else if(that.data.passwordack == ""){
      wx.showModal({
        title: '提示',
        content: '请输入确认密码',
        showCancel:false,
        complete: (res) => {
        }
      })
    //判断两次密码是否一致
    }else if(that.data.password != that.data.passwordack){
      wx.showModal({
        title: '提示',
        content: '两次输入密码不一致，请重新输入',
        showCancel:false,
        complete: (res) => {
        }
      })
    }else{
      console.log('111')
    }
  },

  usernameInput(e) {
    this.data.username = e.detail.value
  },
  phoneNumberInput(e) {
    this.data.phoneNumber = e.detail.value
  },
  passwordInput(e) {
    this.data.password = e.detail.value
  },
  passwordInputACK(e) {
    this.data.passwordack = e.detail.value
  },
  signin(e){
    wx.navigateBack({
      delta:1
    })
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