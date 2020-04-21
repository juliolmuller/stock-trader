import axios from 'axios'

/**
 * URL for fetching resources
 *
 * @constant {String}
 */
const API_URL = 'https://sheet.best/api/sheets/38ec96b3-7c75-4639-9d81-f138f44ba2f5'

export default {
  namespaced: true,

  state: {
    stocks: [],
  },

  getters: {
    stocks(state) {
      return state.stocks
    },
  },

  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks
    },
  },

  actions: {
    async fetchStocks({ commit }) {
      const response = await axios(API_URL, {
        transformResponse: [
          ...axios.defaults.transformResponse,
          data =>
            data.map(stock => {
              Object.keys(stock).forEach(key => {
                if (!isNaN(stock[key])) {
                  stock[key] = Number(stock[key])
                }
              })
              return stock
            }),
        ],
      })
      commit('setStocks', response.data)
      commit('setLoading', false, { root: true })
    },
  },
}
