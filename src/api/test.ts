import {get, post} from '@/utils/request'

export function doLottery(params: any){
  return post({
    url: '/lottery/do',
    params,
  })
}

export function getDetail(params: any){
  return get({
    url: '/lottery/detail',
    params,
    options:{
      loading: true,
    }
  })
}