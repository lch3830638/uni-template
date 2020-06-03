import dckRequest from 'dck-request'

const request = dckRequest.create({ baseURL: 'http://localhost:3000' })

// const codeMessage = {
//   404: '发出的请求针对的是不存在的记录',
//   405: '接口的 HTTP 方法的有误',
//   500: '服务器发生错误。',
// }

// 请求拦截器
request.interceptors.request.use(config => {
  // 请求拦截：添加token,处理数据...
  return config
})
// 响应拦截器
request.interceptors.response.use(config => {
  // 响应拦截：数据处理、请求状态判断
  return config
}, (err) => {
  // 错误通用处理
  return Promise.reject(err)
})

export default request
