import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import storage from './modules/storage'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    stocks,
    portfolio,
    storage,
  },
})
