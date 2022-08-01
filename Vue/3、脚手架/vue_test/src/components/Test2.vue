<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow" >你好啊</h1>
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
    transition: 0.5s
  }
  /* 进入的起点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%)
  }
  /* 进入的终点 */
  .hello-enter-to,.hello-leave{
    transform: translateX(0px)
  }


</style>

