import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false

// 配置axios

import axios from '@/util/request.js'
// axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http=axios;
Vue.prototype.$axios=axios;

// 配置echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

// 配置

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)


import TreeTable from 'vue-table-with-tree-grid'

 //全局注册组件
 Vue.component('tree-table', TreeTable)


 import Vant from 'vant';
 import 'vant/lib/index.css'; 
 Vue.use(Vant);

 require('@/http/mockApi.js')


 import { Lazyload } from 'vant';
 
 Vue.use(Lazyload);
router.beforeEach((to,from,next)=>{
  // let zgj_admin=localStorage.getItem('zgj_admin')
  // // console.log(zgj_admin)
  // console.log(to)
  // if(to.path=='/zgjadmin/login'){
  //  if(zgj_admin!=null){
  //    next('/zgjadmin/index')
  //  }
  // }else{
  //   if(zgj_admin==null){
  //     next('/zgjadmin/login')
  //   }
  // }
  // // 面包屑
  // if(to.hasOwnProperty('meta')){
  //   store.commit('setbread',to.meta)
  // }
  // 面包屑
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
