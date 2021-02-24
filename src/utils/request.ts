import qs from 'qs'
import { Toast } from 'antd-mobile'
import service from './interceptor'


interface OPTION_CONFIG {
  loading?: boolean;
  error?: boolean;
}
interface REQUEST_CONFIG {
  url: string;
  params?: any;
  options?: OPTION_CONFIG;
}
function request(url: string, params: any, options: any, method: string) {  
  return new Promise((resolve, reject) => {
    let data = {}
    if (options && options.loading) Toast.loading('', 0, () => { }, true)
    if (method === 'get') data = { params }
    if (method === 'post') data = {data: qs.stringify(params)}
    const config: any = {
      url,
      method,
      ...data,
    }
    service(config).then(res => resolve(res)).catch((error) => {
      if (options && options.error) Toast.info(error.message)
      reject(error)
    }).finally(() => {
        Toast.hide()
    })
  })
}


// 封装GET请求
export function get(data: REQUEST_CONFIG) {
  const { url, params, options } = data
  return request(url, params, options, 'get')
}
// 封装POST请求
export function post(data: REQUEST_CONFIG) {
  const { url, params, options } = data
  return request(url, params, options, 'post')
}