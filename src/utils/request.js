import {
  promisify,
  isType
} from 'utils/util';
import config from '../config';



const wxpRequest = promisify(wx.request);




// 请求函数
const wxFetch = async (options) => {
  const { url, showLoading, complete, data } = options;


  const requestHost = config.host;
  const header = {
    'content-type': 'application/x-www-form-urlencoded',
    '_referer'    : data._referer,
  };

  try {
    const params = {
      url: requestHost + url,
      header,
      method: 'POST',
      data
    };
    // 请求成功
    const response = await wxpRequest(params);
    return response.data;

  } catch (error) {
    // 请求失败
    return Promise.reject(error);
  } finally {
    complete && complete();
    showLoading && wx.hideLoading();
  }
};

//  格式化请求参数格式
function stringifyRequestData(data){
  Object.keys(data).forEach(key=>{
    if (data.hasOwnProperty(key)) {
      if (isType(data[key]) === 'Object' || Array.isArray(data[key])) {
        data[key] = JSON.stringify(data[key]);
      }
    }
  });
  return data;
}

export default async function $fetch (params) {
  let { url, data, showLoading = false } = params;
  // 如果接口请求参数对象中有参数是对象或者数组，自动将它JSON.stringify
  const dataType = isType(data);
  switch(dataType) {
    case 'Array':
      data = data.map(item => {
        return stringifyRequestData(item);
      });
      break;
    case 'Object':
      data = stringifyRequestData(data);
      break;
    default:
      console.error('请求接口数据类型不对', data);
      return false;
  }

  try {
    const res = await wxFetch({...params, url, data, showLoading});
    return res.length === 1 ? res[0] : res;
  } catch (error) {
    return Promise.reject(error);
  }
};


