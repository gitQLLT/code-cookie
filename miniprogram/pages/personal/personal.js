// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    timeline: '',
    randomNum: Math.floor(Math.random()*10+1)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    wx.getSystemInfo({
      success: res=> {
          this.setData({
              scrollHeight: res.windowHeight - 106,
          });
      }
    });

    let date=new Date();
　　if(date.getHours()>=0&&date.getHours()<12){
      this.setData({
        timeline: '上午好'
      })
　　}else if(date.getHours()>=12&&date.getHours()<18){
      this.setData({
        timeline: '下午好'
      })
　　}else{
      this.setData({
        timeline: '晚上好'
      })
　　}
  },

  addCook(){
    wx.redirectTo({
      url: '/pages/addCookie/addCookie',
    })
  },

  picPuzzle(){
    wx.redirectTo({
      url: '/pages/picPuzzle/picPuzzle',
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