/**
 * Created by dell on 2018/7/20.
 */
import  Vue from 'vue'

import {
  RECEIVE_NAVCATES,

}from "./mutation_types"
export  default {
  [RECEIVE_NAVCATES] (state,{navCates}){
    state.navCates = navCates
  },
}
