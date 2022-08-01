<template>
  <div class="demo">
    <h2>学校名称：{{ name}}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default{
    name: 'SchoolName',
    data() {
      return {
        name: '旺旺学院123',
        address: 'Bili',
      }
    },
    mounted() {
      this.pubID = pubsub.subscribe('hello',(eventName,data)=>{
        console.log(this)
        console.log('有人发布了hello消息，消息的回调执行了',eventName,data)
      })
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubID)
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

