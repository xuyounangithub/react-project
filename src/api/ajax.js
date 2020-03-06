// 能发送异步ajax请求的函数模块   封装axios库 函数的返回值是Promise对象；

import axios from "axios";

import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === 'GET') {//get请求
      promise = axios.get(url, {
        params: data
      })
    } else {//post请求
      promise = axios.post(url, data);
    }
    //如果成功调用resolve；
    promise.then(response => {
      resolve(response)
    }).catch(error => {
      message.error('请求出错了', error.message);
    })
    //如果失败就提示异常信息；
  })
}
