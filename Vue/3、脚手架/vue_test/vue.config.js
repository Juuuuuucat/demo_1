const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启代理服务器（方式一）
/*   devServer: {
    proxy:'http://localhost:8000' //这里是目标网址
  } */

  // //开启代理服务器（方式二）
  devServer: {
    proxy:{
      '/a':{ //请求地址应该在端口号后面有这个/api之后再是请求的地址
        
        target:'http://localhost:8000',
        pathRewrite:{'^/a':''},
        ws:true,  //用于支持websocket
        changeOrigin:false
      }
    }
  }

})
