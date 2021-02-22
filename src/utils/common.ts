
import Cookies from 'js-cookie';

const wx = require('weixin-js-sdk');
const u = navigator.userAgent;

/** 获取页面参数
 * @param {Object} name
 * @return {string} res
 */
export function getQuery(name: string) {
  let str = window.location.search.substring(1)
  let strArray = str.split('&')
  for (let i = 0, length = strArray.length; i < length; i++) {
    let item = strArray[i].split('=')
    if (item[0] === name) {
      return item[1]
    }
  }
  return ''
}

// 环境变量
export const isWeixin = /MicroMessenger/i.test(navigator.userAgent);
function getWxEnv() {
  return new Promise((resolve) => {
    if (!wx) resolve('wechat');
    wx.miniProgram.getEnv((res: any) => {
      if (res.miniprogram) {
        resolve('miniprogram');
      } else {
        resolve('wechat');
      }
    });
  });
}

export const isWechat = async () => isWeixin && (await getWxEnv()) === 'wechat';
export const isMiniprogram = async () =>
  isWeixin && (await getWxEnv()) === 'miniprogram';
export const isWebAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
export const isWebIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  //判断是否是 iOS终端


export const getScrollTop = ()=> {
  let scroll_top: number = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
      scroll_top = document.documentElement.scrollTop;
  }
  else if (document.body) {
      scroll_top = document.body.scrollTop;
  }
  return scroll_top;
}