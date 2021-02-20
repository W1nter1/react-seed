
import Cookies from 'js-cookie';

import {TrackConfig} from '@/interfaces'
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

/** 设置页面标题是否支持刷新分享
 * @param {string} title
 * @param {boolean} refresh
 * @param {boolean} share
 */
export const setPageInfo = (title: string, refresh = false, share = false) => {
  if ((window as any).kwapp) {
    (window as any).kwapp.onReady(() => {
      (window as any).kwapp.allowRefreshOrShare(refresh, share);
    });
    (window as any).kwapp.setTitle(title);
    document.title = title;
    (window as any).kwapp.allowRefreshOrShare(refresh, share);
    setTimeout(() => {
      (window as any).kwapp.setTitle(title);
      (window as any).kwapp.allowRefreshOrShare(refresh, share);
    }, 500);
  }
};

// 环境变量
const source = Cookies.get('source');
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
export const isKwAndroid = source === 'android';  // kw app中是否是安卓终端
export const isKwIOS = source === 'ios';  // kw app中是否是安卓终端
export const isApp = isKwAndroid || isKwIOS;
export const isWechat = async () => isWeixin && (await getWxEnv()) === 'wechat';
export const isMiniprogram = async () =>
  isWeixin && (await getWxEnv()) === 'miniprogram';
export const isWebAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
export const isWebIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  //判断是否是 iOS终端

// 浏览埋点
export const trackView = (config: TrackConfig) => {
  const { pageLevelId, pageParam, positionParam } = config
  if (pageLevelId) {
    (window as any).track && (window as any).track._launch({
      pageLevelId,
      logType: 10000,
      positionParam: positionParam ? JSON.stringify({
        ...positionParam,
      }) : undefined,
      pageParam,
    })
  }
}
// 点击埋点
export const trackClick = (config: TrackConfig) => {
  const { pageLevelId, clickId, positionParam, pageParam, positionId } = config
  if (clickId) {
    (window as any).track && (window as any).track._launch({
      pageLevelId,
      positionId: positionId || '',
      positionParam: positionParam ? JSON.stringify({
        ...positionParam,
      }) : undefined,
      logType: 20000,
      clickId,
      pageParam: pageParam || undefined,
    })
  }
}

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