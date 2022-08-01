<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice}}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示</button>
    <button @click="sendName">传值给父组件App</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等）
import {mixin} from '../mixin.js'
  export default{
    name: 'SchoolName',
    data() {
      return {
        name: '旺旺学院123',
        address: 'Bili',
      }
    },
    mixins:[mixin],
    props:['getName'],
    methods: {
      sendName(){
        this.getName(this.name)
      }
    },
  }
</script>

<style scoped>
/* 添加scoped属性就是让这个样式只在这个组件中生效 */
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>

