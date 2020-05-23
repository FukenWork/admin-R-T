import axios from 'axios'
import { message } from 'antd';

/**
 * 请求拦截器
 */

axios.interceptors.request.use((config) => {
  return config
})


/**
 * 相应拦截器
 */
axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    console.log(err.response);
    if (err.response) {
      switch (err.response.status) {
        case 401:
         return message.error('没有授权')
        case 400:
          return message.error('参数错误')
      }
    } else {
      message.error('服务器错误')
    }
    return Promise.reject(err)
  })