<template>
  <!-- 组件的结构 -->
  <div class="demo">
      <h2>姓名：{{personName}}</h2>
      <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等等）
   const student = Vue.extend({ 
      data(){
        return {
          personName: '张三',
          age: '18',
        }
      }
  })
  export default student
  // 简写形式
  // export default {
  //         data(){
  //       return {
  //         personName: '张三',
  //         age: '18',
  //       }
  //     }
  // }
</script>

<style>
    /* 组件的样式 */
  .demo{
    background-color: #666;
  }
</style>
