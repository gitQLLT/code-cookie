// components/searchxx.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'text'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: '请输入搜索关键字'
    },
    value: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSearchTap: function (e) {
      this.triggerEvent('disabledtap');
    },

    searchList: function(event) {
      if (this.timer) {
        clearTimeout(this.timer)
      } // 每次进来的时候都将之前的清除掉，如果还没到 600毫秒(600毫秒自定义) 的时候就将之前的清除掉，这样就不会触发之前setTimeout绑定的事件， 如果超过 600豪秒，之前的事件就会被触发下次进来的时候同样清除之前的timer
      this.timer = setTimeout(() => { //箭头函数 注意this
          // 在这里进行我们的操作  这样就不会频繁的进行我们这里面的操作了
          var value = event.detail.value;
          if(value){
            this.triggerEvent('search', this.data.value);
          }
      }, 600)
    },

    bindSearch: function (e) {
      this.triggerEvent('search', this.data.value);
    }
  }
})
