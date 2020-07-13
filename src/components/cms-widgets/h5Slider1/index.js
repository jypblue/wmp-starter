Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  behaviors: [],
  properties: {
    list: {
      type: Array,
      value: []
    },
    autoPlay: {
      type: Boolean,
      value: false
    },
    vertical: {
      type: Boolean,
      value: false
    },
    interval: {
      type: Number,
      value: 2000
    },
    duration: {
      type: Number,
      value: 500
    },
    height: {
      type: String,
      value: '500rpx'
    }
  },
  data: {
    current: 0,
  },
  attached(){},
  methods: {
    onSwiperChange(event) {
      const { current } = event.detail;
      this.setData({
        current
      });
    }
  }
});
