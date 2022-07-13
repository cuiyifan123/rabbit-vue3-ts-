import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { IResponseResult } from './../types/response.d'
//url地址
const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 对错误情况做点什么
    console.log(error)
    return Promise.reject(error)
  }
)
// 这里封装一个请求函数，数据在这里面脱壳
export async function request<T>(config: AxiosRequestConfig) {
  const res = await instance.request<IResponseResult<T>>(config)
  return res.data
}
