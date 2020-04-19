import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextMove: null
  },
  getters: {
    catsList(state) {
      return state.nextMove;
    }
  },
  mutations: {
    getMove (d) {
       console.log(d);
    }
  },
  actions: {
    getMove (context,payload) {
      let data = JSON.parse(JSON.stringify(payload.stats));
      axios.post('/api/computer', data)
        .then((data) => {
           console.log(data);
        })
        .catch(e => {
        })
    }
  },
  modules: {}
})
