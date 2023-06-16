const { serve } = require("../../utils/rquest");

// pages/cookieIndex/cookieIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    records: [],
    category: [],
    categoryIndex: 0,
    listIndex: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    wx.getSystemInfo({
      success: res=> {
          this.setData({
              scrollHeight: res.windowHeight,
          });
      }
    });

    this.getRecord()
  },

  getRecord() {
    wx.showLoading();
    serve({name: 'cookieGod', data:{type: 'queryCookMenus'}})
    .then(res=>{
      this.setData({
        records: res,
        category: res[0].children
      })
      wx.hideLoading();
    }).catch(err=>{
      console.log(err)
      wx.hideLoading();
    })
  },

  bindSearchtap(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  bindCategoryTap(event){
    let index = event.currentTarget.dataset.index;
    this.setData({
        categoryIndex: index,
        category: this.data.records[index].children
    });
  },

  listTouch(event){
    let index = event.currentTarget.dataset.index;
    this.setData({
        listIndex: index
    });
  },

  listTouchEnd(event){
    this.setData({
      listIndex: null
    })
  },

  handleClick(event){
    let item = event.currentTarget.dataset.item;
    wx.setStorage({
      key: item.name,
      data: item.content
    })
    wx.navigateTo({
      url: '/pages/cookieDetail/cookieDetail?title='+item.name,
    })
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