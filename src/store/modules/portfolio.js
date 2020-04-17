
/**
 * Storage name
 * @constant {String}
 */
const STORAGE = 'my_data'

export default {

  namespaced: true,

  state: {
    funds: 10000,
    portfolio: [
      { id: 'GOO2', quantity: 35 },
      { id: 'XOM1', quantity: 20 }
    ]
  },

  getters: {
    funds(state) {
      return state.funds
    },
    portfolioStocks(state, _getters, _rootState, rootGetters) {
      return state.portfolio.map(p => {
        const stock = rootGetters['stocks/stocks'].find(s => s.id === p.id)
        return {
          ...stock,
          quantity: p.quantity
        }
      })
    }
  },

  mutations: {
    setData(state, data) {
      state.funds = data.funds
      state.portfolio = data.portfolio
    },
    buyStocks(state, order) {
      const stock = state.portfolio.find(p => p.id === order.stockId)
      if (stock) {
        stock.quantity += order.stockQuantity
      } else {
        state.portfolio.push({
          id: order.stockId,
          quantity: order.stockQuantity
        })
      }
      state.funds -= order.stockQuantity * order.stockPrice
    },
    sellStocks(state, order) {
      const stock = state.portfolio.find(p => p.id === order.stockId)
      if (stock.quantity > order.stockQuantity) {
        stock.quantity -= order.stockQuantity
      } else {
        state.portfolio.splice(state.portfolio.indexOf(stock), 1)
      }
      state.funds += order.stockQuantity * order.stockPrice
    }
  },

  actions: {
    saveData({ state }) {
      localStorage.setItem(STORAGE, JSON.stringify(state))
    },
    restoreData({ commit, dispatch }) {
      const data = JSON.parse(localStorage.getItem(STORAGE))
      data ? commit('setData', data) : dispatch('saveData')
    },
    sellStocks({ commit, dispatch }, order) {
      commit('sellStocks', order)
      dispatch('saveData')
    }
  }
}
