<template>
  <div class="todo-header">
    <input type="text" placeholder="输入任务名称，按回车键确认"  @keyup.enter="add" v-model="title">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
//这个库可以生成唯一id
  export default{
    name: 'MyHeader',
    data() {
      return {
        title: '',
      }
    },
    methods: {
      add(){
        if(!this.title.trim()){
          return
        }else{
          //将用户的输入包装成一个item对象
          const item = {
            id:nanoid(),
            title:this.title,
            done:false,
          }
          //这里调用父组件传过来的函数，添加对象
          this.send(item)
          //清空输入
          this.title=''
        }
      }
    },
    props:['send']
  }
</script>

<style scoped>
  input{
    width: 90%;
  }
  input:focus{
    outline: solid 2px #51c9ff
  }
</style>

