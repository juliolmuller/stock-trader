
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
    fetchStocks({ commit }) {
      // TODO: implement back-end fetching
      setTimeout(() => commit('setStocks', [
        // TODO: remove hard-coded data
        { id: 'BMW3', company: 'NMW', price: 20.57 },
        { id: 'AMZ4', company: 'Amazon', price: 8.87 },
        { id: 'GOO2', company: 'Google', price: 11.20 },
        { id: 'FBK1', company: 'Facebook', price: 5.51 },
        { id: 'XOM1', company: 'ExxonMobil', price: 54.32 }
      ]), 2000)
    },
    buyStocks({ commit }, order) {
      // TODO: add mutation
      commit('', order)
    }
  }
}
