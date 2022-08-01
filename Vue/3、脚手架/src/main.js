
// 该文件是整个项目的入口文件

import Vue from 'vue' //这里引入的vue是runtime版本，也就是精简后的，所以下面Vue实例中写的跟之前的不同
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false

Vue.use(plugins)

new Vue({
  render: h => h(App),
}).$mount('#app')

/* 
  关于不同版本的Vue：
    1、vue.js是完整版的Vue，包含：核心功能+模板解析器
    2、Vue.runtime.xx.js是运行版的Vue，只包含：核心功能；没有解析器

  由于Vue.runtime.xx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接受到的createElement函数去指定具体内容
*/