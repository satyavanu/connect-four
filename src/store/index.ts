import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aiMove: null,
    resetGame: false
  },
  getters: {
    aiMove(state) {
      return state.aiMove
    },
    resetGame(state) {
      return state.resetGame
    }
  },
  mutations: {
    SET_AI_RESPONSE(state, payload) {
      state.aiMove = payload
    },
    SET_GAME_RESET(state, payload) {
      state.resetGame = payload
    }
  },
  actions: {
    getMove(context, payload) {
      const data = JSON.parse(JSON.stringify(payload.stats))
      axios
        .post('/api/computer', data)
        .then(({ data }) => {
          context.commit('SET_AI_RESPONSE', data)
        })
        .catch(() => {
          context.commit('SET_AI_RESPONSE', null)
        })
    },
    resetGame(context, { payload }) {
      context.commit('SET_GAME_RESET', payload)
    }
  },
  modules: {}
})
