import Vue from 'vue'
import Vuex from 'vuex'

import portfolio from './modules/portfolio'
import stocks from './modules/stocks'
import storage from './modules/storage'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    appLoading: true,
  },

  mutations: {
    setLoading(state, value) {
      state.appLoading = Boolean(value)
    },
  },

  modules: {
    stocks,
    portfolio,
    storage,
  },
})
