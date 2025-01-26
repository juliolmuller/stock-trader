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
          (data) => {
            // Data comes in TSV format
            const [, ...rows] = data.split('\n')

            return rows.map((row) => {
              const [id, company, price] = row.split('\t')

              return {
                id,
                company,
                price: Number(price) || 0,
              }
            })
          },
        ],
      })
      commit('setStocks', response.data)
      commit('setLoading', false, { root: true })
    },
  },
}
