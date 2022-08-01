<template>
  <div id="root">
<!--     <Category title="美食" >
      <img src="./assets/logo.png" slot="center">
      <a href="#" slot="footer">百度</a>
    </Category>
    <Category title="游戏" >
     <ul slot="center">
      <li v-for="(list,index) in games" :key="index">{{list}}</li>
    </ul>
      <a href="#" slot="footer">百度1</a>
      <a href="#" slot="footer">百度2</a>
    </Category> -->
    <Category title="电影" >
     <template scope="att">
      {{att.films}}
      <ul>
        <li v-for="(list,index) in att.films" :key="index">{{list}}</li>
      </ul>
     </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
  export default {
    name: "App",
    components: { Category },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾'], 
        games: ['红色警戒', '穿越火线', '劲舞团'], 
    }
  },
}
</script>
<style>
  #root{
    display: flex;
    justify-content: space-around;

  }
</style>
