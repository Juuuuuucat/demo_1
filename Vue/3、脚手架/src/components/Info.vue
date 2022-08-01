<template>
  <div>
    <h1>展示个人信息</h1>
    <h2>姓名：{{pame}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{myAge}}</h2>
    <button @click="changeAge">点我年龄+1</button>
  </div>
</template>

<script>
export default {
  name: 'InfoN',
  data() {
    return {
      myAge:this.age
    }
  },
  methods:{
    changeAge(){
      this.myAge++
    }
  },
/*//简单声明接收  
  props:['pame','sex','age']  
*/

/*//接受的同时对数据进行类型限制
  props:{
    pame:String,
    sex:String,
    age:Number,
  } */

// 接受的同时对数据进行类型限制+默认值的指定+必要性的限制
  props:{
    pame:{
      type:String,
      required:true
    },
    sex:{
      type:String,
      required:true,
    },
    age:{
      type:Number,
      required:true,
      default:18
    }
  }
}
</script>

<style>
  .demo{
    border:solid 1px gray
  }
</style>

