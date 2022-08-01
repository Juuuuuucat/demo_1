const express = require('express');
const router = require('./模块化路由');
// 1、导入express
const app = express();
// 2、创建web服务器
// app.get('/user', function (req, res) { //URL是客户端请求的URL地址；后面是请求对应的处理函数，其中req是请求对象，res是响应对象
// //也叫挂载路由
//     res.send({
//         name:'as',
//         age:20
//     });
// })
app.use(router); //注册路由模块
// app.use('/file', router); 可以在注册的同时添加统一的访问前缀
// app.use(express.static('./clock')); //托管静态资源

app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
})
    // 3、调用app.listen(端口号, 启动成功后的回调函数)，启动服务器