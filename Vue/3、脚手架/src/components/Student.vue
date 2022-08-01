<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2 ref="aage">年龄：{{ age }}</h2>
    <button @click="showName">点我提示</button>
    <button @click="sendName">点我传递数据给App</button>
    <button @click="unbind">解绑传递数据的事件</button>
    <!-- <button @click="showD">点我输出上方DOM</button> -->
  </div>
</template>

<script>
import {mixin} from '../mixin.js'
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      age: 18,
    }
  },
  mixins:[mixin],
  methods: {

/*     showD() {
      console.log(this.$refs.aage) //获取到的是真实DOM元素
    } */
    sendName(){
      //触发student组件实例身上的atguigu事件并传参数
      this.$emit('atguigu',this.name)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu') //解绑这个自定义事件
      // this.$off(['atguigu','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有自定义事件
    }
  }
}
</script>

<style>
.demo {
  background-color: pink;
}
</style>
