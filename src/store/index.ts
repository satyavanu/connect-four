import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null
  },
  mutations: {
    getMove (d) {
       console.log(d);
    }
  },
  actions: {
    getMove (context,b) {
      console.log(b);
    }
  },
  modules: {}
})
