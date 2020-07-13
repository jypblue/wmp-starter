/**
 * 往wx中注册命名空间
 * @param {object} self     作用域
 * @param {string} typename 当前注册的类型名称，如：Storage, Global
 */
export function registerNameSpace(self, namespace, typename){
  // 初始化 namespace
  for (let name in namespace){
    // 首字母大写
    if(namespace.hasOwnProperty(name)) {
      const capitalizeName = name.replace(/^[a-z]/, n => n.toUpperCase());
      // 往 wx 中注册 get, set, remove 方法
      ['get', 'set', 'remove'].forEach(method => {
        // 声明 wx.xx 函数
        const methodName = method + typename + capitalizeName;
        // console.log('methodName:', methodName)
        wx[methodName] = (key, value) => {
          // 参数合法性检验
          if (!key){
            return console.error(`调用方法 ${methodName} 时; key 为必传字段`);
          }

          if (method === 'get' && value){
            return console.error(`[${methodName}: ${key}] 有且仅有一个参数`);
          }

          if (method === 'set' && value === undefined){
            return console.error(`[${methodName}: ${key}] 需要两个参数`);
          }

          if (method === 'remove' && value){
            return console.error(`[${methodName}: ${key}] 有且仅有一个参数`);
          }

          return self[method](name + '.' + key, value);
        };
      });
    }
  }
}

/**
 * 数组去重
 */
export const handleArrayUnique = (arr, type) => {
  if (arr.length === 0) {
    return arr;
  } else {
    if (type) {
      let obj = {};
      const newArr = arr.reduce((item, next) => {
        if (obj[next[type]] === undefined) {
          obj[next[type]] = true;
          item.push(next);
        }
        return item;
      }, []);
      return newArr;
    } else {
      return [...new Set(arr)];
    }
  }
};

// 判断js类型
export const isType = (obj) => {
  return (obj === undefined || obj === null) ? obj : (Object.prototype.toString.call(obj).match(/\[object (.*?)\]/)[1]);
};

// 获取url查询变量
export const getQueryString = (url, name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const path = url.split('?')[1];
  const r = path.match(reg);
  if (r !== null) {
    return unescape(r[2]);
  }
  return null;
};

// 去空格
export const trim = (s) => {
  if (isType(s) !== 'String') {
    return s;
  }
  const str = s.replace(/^\s\s*/, '');
  const ws = /\s/;
  let i = str.length;
  while (ws.test(str.charAt(--i)))
    ;
  return str.slice(0, i + 1);
};

/**
* 回调函数Promise化
* 注意：本工具方法主要用于Promise化带有success和fail回调函数的函数（目前主要是微信官方api相关的方法）
* 例子：
* - wx.hideKeyboard => promisify(wx.hideKeyboard)().then((res)=>{console.log(res)})
* - wx.pageScrollTo => promisify(wx.pageScrollTo)({scrollTop: 0, duration: 0 }).then((res)=>{console.log(res)})
* @param {Function} func 传入的回调方法函数
* @param {String} success 需要resolve的回调函数名称(可自定义指定名称，默认success)
* @param {String} fail 需要reject的回调函数名称（可自定义指定名称，默认fail）
* @returns{Promise Function}
*/
export function promisify(func, success = 'success', fail = 'fail') {
  if (typeof func !== 'function') return func;
  return (args = {}) =>
    new Promise((resolve, reject) => {
      func(
        Object.assign(args, {
          [success]: resolve,
          [fail]: reject
        })
      );
    });
}


export function selectTabBar(_this, index, showTabBar = false) {
  if (typeof _this.getTabBar === 'function' && _this.getTabBar()) {
    _this.getTabBar().setData({
      showTabBar,
      selected: index
    });
  }
}

export function selectCommunityTabBar(index){
  const routes = [
    '/pages/community/community',
    '/subPack_community/pages/news/news',
    '/subPack_community/pages/topic_publish/topic_publish',
    '/subPack_community/pages/center/center',
    '/pages/index/index',
  ];
  wx.reLaunch({
    url: routes[index]
  });
}
