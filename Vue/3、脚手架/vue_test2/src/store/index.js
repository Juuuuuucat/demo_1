import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //use之后在Vue实例中就可以有一个store的配置项

// 该文件用于创建Vuex中最为核心的store
//准备actions-用于响应组件中的动作
const actions = {
  // jia(miniStore,value){
  //   miniStore.commit('JIA',value)
  // },
  // jian(miniStore,value){
  //   miniStore.commit('JIAN',value)
  // },
  jiaOdd(miniStore,value){
    if(miniStore.state.sum % 2 != 0){
      miniStore.commit('JIA',value)
    }
  },
  jiaW(miniStore,value){
    setTimeout(()=>{
     miniStore.commit('JIA',value)
    },500)
  }
}
//准备mutations用于操作数据(state)
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },

}
//准备state用于存储数据
const state = {
  sum:0,
}

const getters = {
  daSum(state){
    return state.sum * 10
  }
}
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

