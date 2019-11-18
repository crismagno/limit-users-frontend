import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: null,
      userConnected: true
  },
  getters: {
    user(state) {
      return state.user
    }
  },

  mutations: {
    setUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  modules: {
  }
})
