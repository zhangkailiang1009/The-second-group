import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component:()=> import('@/views/my.vue'),
    },
    {
      path: '/gr',
      name: 'gr',
      component:()=> import('@/views/gr.vue'),
    },
    {
      path: '/liuyan',
      name: 'liuyan',
      component:()=> import('@/views/liuyan.vue'),
    },
    {
      path: '/person',
      name: 'person',
      component:()=> import('@/views/person.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component:()=> import('@/views/register.vue'),
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component:()=> import('@/views/shezhi.vue'),
    },
    {
      path: '/szmm',
      name: 'szmm',
      component:()=> import('@/views/szmm.vue'),
    },
    {
      path: '/wdsc',
      name: 'wdsc',
      component:()=> import('@/views/wdsc.vue'),
    },
    {
      path: '/ykjl',
      name: 'ykjl',
      component:()=> import('@/views/ykjl.vue'),
    },
   
  ]
})
