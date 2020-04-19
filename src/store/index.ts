import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aiMove: null
  },
  getters: {
    aiMove(state) {
      return state.aiMove;
    }
  },
  mutations: {
    SET_AI_RESPONSE(state, payload) {
      state.aiMove = payload;
    }
  },
  actions: {
    getMove (context,payload) {
      let data = JSON.parse(JSON.stringify(payload.stats));
      axios.post('/api/computer', data)
        .then(({data}) => {
          context.commit("SET_AI_RESPONSE", data);
        })
        .catch(e => {
          context.commit("SET_AI_RESPONSE", null);
        })
    }
  },
  modules: {}
})
