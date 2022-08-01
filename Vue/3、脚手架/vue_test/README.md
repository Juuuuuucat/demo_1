## ref 属性

  1、被用来给元素或子组件注册引用信息（id的替代者）
  2、应用在html标签上获取的是真实DOM元素；应用在组件标签上是组件实例对象
  3、使用方式：
    打标识：<h1 ref="xxx"></h1>
    获取标识元素：this.$refs.xxx

## props 属性

  功能：让组件接受外部传过来的数据
  (1).传递数据  <Demo name="xxx">
  (2).接受数据：
      第一种方式（只接收）props:['xxx']
      第二种方式（限制类型）props:{xxx:String}
      第三种方式（类型、必要性、默认值）
          props:{
            xxx:{
              type:String,
              required:true,
              default:'默认值'
            }
          }
  备注：props是只读的，Vue底层会监测你对props的修改，如果修改就会有警告。如果确实需要修改，可以将props的内容赋值给data，然后去修改data中的数据

## mixin混入  (就是复用配置)

  功能：可以把多个组件共用的配置提取成一个混入对象
  使用方式：
    第一步：定义
        {
          data(){},
          methods:{}
        }
    第二步：使用
        （1）全局混入：Vue.mixin(xxx)
        （2）局部混入：mixins:['xxx']

## plugins插件

  功能：用于增强Vue
  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
  使用方式：
    第一步：定义
      export default {
        install(Vue,options){
          //可以添加全局过滤器、全局指令、添加实例方法等等..
        }
      }
    第二步：引入使用 Vue.use(xxx)

## scoped样式

  多个组件的样式，如果名称相同(class)，会有冲突，会显示后引入的组件的样式，添加scoped可以让样式在局部生效，防止冲突
  写法：<style scoped>

## 组件自定义事件

适用于子组件给父组件传递数据
使用场景: A是父组件,B是子组件,B想给A传数据,那么就要在A中给B绑定自定义事件 (且事件的回调在A中)
如何绑定?
  1. 在父组件中: <Demo @atguigu="test"/>
  2. 在父组件中: <Demo ref="test"/> 然后编写mounted方法 this.$refs.demo.$on('atguigu',事件回调)
  3. 若想让自定义事件只能触发一次,可以使用once修饰符,或$once方法

触发自定义事件: 在子组件中 this.$emit('atguigu',数据)

解绑自定义事件: this.$off('atguigu')

组件上也可以绑定原生DOM事件,需要native修饰符

注意: 通过this.$refs.xxx.$on('atguigu',事件回调) 绑定自定义事件时,回调要么配置在methods中,使用this;要么用箭头函数,否则this指向会出问题

## 全局事件总线

一种组件间通信的方式，适用于任意组件间通信
1、安装全局事件总线：
  new Vue({
    ....
    beforeCreate(){
      Vue.prototype.$bus = this //$bus就是当前应用的vm
    }
    ....
  })
2、使用事件总线
  （1）、接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
  methods:{
    demo(data){...}
  }
  ...
  mounted(){
    this.$bus.$on('xxx',this.demo)
  }
  （2）、提供数据：this.$bus.$emit('xxx',数据)
3、最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布（在Vue中不如全局总线用的多）

一种组件间通信的方式，适用于任意组件间通信
使用步骤：
  1、安装pubsub：npm i pubsub-js
  2、引入：import pubsub from 'pubsub-js'
  3、接收数据：A想要接收数据，则在A中订阅消息，订阅的回调在A自身
    methods(){
      demo(data){...}
    }
    ...
    mounted(){
      this.pubID = pubsub.subscribe('xxx',this.demo) //订阅消息
    }
  4、提供数据：pubsub.publish('xxx',数据)
  5、最好在beforeDestroy钩子中，用pubsub.unsubscribe(this.pubID)去取消订阅

## $nextTick

语法：this.$nextTick(回调函数)
作用：在下一次DOM更新结束后执行回调函数
什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过渡与动画

作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
写法：
  1、准备好样式
    (1). 元素进入的样式
      v-enter：进入的起点
      v-enter-active：进入过程中（如果是动画，只用这一个可以；过渡需要另外两个配合）
      v-enter-to：进入的终点
    (2). 元素离开的样式
      v-leave：离开的起点
      v-leave-active：离开过程中
      v-leave-to：离开的终点
  2、使用<transition>包裹要过渡的元素，还要配置name属性
    <transiton name="hello">
      <h1 v-show="isShow">你好啊</h1>
    </transiton>
  3、备注：若有多个元素需要过渡，则需要使用<transiton-group> ,且每个元素都要指定key值

## Vue脚手架配置代理

方法一
  在vue.config.js中添加如下配置
  devServer: {
    proxy: '请求url'
  }
说明：配置简单，请求资源时，直接发给8080即可，代理可以自动帮你转发给上面的url，可以接收响应数据，这是因为服务器之间是不存在同源策略的
缺点：不能配置多个代理，不能灵活的控制请求是否走代理
工作方式：当请求了前端(public文件)存在的资源时，优先匹配前端资源，不存在的资源才会将请求转发给服务器

方法二
  在vue.config.js中配置具体代理规则
  module.exports = {
    devServer: {
      proxy: {
        '/api': { //匹配所有以'/api'开头的请求路径
          target:'请求url', //代理目标的基础路径
          pathRewrite:{'^/api':''},
          ws:true, //webSocket
          changeOrigin:true //默认为true，服务器收到的请求头中的host为与请求url同域（撒谎）
        }
      }
    }
  }
说明：在请求资源时，也是直接发给8080，配置略微繁琐，请求资源时必须加前缀
优点：可以配置多个代理，且可以灵活的控制请求是否走代理

## slot插槽

作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ===> 子组件
分类：默认插槽、具名插槽、作用域插槽
使用方式：
1、默认插槽
  在父组件中
  <Category>
    <div>html结构</div>
  </Category>
  在子组件中：
    <template>
      <div>
        <!-- 定义插槽 -->
        <slot>插槽默认内容</slot>
      </div>
    </template>
2、具名插槽
  在父组件中：
  <Category>
    <template slot="center">
      <div>html结构11</div>
    </template>
    <template v-slot:footer>
      <div>html结构22</div>
    </template>
  </Category>
  在子组件中：
    <template>
      <div>
        <!-- 定义插槽 -->
        <slot name="center">插槽默认内容</slot>
        <slot name="footer">插槽默认内容</slot>
      </div>
    </template>
3、作用域插槽 
理解：数据在组件自身，但根据数据生成的结构需要组件的使用者来决定（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
  父组件中：
  <Category>
    <template scope="scopeData">
      <ul>
        <li v-for="g in scopeData.games" :key="g">{{g}}</li>
      </ul>
    </template>
  </Category>
  子组件中：
    <template>
      <div>
        <!-- 定义插槽 -->
        <slot :games="games"></slot>
      </div>
    </template>
    <script>
      export default {
        name:'Category',
        props:['title'],
        //数据在子组件自身
        data(){
          return {
        games: ['红色警戒', '穿越火线', '劲舞团']
          }
        }
      }
    </script>