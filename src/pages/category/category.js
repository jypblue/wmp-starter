const app = getApp();
import {
  selectTabBar
} from 'utils/util';

Page({
  data:{

  },
  customData: {

  },
  onLoad(options) {
    this.pageInit(options);
  },
  onShow() {
    selectTabBar(this, 1, true);
  },
  onReady() {},
  onHide() {},
  onUnload() {},
  pageInit(options) {

  }
});
