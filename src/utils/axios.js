import axios from "axios"
const http = axios.create({
  baseURL: "",
  timeout: 15000,
});

//请求拦截器(请求发出去了,或者没有发出去)
http.interceptors.request.use((config) => {
  //提供了每次请求发出去前修改配置的机会
  return config//修改后再发请求
}, (err) => { console.log(err) })//打印配置错误


//响应拦截器(收到响应,没收到响应)
http.interceptors.response.use((response) => {
  console.log(response)
}, (err) => {
  console.log(err)
})

export default http
