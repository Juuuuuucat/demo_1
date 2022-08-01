// express是一种web开发框架，可以用来搭建服务器

//0、安装express
// npm install express

//1、引入express
const express = require('express')

//2、创建应用对象
const app = express()

//3、创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/', (request, response)=>{
  //设置响应
  response.send('hello,ajax')

})

//4、监听端口启动服务
app.listen(8000, ()=>{
  console.log("服务已启动，8000端口监听中...")
})

//5、运行
// node 文件