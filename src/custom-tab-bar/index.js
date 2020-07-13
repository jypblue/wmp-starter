

Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ad0e11",
    list: [],
    shopList: [
      {
        name: 'HOME',
        pagePath: "/pages/index/index",
        "iconPath": "icon-home",
        "text": "首页"
      },
      {
        name: 'CATEGORY',
        pagePath: "/pages/category/category",
        "iconPath": "icon-drawer",
        "text": "分类"
      },
      {
        name: 'CART',
        pagePath: "/pages/cart/cart",
        "iconPath": "icon-cart",
        "text": "购物车"
      },
      {
        name: 'ME',
        pagePath: "/pages/center/center",
        iconPath: "icon-me",
        text: "我的"
      },
      // {
      //   name: 'COMMUNITY',
      //   pagePath: "/pages/community/community",
      //   "iconPath": "icon-star",
      //   "selectedIconPath": "../static/images/icon_home_active.png",
      //   "text": "去看看"
      // }
    ],
    communityList: [
      {
        name: 'COMMUNITY',
        pagePath: "/pages/community/community",
        "iconPath": "icon-home",
        "text": "首页"
      },
      {
        name: 'MESSAGE',
        pagePath: "/subPack_community/pages/news/news",
        "iconPath": "icon-home",
        "text": "消息"
      },
      {
        name: 'PUBLISH',
        pagePath: "/subPack_community/pages/topic_publish/topic_publish",
        "iconPath": "icon-home",
        "text": "发布"
      },
      {
        name: 'COMM_ME',
        pagePath: "/subPack_community/pages/center/center",
        iconPath: "icon-me",
        text: "我的"
      },
    ],
    showTabBar: true,
  },
  attached() {
  },
  methods: {
    switchTab(event) {
      const data = event.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({url});
    },
    toggleTabBarList(event) {
      const url = '/pages/community/community';
      wx.reLaunch({url});
    }
  }
});
