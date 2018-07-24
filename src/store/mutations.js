/**
 * Created by dell on 2018/7/20.
 */
import  Vue from 'vue'

import {
  RECEIVE_NAVCATES,RECEIVE_FOCUSLISTS,RECEIVE_TAGLISTS,RECEIVE_FIRSTNEWS,RECEIVE_GOODSELECTEDS,
  RECEIVE_SPECIALSELECTEDS,RECEIVE_GOODJUJIAS,

  RECEIVE_SUMMERGIRLS,RECEIVE_SHIWUCAROUSELS,RECEIVE_RECOMMENDS,RECEIVE_TENTIMECAROUSELS,RECEIVE_YANXUANZHENPS,
  RECEIVE_YANXUANLOOKS,RECEIVE_MORES,

  RECEIVE_CLASSIFYS,
}from "./mutation_types"

export  default {
  [RECEIVE_NAVCATES] (state,{navCates}){
    state.navCates = navCates
  },
  [RECEIVE_FOCUSLISTS] (state,{focusLists}){
    state.focusLists = focusLists
  },
  [RECEIVE_TAGLISTS] (state,{tagLists}){
    state.tagLists = tagLists
  },
  [RECEIVE_FIRSTNEWS] (state,{firstNews}){
    state.firstNews = firstNews
  },
  [RECEIVE_GOODSELECTEDS] (state,{goodSelecteds}){
    state.goodSelecteds = goodSelecteds
  },
  [RECEIVE_SPECIALSELECTEDS] (state,{specialSelecteds}){
    state.specialSelecteds = specialSelecteds
  },
  [RECEIVE_GOODJUJIAS] (state,{goodJuJias}){
    state.goodJuJias = goodJuJias
  },

  [RECEIVE_SUMMERGIRLS] (state,{summerGirls}){
    state.summerGirls = summerGirls
  },
  [RECEIVE_SHIWUCAROUSELS] (state,{shiWuCarousels}){
    state.shiWuCarousels = shiWuCarousels
  },
  [RECEIVE_RECOMMENDS] (state,{recommends}){
    state.recommends = recommends
  },
  [RECEIVE_TENTIMECAROUSELS] (state,{tenTimeCarousels}){
    state.tenTimeCarousels = tenTimeCarousels
  },
  [RECEIVE_YANXUANZHENPS] (state,{yanXuanZhenPs}){
    state.yanXuanZhenPs = yanXuanZhenPs
  },
  [RECEIVE_YANXUANLOOKS] (state,{yanXuanLooks}){
    state.yanXuanLooks = yanXuanLooks
  },
  [RECEIVE_MORES] (state,{mores}){
    state.mores = mores
  },

  [RECEIVE_CLASSIFYS] (state,{classifys}){
    state.classifys = classifys
  },
}
