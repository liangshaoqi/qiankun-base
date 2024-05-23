import { extend, RequestOptionsInit } from 'umi-request'

// 定义通用的响应格式
interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 创建实例
const request = extend({
  prefix: '/api', // 统一的请求前缀
  timeout: 10000, // 超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

// 请求拦截
request.interceptors.request.use((url, options: RequestOptionsInit) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      // todo: 格式待定
      Authorization: 'Bearer ' + token
    }
  }
  return {
    url,
    options
  }
})

// 响应拦截
request.interceptors.response.use((response, options) => {
  return response;
})

export const get = async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
  return request.get(url, { params });
}


// todo: 请求终止,错误处理
export default {}