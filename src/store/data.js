import firebase from 'firebase/app'
export default {
  state: {
    data: {}
  },
  mutations: {
    setData (state, data) {
      state.data = data
    },
    clearData (state) {
      state.data = {}
    }
  },
  actions: {
    async fetchData ({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid')
        const data = (await firebase.database().ref(`/users/${uid}/data`).once('value')).val()
        commit('setData', data)
        return data && data.id ? data.id : []
      } catch (e) {}
    },
    async addData ({ dispatch, commit }, id) {
      try {
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/data`).set({ id })
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    data: d => d.data
  }
}
