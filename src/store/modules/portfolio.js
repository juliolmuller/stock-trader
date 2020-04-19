
export default {

  namespaced: true,

  state: {
    funds: 0,
    portfolio: []
  },

  getters: {
    portfolioStocks(state, _getters, _rootState, rootGetters) {
      return state.portfolio.map(p => {
        const stock = rootGetters['stocks/stocks'].find(s => s.id === p.id)
        return {
          ...stock,
          quantity: p.quantity
        }
      })
    },
    appliedFunds(_state, getters) {
      return getters.portfolioStocks.reduce((total, stock) => {
        return total + stock.price * stock.quantity
      }, 0)
    },
    unappliedFunds(state) {
      return state.funds
    },
    totalFunds(_state, getters) {
      return getters.appliedFunds + getters.unappliedFunds
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
    resetData({ commit, state }) {
      commit('setData', {
        funds: 10000,
        portfolio: []
      })
      commit('storage/stageChanges', state, { root: true })
      commit('storage/commitChanges', null, { root: true })
    },
    buyStocks: {
      root: true,
      handler({ commit, dispatch, state }, order) {
        commit('buyStocks', order)
        commit('storage/stageChanges', state, { root: true })
      }
    },
    sellStocks: {
      root: true,
      handler({ commit, dispatch, state }, order) {
        commit('sellStocks', order)
        commit('storage/stageChanges', state, { root: true })
      }
    }
  }
}
