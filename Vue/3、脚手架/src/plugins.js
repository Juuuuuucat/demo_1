export default {
  install(Vue){
    // console.log('installlll',Vue)

    //全局过滤器
    Vue.filter('mySlice',function(val){
      return val.slice(0,3)
    })

    //定义全局指令
    Vue.directive('fbind',{  //定义全局指令了
      // 指令与元素成功绑定时（初始）
      bind(element,binding){
        element.value = binding.value
      },
      //指令所在元素被插入页面时
      inserted(element){
        element.focus()
      },
      //指令所在的模板被重新解析时
      update(element,binding){
        element.value = binding.value
      }
    })
    //还可以定义混入、给Vue原型上添加方法
  }
}
