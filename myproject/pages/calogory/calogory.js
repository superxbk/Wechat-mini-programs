// pages/calogory/calogory.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    currentIndex:0,//左侧分类菜单索引
    toView:'',//右侧自动滑动到id
    index:0,
    category:[{
      id:"resource",
      cate_name:"森林资源",
      cate_list:[{
        pid:1,
        item_img:"/imgs/cate_list_1.jpg",
        item_name:"自然资源"
      },
      {
        pid:2,
        item_img:"/imgs/cate_list_2.jpg",
        item_name:"资源特征"
      }]
    },
    {
      id:"Protect",
      cate_name:"保护森林",
      cate_list:[{
        pid:3,
        item_img:"/imgs/cate_list_3.jpg",
        item_name:"林业有害生物防治技术"
      },
      {
        pid:4,
        item_img:"/imgs/cate_list_4.jpg",
        item_name:"森林防火"
      }]
    }
  ]},
  //点击切换页面
  changeItem(e){
    console.log(e);
    var index=e.currentTarget.dataset.index;
    //当右侧的index为0时，currentIndex为0和1时跳转的页面
    if(index==0){
      if(this.data.currentIndex==0){
        wx.navigateTo({
        url: '/pages/calogory_1/calogory_1',
        }) 
      }
      else{
        wx.navigateTo({
          url: '/pages/calogory_3/calogory_3',
        })
      }  
    }
    //当右侧的index为1时，currentIndex为0和1时跳转的页面
    else{
      if(this.data.currentIndex==0){
        wx.navigateTo({
        url: '/pages/calogory_2/calogory_2',
        }) 
      }
      else{
        wx.navigateTo({
          url: '/pages/calogory_4/calogory_4',
        })
      } 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      categoryList:this.data.category
    })
  },
    //左侧菜单点击事件
  clickCategory(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    if(index != this.data.currentIndex){
      this.setData({
        currentIndex:index,
        toView:this.data.categoryList[index].id
      })
    }  
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

  },




  // 右侧滚动事件

  //跳转到详情页面

 
})