<template>
  <div class="demo">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      age: 18,
    }
  },
  methods:{
    sendStudentName(){
      pubsub.publish('hello',666)
    }
  },
}
</script>

<style>
.demo {
  background-color: pink;
}
</style>
