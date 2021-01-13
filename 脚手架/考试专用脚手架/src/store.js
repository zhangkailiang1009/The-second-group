import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bread:[''],
    user:'',
    cart:[]
  },
  mutations: {
    // setbread(state,bread){
    //   console.log(bread)
    //   state.bread=bread
    // }
    set_user(state,value){
      console.log(value)
      state.user=value
    },
    set_cart(state,value){
      state.cart.push(value)
    },
    del(state,index){
      state.cart.splice(index,1)
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
