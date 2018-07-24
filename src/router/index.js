import Vue from 'vue'
import Router from 'vue-router'

import Classify from '../pages/Classify/Classify.vue'
import Homepage from '../pages/Homepage/Homepage.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'

import Firstpage from '../pages/Firstpage/Firstpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Firstpage',

    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        isShow:true
      }
    },
    {
      path: '/homepage',
      component: Homepage,
      meta:{
        isShow:true
      }
    },
    {
      path: '/personal',
      component: Personal

    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        isShow:true
      }
    },
    {
      path: '/shopcart',
      component: Shopcart,
      meta:{
        isShow:true
      }
    },
    {
      path: '/firstpage',
      component: Firstpage
    }
  ]
})
