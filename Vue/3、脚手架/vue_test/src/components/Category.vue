<template>
  <div class="con">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <!-- <slot name="center">我是一个默认值，当没有传递具体结构时，就会出现</slot>
    <hr>
    <slot name="footer">当没有传递具体结构时，就会出现</slot> -->
    <slot :films="films"></slot>

  </div>
</template>

<script>
  export default{
    name: 'CateGory',
    data() {
      return {
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']

      }
    },
    props:['title','listData']
  }
</script>

<style scoped>
  h3{
    background-color: #ccc;
    text-align: center;
  }
  .con{
    width: 200px;
    height: 200px;
    background-color: skyblue;
    border: solid 1px black
  }
  img{
    width: 100px;

  }
</style>
