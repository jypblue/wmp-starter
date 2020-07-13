const app = getApp();
import {
  selectTabBar,
  selectCommunityTabBar
} from 'utils/util';

Page({
  data:{
    active: 1,
  },
  customData: {

  },
  onLoad(options) {
    this.pageInit(options);
  },
  onShow() {
    selectTabBar(this, 1, 'COMMUNITY');
  },
  onReady() {},
  onHide() {},
  onUnload() {},
  pageInit(options) {

  },
  onChange(event) {
    const index = event.detail;
    selectCommunityTabBar(index);
  }
});
