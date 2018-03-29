import axios from 'axios'
import * as config from '../config.js'
import querystring from 'querystring'

const ax = axios.create({
  timeout: config.TIMEOUT,
  baseURL: config.API_ROOT
})
// 设置默认请求头
ax.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
// ax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 拦截器
ax.interceptors.request.use(config => {
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete' ||
    config.method === 'patch'
  ) {
    console.log(config.method)
    config.data = querystring.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 返回状态
ax.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default ax
