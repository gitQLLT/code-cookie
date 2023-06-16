// pages/animalIndex/animalIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    repreList: [
      {title: '冬荫功汤',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16354195446_250x250.jpg',desc: '冬荫功汤，泰国芳香的精髓！大胆混合香柠檬草、辣椒、山奈、柠檬叶、葱、柠檬汁和鱼露，从而为这道经典的汤品融入了草药的传奇。多汁的鲜对虾和草菇则赋予其形。这道丰富的菜品可搭配任意膳食，鲜明的气味凸显异国芬芳，爽口的酸辣烫味则让人惊叫“泰国”！'},
      {title: '香辣青木瓜沙拉',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16364856497_250x250.jpg',desc: 'Som Tum香辣青木瓜沙拉，源自Isaan东北部，这道奇异的菜品属于味蕾的分水岭-有些人百吃不厌，有些人则无从下口，实在泾渭分明。用杵和臼将蒜、辣椒、青豆、圣女果和生木瓜片捣碎，散发出的甜酸辣味令人难忘。此菜品也存在地区变化，您可以放入花生、干虾和腌蟹，后者有清肠效果，可出其不意地吸引大量新食客！'},
      {title: '咖喱炒蟹',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16374995224_250x250.jpg',desc: '极受欢迎的泰国名菜，切块的红蟹加上配菜与咖喱和各式香料共炒，突出蟹肉的鲜味与弹性，风味独特。主料为泰国的青木瓜切丝，配料有青豆角、蒜头、虾米、西红柿、椰糖、辣椒等，再加入酸子汁及柠檬汁，整道菜香辣而带酸，口感爽脆，十分开胃。'},
      {title: '椰汤炖鸡',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16432294082_250x250.jpg',desc: 'Tom Kha Kai（椰汤炖鸡）作为温和派Tom Yum的转变，这道标志性的汤菜注入了火热的辣椒、嫩山奈薄片、葱碎、柠檬草茎和嫩鸡肉条。但和更多汁的菜肴不同，其所含大量椰奶缓和了辣味，上面盖有新鲜柠檬叶，这是一道散发香甜味道的菜品，同时富含奶油且诱人无比。'},
      {title: '红咖喱',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16445392395_250x250.jpg',desc: 'Gaeng Daeng（红咖喱）用肉屑、红咖喱膏、椰奶调制而成，撒上精心切碎的柠檬叶，这道丰富香郁的咖喱将持续挑战您的味蕾。其精华之处在于肉质细嫩，如同一位美女：柔和、甜美且芬芳雅致。和所有真爱故事一样，小别可胜新婚。'},
      {title: '泰式炒面',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16463279956_250x250.jpg',desc: 'Pad Thai（泰式炒面）从开普敦到考山路均公认的泰国国际美食！丢入滚烫的锅中，几把细面或宽面（由您自选）和脆嫩的豆芽、洋葱和鸡蛋跳上一分钟热气腾腾的舞蹈，然后便会盛到最近的盘子里。这是真正意义上的互动用餐体验，一半乐趣（和风味）在于使用附送的调料四剑客 - 鱼露、糖、辣椒粉和精磨花生-这样才能完全激发味道。'},
      {title: '泰式炒饭',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16475057902_250x250.jpg',desc: 'Khao Pad（炒饭），炒饭、鸡蛋、洋葱外加一点香草 - 不多不少，恰到好处。这道广受欢迎的午餐通常搭配一片柠檬或黄瓜片，其秘诀就在于那份朴素无华的简单。其理念在于：只要您津津有味的吃完，便说明您喜欢。因此，泰国人对使用从对虾、蟹肉或鸡肉到罗勒、辣椒和其余蔬菜等一切食材均得心应手，堪称化腐朽为神奇！'},
      {title: '油炸罗勒猪肉',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16541151002_250x250.jpg',desc: 'Pad Krapow Moo Saap（油炸罗勒猪肉）是适合午餐或正餐的最流行的“一盘”菜肴，它无疑是人气最高的泰国菜品之一。起一口热锅，用大量的圣罗勒叶、大个鲜辣椒、猪肉、青豆、酱油以及略微一点糖即可烹饪这道菜肴。丰满的猪肉碎油脂丰富，搭配热气腾腾的白米饭，让人格外满足。'},
      {title: '绿咖喱鸡',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16551344577_250x250.jpg',desc: 'Gaeng Keow Wan Kai（绿咖喱鸡）鲜嫩的鸡，樱桃大小的茄子，细嫩的竹笋，香菜尖，慷慨的甜罗勒，这些温和的食材构成了这道咖喱的主体。但它为何如此油绿？其秘诀在于几勺绿咖喱膏，在热椰奶中用力搅拌，配上一碗芳香的泰国米饭，绿咖喱鸡堪称绝配。'},
      {title: '辣牛肉沙拉',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16580074805_250x250.jpg',desc: 'Yam Nua（辣牛肉沙拉）如果有“沙拉名人堂”，泰国自产的“yam”无疑会骄傲地占据一席之地。不相信吗？品尝新鲜热情的牛肉沙拉-混搭洋葱、香菜、绿薄荷、柠檬、干辣椒和细嫩的牛肉条一定会让您心服口服。它完美体现了所有泰国沙拉的清爽口感，尽显yam的美味。'}
    ],
    introList: [
      {title: '咖哩酱',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/11504169312_400x230.jpg',desc: '以椰乳作为咖哩酱的基本作料，还有许多调味料包括柠檬草、虾酱、鱼酱以及十几种本地种植的香料、辣椒，由温和到极辣的都有，任人挑选。泰国文化深受印度和中国文化的影响，有人说泰国文化的父亲是印度。从泰国菜中咖哩酱的影响便可以感受到。另外，柠檬叶和香茅(Lemon-grass)也是泰国菜常用的配料。'},
      {title: '泰国柠檬',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/13443669247_400x230.jpg',desc: '泰国柠檬是一种东南亚特有的调味水果，味道和个体都有别于美国柠檬口味的略甜，而泰国柠檬个小、味酸、香味浓郁，往往使闻过它香味的人终身难忘，它可以拿来做柠檬汁饮品，啤酒香剂，最主要的用处是用来做泰国菜的调料，泰国人几乎在每一道菜都会挤上柠檬汁，使每一道菜都散发出浓郁的水果清香，带有典型的东南亚味道。泰国人可以说食无鱼，但不能没有柠檬。'},
      {title: '鱼露',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16593167079_400x230.jpg',desc: '鱼露是一种典型的泰国南部调料，也有人它叫白酱油，顾名思义它就是像酱油一样的调味品，做法和中国酱油差不多，主是让一些小鱼小虾发酵滴汁而成。味道可能会让有些人不适，因为它带有一股浓浓的臭鱼烂虾的味道。让不习惯吃鱼腥的人大倒胃口，掩鼻而逃。'},
      {title: '罗勒',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/16595942691_400x230.jpg',desc: '一般使用的三种罗勒有不同的香味，最常见的是Bai Horapha (紫花罗勒)，味道有点像洋茴香，叶梗有点淡紫色，通常最常用在咖喱菜中；另一种是Bai Kaphrao (holy Basil)，通常和肉一起拌炒，味道比较辣；叶片有一点毛茸茸的Bai Maenglak (hoary Basil)，一般用在汤或沙拉中。如果找不到这些罗勒，也可以以西方的紫花罗勒代替，不过味道会稍有不同。'}
    ],
    categoryIndex: 0,
    categoryIndex1: 0,
    selectDesc: '',
    selectUrl: '',
    selectDesc1: '',
    selectUrl1: '',
    showLevel: '0'
  },

  levelTap(event){
    const index = event.target.dataset.index
    const desc = this.data.repreList[0].desc
    const url = this.data.repreList[0].url
    const desc1 = this.data.introList[0].desc
    const url1 = this.data.introList[0].url
    if(index==='0'){
      this.setData({
        showLevel: index,
        selectDesc: desc,
        selectUrl: url
      })
    }else{
      this.setData({
        showLevel: index,
        selectDesc1: desc1,
        selectUrl1: url1
      })
    }
  },

  bindCategoryDesc(event){
    const index = event.currentTarget.dataset.index
    const desc = this.data.repreList[index].desc
    const url = this.data.repreList[index].url
    this.setData({
      categoryIndex1: index,
      selectDesc: desc,
      selectUrl: url
    })
  },

  bindCategoryTap(event){
    const index = event.currentTarget.dataset.index
    const desc = this.data.introList[index].desc
    const url = this.data.introList[index].url
    this.setData({
      categoryIndex: index,
      selectDesc1: desc,
      selectUrl1: url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    wx.getSystemInfo({
      success: res=> {
          this.setData({
              scrollHeight: res.windowHeight - 42,
          });
      }
    });
    const desc = this.data.repreList[0].desc
    const url = this.data.repreList[0].url
    this.setData({
      selectDesc: desc,
      selectUrl: url
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