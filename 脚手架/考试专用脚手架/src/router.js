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
    //登入
    {
      path: '/my',
      name: 'my',
      component:()=> import('@/views/my.vue'),
    },
    //登入后跳转
    {
      path: '/person',
      name: 'person',
      component:()=> import('@/views/person.vue'),
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component:()=> import('@/views/register.vue'),
    },
    //设置
    {
      path: '/shezhi',
      name: 'shezhi',
      component:()=> import('@/views/shezhi.vue'),
    },
    //约课记录
    {
      path: '/ykjl',
      name: 'ykjl',
      component:()=> import('@/views/ykjl.vue'),
    },
    //我的收藏
    {
      path: '/wdsc',
      name: 'wdsc',
      component:()=> import('@/views/wdsc.vue'),
    },
    //个人
    {
      path: '/gr',
      name: 'gr',
      component:()=> import('@/views/gr.vue'),
    },
    //设置密码
    {
      path: '/szmm',
      name: 'szmm',
      component:()=> import('@/views/szmm.vue'),
    },
  ]
})
