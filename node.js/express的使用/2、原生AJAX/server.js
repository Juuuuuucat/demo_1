//0、安装express
// npm install express

//1、引入express
const express = require('../node_modules/express')

//2、创建应用对象
const app = express()

//3、创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装

//get请求
app.get('/server', (request, response)=>{
  //设置响应头，允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  // response.send('服务器成功收到get请求')

  //响应一个数据
  const data = {
    name: 'wang',
    age: 18,
    shou: true
  }
  let str = JSON.stringify(data)
  response.send(str)
})

//post请求 all表示接受所有请求
app.post('/server',(request, response)=>{
  //设置响应头，允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')

  response.setHeader('Access-Control-Allow-Headers','*')

  //设置响应体
  response.send('服务器成功收到post请求')
})
//4、监听端口启动服务
app.listen(8000, ()=>{
  console.log("服务已启动，8000端口监听中...")
})

//延时响应
// app.get('/delay',(request, response)=>{
//   response.setHeader('Access-Control-Allow-Origin','*')
  
//   setTimeout(() => {
//     response.send('延时响应')
//   }, 3000);
// })

//axios服务
// app.all('/axios',(request, response)=>{
//   //设置响应头，允许跨域
//   response.setHeader('Access-Control-Allow-Origin','*')

//   response.setHeader('Access-Control-Allow-Headers','*')

//   //设置响应体
//   response.send('服务器成功收到axios请求')
// })
//5、运行
// node 文件