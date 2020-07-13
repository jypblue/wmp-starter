class EventEmitter {
  constructor() {
    this._cache = {};
  }
  on(event, fn) {
    // 数组
    if(Array.isArray(event)) {
      for(let i = 0; i < event.length; i++) {
        this.on(event[i], fn);
      }
    } else {
      if (!this._cache[event]) this._cache[event] = [];
      this._cache[event].push(fn);
    }
    return this;
  }

  off(event, fn) {
    // 数组
    if(Array.isArray(event)) {
      for(let i = 0; i < event.length; i++) {
        this.off(event[i], fn);
      }
      return this;
    }

    // 没有监听直接返回
    if (!this._cache[event]) return this;

    // 没有回调直接取消该事件所有监听
    if (!fn) {
      this._cache[event] = [];
      return this;
    }

    // 取消该fn监听
    for (let i = 0; i< this._cache[event].length; i++) {
      if (this._cache[event][i] === fn ) {
        this._cache[event].splice(i, 1);
        break;
      }
    }
    return this;
  }

  once(event, fn) {
    const onWrap = (...rest) => {
      fn.apply(this, rest);
      this.off(event, onWrap);
    };
    this.on(event, onWrap);
    return this;
  }
  // emit / fire
  emit(event, ...rest) {
    if(this._cache[event] && this._cache[event].length) {
      this._cache[event].forEach(item => item(...rest));
    }
    return this;
  }
}

export default function() {
  return new EventEmitter();
};
