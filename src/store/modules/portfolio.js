
/**
 * Storage name
 * @constant {String}
 */
const STORAGE = 'my_data'

export default {

  namespaced: true,

  state: {
    funds: 0,
    portfolio: []
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
    },
    hasChanges() {
      return !(localStorage.getItem(STORAGE) === sessionStorage.getItem(STORAGE))
    }
  },

  mutations: {
    setData(state, data) {
      state.funds = data.funds
      state.portfolio = data.portfolio
    },
    resetData(state) {
      state.funds = 10000
      state.portfolio = []
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
    restoreData({ commit }) {
      const strData = sessionStorage.getItem(STORAGE) || localStorage.getItem(STORAGE)
      strData ? commit('setData', JSON.parse(strData)) : commit('resetData')
    },
    stageChanges({ state }) {
      sessionStorage.setItem(STORAGE, JSON.stringify(state))
    },
    discardChanges({ commit, dispatch }) {
      const strData = localStorage.getItem(STORAGE)
      strData ? commit('setData', JSON.parse(strData)) : commit('resetData')
    },
    commitChanges({ state }) {
      localStorage.setItem(STORAGE, sessionStorage.getItem(STORAGE))
    },
    buyStocks: {
      root: true,
      handler({ commit, dispatch }, order) {
        commit('buyStocks', order)
        dispatch('stageChanges')
      }
    },
    sellStocks: {
      root: true,
      handler({ commit, dispatch }, order) {
        commit('sellStocks', order)
        dispatch('stageChanges')
      }
    }
  }
}
