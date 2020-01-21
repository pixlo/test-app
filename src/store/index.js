import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import data from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    async fetchCatalog () {
      const url = 'https://reqres.in/api/users'
      return fetch(url).then(response => response.json()).then(data => data.data)
    }
  },
  modules: {
    auth, info, data
  }
})
