import axios from 'axios'

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
      const response = await axios(process.env.VUE_APP_API_URL, {
        transformResponse: [
          ...axios.defaults.transformResponse,
          (data) => data.map((stock) => {
            Object.keys(stock).forEach((key) => {
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
