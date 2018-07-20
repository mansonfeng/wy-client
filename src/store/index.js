/*
 * vuex核心管理对象 store模块
 * */
import  Vue  from "vue"
import  VueX from "vuex"

import  state from "./state.js"
import  getter from "./getter.js"
import  actions from "./actions.js"
import  mutations from "./mutations.js"

Vue.use(Vuex)

export  default {
  state,
  getter,
  actions,
  mutations
}



