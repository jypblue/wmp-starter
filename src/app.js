// app.js
import $fetch from './utils/request';
import eventBus from './utils/event';


if (wx){
  wx.eventBus = eventBus();
}

App({
  globalData: {

  },
  onLaunch () {
    wx.eventBus || (wx.eventBus = eventBus());
  },
  onLoad() {},
  onShow() {},
  $fetch,
});
