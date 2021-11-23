import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";
import userinfo from "./userinfo";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    async getCurrency() {
      const key = process.env.VUE_APP_FIXER
      const response = await fetch(`https://currencyapi.net/api/v1/rates?key=${key}`)
      return response.json()
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    userinfo
  }
})
