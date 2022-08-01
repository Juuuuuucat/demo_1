<template>
  <ul class="todo-main">
    <MyItem 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :item="todoObj" 
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"></MyItem> 
  </ul>
</template>

<script>
  import MyItem from './MyItem.vue'
  export default{
    name: 'MyList',
    props:['todos','checkTodo','deleteTodo'],
    components:{
      MyItem
    },
  }
</script>

