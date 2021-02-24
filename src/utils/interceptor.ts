import axios, { AxiosRequestConfig } from 'axios'
// import {login} from 'kwapi/dist/common/utils'


const UNLOGINCODE: Array<number> = [1005, 1003]

const creatConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
}

const service = axios.create(creatConfig)

// 请求拦截
service.interceptors.request.use(config => 
  //可自定义添加请求参数 config
  config
)

// 返回拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res && UNLOGINCODE.includes(+res.code)) {
      // login()
      console.log('login')
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  },
)

export default service
