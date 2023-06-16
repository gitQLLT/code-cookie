// pages/cookieDetail/cookieDetail.js
const a =
    `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】韩国泡菜100g、牛肉50g、乌冬面1包</li>
          <li class="item">【辅料】洋葱丝半个、油盐适量、淀粉适量、生抽适量、料酒适量、胡椒粉适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.牛肉丝中放入盐、生抽、料酒、淀粉和胡椒粉，抓拌均匀，腌制几分钟；</li><li class="item">
2.烧热锅， 放适量油，下入洋葱丝煸炒；</li><li class="item">
3.洋葱煸炒出香味后下入泡菜丝一起翻炒；</li><li class="item">
4.翻炒几下后倒入适量的高汤或者水煮开；</li><li class="item">
5.下入乌冬面，用筷子划散；</li><li class="item">
6.再下入腌制好的牛肉丝去煮；</li><li class="item">
7.牛肉丝变色后加入盐和胡椒粉调味；</li><li class="item">
8.盛入碗中， 再将泡菜放在上面点缀一下。</li>
        </ul>
      </div>
      <div class="section">
      <div class="title">小贴士：</div>
      <ul>
      <li class="item">1.牛肉丝提前腌制， 牛肉须搭配上洋葱丝；</li><li class="item">
2.泡菜煸炒过香辣味道更能恢复出来，如果喜欢味道更浓烈些，可以加入点韩国辣酱；</li><li class="item">
3.乌冬面本身是熟的，不宜煮过长的时间。</li>
      </ul>
    </div>
    </div>`
Page({

  /**
   * 页面的初始数据
   */
  data: {
    htmlSnip: '<p class="desc">我加菲猫才是食神</p>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
    wx.getStorage({
      key: options.title,
      success (res) {
        that.setData({
          htmlSnip: res.data
        })
      }
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