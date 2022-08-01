<template>
  <div class="todo-footer" v-show="total">
    <label>
<!--       <input type="checkbox" :checked="isAll" @change="changeAll"> -->
      <input type="checkbox" v-model="isAll">

    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
  export default{
    name: 'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        return this.todos.reduce((pre,current)=> pre+(current.done?1:0),0)
        },
        isAll:{
          get(){
            return this.total === this.doneTotal && this.total > 0
          },
          set(value){
            this.checkAllTodo(value)
          }
        }
      },
    methods: {
/*       changeAll(e){
        this.checkAllTodo(e.target.checked)
      }, */
      clearAll(){
        this.clearAllTodo()
      }
    },
  }
</script>

<style scoped>
  
</style>

