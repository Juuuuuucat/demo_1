<template>
  <div class="demo">
    <h2>学校名称：{{ name}}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
  export default{
    name: 'SchoolName',
    data() {
      return {
        name: '旺旺学院123',
        address: 'Bili',
      }
    },
    mounted() {
      this.$bus.$on('hello',(value)=>{
        console.log('school收到了',value)
      })
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

