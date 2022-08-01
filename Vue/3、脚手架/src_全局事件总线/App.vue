<template>
  <div id="root">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{
    School,
    Student,
  },
}
</script>

<style>
  #root{
    border: solid 2px rgb(0, 128, 0);
  }
</style>