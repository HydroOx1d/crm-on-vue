import firebase from "firebase/compat";

export default {
  state: {
    userInfo: {}
  },
  mutations: {
    setInfo(state, info) {
      state.userInfo = info
    },
    clearInfo(state) {
      state.info = {}
    }
  },
  actions: {
    async getInfo({dispatch, commit}) {
      try {
        const uid = await dispatch("getUid")
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e){}
    }
  },
  getters: {
    userInfo: s => s.userInfo
  },
}