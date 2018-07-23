/*
 * vuex核心管理对象 store模块
 * */
import  Vue  from "vue"
import  Vuex from "vuex"

import  state from "./state.js"
import  getter from "./getter.js"
import  actions from "./actions.js"
import  mutations from "./mutations.js"

Vue.use(Vuex)

export  default new Vuex.Store({
  state,
  getter,
  actions,
  mutations
})



