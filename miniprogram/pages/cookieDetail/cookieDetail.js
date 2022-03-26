// pages/cookieDetail/cookieDetail.js
const a =
`
    <div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">荔浦芋头（电商平台购买即可，实惠新鲜）</li><li class="item">紫薯粉</li><li class="item">牛奶</li><li class="item">糯米粉</li><li class="item">玉米淀粉</li><li class="item">黄油</li><li class="item">淡奶油</li><li class="item">白砂糖</li><li class="item">料理搅拌机（电动打蛋器也可以）</li><li class="item">筛网</li><li class="item">保鲜膜</li><li class="item">白砂糖</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">计算</div>
        <ul>
        <li class="item">荔浦芋头 200g</li><li class="item">紫薯粉 3g</li><li class="item">牛奶 165g</li><li class="item">糯米粉 a 50g</li><li class="item">糯米粉 b 75g</li><li class="item">玉米淀粉 22g</li><li class="item">黄油 30g</li><li class="item">淡奶油（推荐安佳） 145g</li><li class="item">白砂糖 26g</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">操作</div>
        <ul>
        <li class="item">芋头切块，大火煮熟至软（40 分钟即可），全部放入料理机</li><li class="item">向内加入 30g 牛奶，25g 淡奶油，将其打成泥状</li><li class="item">再向内加入 3g 紫薯粉，18g 白砂糖，继续搅拌打成细腻芋泥</li><li class="item">取出另一个碗，加入全部糯米粉 b，22g 玉米淀粉，135g 牛奶，50g 白砂糖，混匀并过筛一遍，保鲜膜盖上并扎小洞，中火蒸半个小时</li><li class="item">在蒸的过程中，将糯米粉 a 放入平底锅小火翻炒至微微发黄（即炒熟），作为手粉备用</li><li class="item">将中火蒸完半小时的糯米牛奶混合物（果冻状）趁热加入黄油 30g，将黄油揉至面团完全吸收，然后放冰箱冷藏一小时</li><li class="item">取出另一只碗，加入 120g 淡奶油，8g 白砂糖，打发至有纹路，装进裱花袋备用</li><li class="item">取出冷藏后的面团，搓揉 5 分钟，分成 30g 一个，均匀撒上 2g 手粉防粘，擀成圆形，先挤上 5g 裱花奶油，然后放上 30g 芋泥，最后将面饼像包包子一样包起来（可以减去多余的皮）</li><li class="item">包好后再均匀撒 2g 手粉防粘</li><li class="item">重复以上两步直至原材料用光</li>
        </ul>
      </div>
    </div>
`
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