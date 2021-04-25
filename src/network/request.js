import axios from 'axios'

// export function request (config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://api-toutiao-web.itheima.net',
//     timeout: 5000
//   })
//   // 2.1 请求拦截
//   instance.interceptors.request.use(config => {
//     // 拦截成功输出
//     // console.log(config)
//     return config
//   }, err => {
//     // 拦截失败输出
//     console.log(err)
//     return err
//   })

//   // 2.2 响应拦截
//   instance.interceptors.response.use(res => {
//     // console.log(res)
//     return res.data
//   }, err => {
//     console.log(err)
//     return err
//   })
//   // 3.发送真正的网络请求
//   return instance(config)
// }

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'
})

export default request
