<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="hh" appear>
      <h1 v-show="isShow" >你好啊</h1>
    </transition>  
    <transition name="aa" appear>
      <h1 v-show="isShow" >hahahaha</h1>
    </transition> 
  </div>
</template>

<script>
  export default{
    name: 'TestCom',
    data() {
      return {
        isShow:true
      }
    }
  }
</script>

<style scoped>
  h1{
    background-color: pink;
  }
  .hh-enter-active{
    animation: atguigu 0.5s
  }
  .hh-leave-active{
    animation: atguigu 0.5s reverse
  }
  .aa-enter-active{
    animation: atguigu 0.5s 
  }
  .aa-leave-active{
    animation: atguigu 0.5s reverse
  }
  @keyframes atguigu{
    from{
      transform: translateX(-100%)
    }
    to{
      transform: translateX(0px)
    }
  }
</style>

