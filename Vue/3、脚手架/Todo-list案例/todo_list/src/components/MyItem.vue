<template>
  <li class="item" >
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <span>{{item.title}}</span>
    </label>
    <button class="edit" @click="handleEdit(item.id)" >编辑</button>
    <button class="del" @click="handleDelete(item.id)">删除</button>
  </li>
</template>

<script>
  export default{
    name: 'MyItem',
    props:['item','checkTodo','deleteTodo'],
    methods: {
      handleCheck(id){
        this.checkTodo(id)
      },
      handleDelete(id){
        if(confirm('确定删除吗')){
          this.deleteTodo(id)
        }
      },
      handleEdit(){

      }
    },
  }
</script>

<style scoped>
.item{
  list-style: none;
  width: 400px;
  border-bottom: solid 1px gray;
  margin-left: -40px;
}
.item:hover{
  background-color: #ccc;
}
.edit{
  margin-left: 150px;
  background-color: skyblue;
}
.del{
  margin-left: 5px;
  background-color: rgb(223, 84, 84);
}
button{
  display: none;
}
.item:hover button{
    display: inline;
  }
</style>

