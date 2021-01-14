import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/index"
    },
    //详情页面
    {
      path: "/detail",
      name: "/detail",
      component: r => require.ensure([], () => r(require("@/components/detail")), 'demo'),
    },
    //课程详细
    {
      path: "/detail1",
      name: "/detail1",
      component: r => require.ensure([], () => r(require("@/components/detail1")), 'demo'),
    },
    //登陆
    {
      path: "/login",
      name: "/login",
      component: r => require.ensure([], () => r(require("@/views/login/login")), 'demo'),
    },
    //主页面
    {
      path: "/index",
      name: "/index",
      component: r => require.ensure([], () => r(require("@/views/index/index")), 'demo'),
      children:[
        {
          path: "/home",
          name: "/home",
          component: r => require.ensure([], () => r(require("@/views/index/home")), 'demo'),
        },
        {
          path: "/course",
          name: "/course",
          component: r => require.ensure([], () => r(require("@/views/index/course")), 'demo'),
        },
        {
          path: "/appointment",
          name: "/appointment",
          component: r => require.ensure([], () => r(require("@/views/index/appointment")), 'demo'),
        },
        {
          path: "/practice",
          name: "/practice",
          component: r => require.ensure([], () => r(require("@/views/index/practice")), 'demo'),
        },
        {
          path: "/my",
          name: "/my",
          component: r => require.ensure([], () => r(require("@/views/index/my")), 'demo'),
        },
        //路由重定向
        {
          path:"/index",
          redirect:"/home",
        }
      ]
    },
   
  ]
})
