<template>
  <div id="root">
    <img src="./assets/logo.png" alt="logo">
    <h1>你好啊,学生--{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getName="getName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(使用v-on或@) (可以用事件修饰符)-->
    <!-- <Student v-on:atguigu="demo" @demo="demo2"></Student> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(使用ref属性) -->
    <Student ref="student" ></Student>

    <Info pame="旺旺" sex="女" :age="40"/>
  </div>
</template>

<script>
//引入组件
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  import Info from './components/Info.vue'
  export default {
    name:'App',
    components:{
      School,
      Student,
      Info
    },
    data() {
      return {
        studentName:'',
      }
    },
    methods: {
      getName(name){
        console.log('App收到了学校名',name)
      },
      demo(name){
        console.log('App收到了学生名',name);
        this.studentName = name
      },
      demo2(){
        console.log('demo2事件触发了')
      }
    },
    mounted(){
      this.$refs.student.$on('atguigu',this.demo) //绑定自定义事件
    }
  }
</script>

<style>
  #root{
    border: solid 2px green;
  }
</style>