import Vue from 'vue'
import Router from 'vue-router'

import Classify from '../pages/Classify/Classify.vue'
import Homepage from '../pages/Homepage/Homepage.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/homepage',
      component: Homepage
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/shiwu',
      component: Shiwu
    },
    {
      path: '/shopcart',
      component: Shopcart
    }
  ]
})
