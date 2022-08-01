import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
Vue.config.productionTip = false
//使用插件

new Vue({
  render: h => h(App),
  store, //配置项添加store
}).$mount('#app')

