//1. 导入axios对象
import axios from  "axios";

 //导入进度条插件
 import NProgress from 'nprogress'
 //导入进度条样式
 import 'nprogress/nprogress.css'
 
//2. 用axios创建一个axios的实例
const Server = axios.create({
    baseURL: "",//根域名
    timeout: 3000,//超时时间
});
Server.interceptors.request.use((config)=>{
    let token=JSON.parse(localStorage.getItem('zgj_admin'))
    //当进入request拦截器，表示发送了请求，我们就开启进度条
  NProgress.start()
    // config.headers.Authorization=token
    // console.log(token)
    // config.headers.token=token
    return config
}),(error)=>{

    return Promise.reject(error)
}

// 响应拦截器
Server.interceptors.response.use((response)=>{
     //当进入response拦截器，表示请求已经结束，我们就结束进度条
  NProgress.done()
    return response.data
}),(error)=>{
    return Promise.reject(error)
}

export default Server