const app = getApp();
import {
  selectCommunityTabBar,
  selectTabBar
} from 'utils/util';

Page({
  data:{
    active: 0,
  },
  customData: {

  },
  onLoad(options) {
    this.pageInit(options);
  },
  onShow() {
    selectTabBar(this, 0, false);
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
