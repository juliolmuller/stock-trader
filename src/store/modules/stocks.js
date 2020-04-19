import axios from 'axios'

/**
 * URL for fetching resources
 *
 * @constant {String}
 */
const API_URL = 'https://sheet.best/api/sheets/c762c72f-1f4b-43be-a11e-8482d0a4820c'

export default {

  namespaced: true,

  state: {
    stocks: []
  },

  getters: {
    stocks(state) {
      return state.stocks
    }
  },

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks
    }
  },

  actions: {
    async fetchStocks({ commit }) {
      const response = await axios(API_URL)
      commit('setStocks', response.data)
    }
  }
}
