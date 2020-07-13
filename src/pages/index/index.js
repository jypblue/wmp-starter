// const app = getApp();
import { selectTabBar } from 'utils/util';


Page({
  data:{
    moduleDataList: [],
    duration: 300,  // swiper-item 切换过渡时间
    categoryCur: 0, // 当前数据列索引
    categoryMenu: [], // 分类菜单数据, 字符串数组格式
    categoryData: [], // 所有数据列
    placeholder: '',
    color: '#ad0e11',
    searchBarFocus: false,
    isH5GuessLikeInit: false
  },
  customData: {
    fallsListComponent: null,
  },
  onLoad(options) {
    this.pageInit(options);
  },
  onShow() {
    selectTabBar(this, 0, true);
  },
  onReady() {},
  onHide() {},
  onUnload() {},
  pageInit(options) {
    console.log(options);
    wx.showShareMenu();
  },
  async startFallsList(items) {
    // 通过ID，获取组件实例
    this.customData.fallsListComponent = this.selectComponent('#homeFallsList');
    // 调用组件的start函数，渲染瀑布流
    const res = await this.customData.fallsListComponent.start(items);
    console.log('start render completed:', res);
  },
  async appendFallsList(items) {
    const res = await this.customData.fallsListComponent.append(items);
    console.log('append render completed:', res);
  }
});
