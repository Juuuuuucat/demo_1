<template>
  <div id="root">
    <MyHeader :send="addTodo"></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import MyList from './components/MyList.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data(){
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
      }
  },
  methods:{
    addTodo(x){
      // console.log('App收到了',x)
      this.todos.unshift(x)
    },
    checkTodo(id){
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = ! todo.done
      });
    },
    deleteTodo(id){
      this.todos = this.todos.filter( (todo) => {
        return todo.id !== id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
    clearAllTodo(){
      this.todos=this.todos.filter(todo => {
        return !todo.done
      })
    }
  },
  watch: {
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
  #root{
    padding:10px;
    border: solid 1px #ccc;
  }
</style>
