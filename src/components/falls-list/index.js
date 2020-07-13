
/**
 * 瀑布流组件
 */
Component({
  properties: {
    intervalWidth: {
      type: String,
      value: "20rpx"
    }
  },
  data: {
    items: [],
    stopWaterfall: false
  },
  methods: {
    /**
     * 批量添加元素
     *
     * @param {Array} items - 新增的元素数组
     */
    append(items) {
      if (!Array.isArray(items)) {
        console.error("[fallsList]参数类型错误，渲染失败");
        return false;
      }

      this.setData({
        stopWaterfall: false
      });

      return this._refreshFalls(items);
    },

    /**
     * 批量删除瀑布流中的元素
     *
     * @param {Number} start - 开始下标
     * @param {Number} end  - 结束下标
     */
    delete(start, end) {
      const { items } = this.data;
      if (start < end && start < items.length - 1) {
        let len = end- start;
        let newItems = items.splice(start, len);
        this._refreshFalls(newItems);
      } else {
        console.error("[fallsList]初始下标异常，删除失败！");
      }
    },

    /**
     * 更新数组中的某个元素
     *
     * @param {Object} newItem  - 修改后的元素
     * @param {Number} index - 需要更新的数组下标
     */
    updateItem(newItem, index) {
      const { items } = this.data;
      if (index <= items.length - 1) {
        this.setData({
          items: [
            ...items.slice(0, index),
            Object.assign(items[index], newItem),
            ...items.slice(index + 1)
          ]
        });
      } else {
        console.error("[fallsList]下标越界，修改失败！");
      }
    },

    /**
     * 删除瀑布流中的某个元素
     *
     * @param {Number} index - 数组下标
     */
    deleteItem(index) {
      const { items } = this.data;
      if (index <= items.length - 1) {
        let newItems = items.splice(index, 1);
        this._refreshFalls(newItems);
      } else {
        console.error("[fallsList]下标越界，删除失败！");
      }
    },

    /**
     * 刷新瀑布流
     *
     * @param {Array} items - 参与渲染的元素数组
     */
    start(items) {
      if (!Array.isArray(items)) {
        console.error("[fallsList]参数类型错误，渲染失败");
        return false;
      }

      this.setData({
        items: [],
        stopWaterfall: false
      });

      return this._refreshFalls(items);
    },

    /**
     *  停止渲染瀑布流
     */
    stop() {
      this.setData({
        stopWaterfall: true,
        items: []
      });
    },

    // 获取dom的左右宽高偏移量
    getRect(selector, all) {
      return new Promise((resolve) => {
        wx.createSelectorQuery()
          .in(this)
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    },
    /**
     * 刷新瀑布流
     *
     * @param {Array} items - 参与渲染的元素数组
     */
    _refreshFalls(items) {
      return new Promise((resolve) => {
        this._render(items, 0, () => {
          resolve();
        });
      });
    },

    /**
     * 渲染函数
     *
     * @param {Array} items  - 正在渲染的数组
     * @param {Number} i  - 当前渲染元素的下标
     * @param {Function} onComplete - 完成后的回调函数
     */
    _render (items, i, onComplete) {
      if (items.length > i && !this.data.stopWaterfall) {
        Promise.all([this.getRect('#left-col-inner'), this.getRect('#right-col-inner')]).
          then(rects => {
            const item = items[i];
            const leftColHeight = rects && rects.length ? rects[0].height : 0;
            const rightColHeight = rects && rects.length > 1 ? rects[1].height : 0;
            this.setData({
              items: [...this.data.items, {
                ...item,
                columnPosition: leftColHeight <= rightColHeight ? 'left' : 'right'
              }]
            }, () => {
              this._render(items, ++i, onComplete);
            });
          }).catch(error => {
            console.error(error);
          });
      } else {
        onComplete && onComplete();
      }
    }
  }
});
