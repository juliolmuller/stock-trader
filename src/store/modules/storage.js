
/**
 * Storage name
 * @constant {String}
 */
const STORAGE = 'my_data'

export default {

  namespaced: true,

  state: {
    persitant: {},
    temporary: {},
  },

  getters: {
    hasChanges(state) {
      const local = JSON.stringify(state.persitant)
      const session = JSON.stringify(state.temporary)
      return session !== local
    },
  },

  mutations: {
    setStorages(state, { local, session }) {
      session && (state.temporary = session)
      local && (state.persitant = local)
    },
    stageChanges(state, userData) {
      state.temporary = userData
      sessionStorage.setItem(STORAGE, JSON.stringify(userData))
    },
    commitChanges(state) {
      state.persitant = { ...state.temporary }
      localStorage.setItem(STORAGE, sessionStorage.getItem(STORAGE))
    },
  },

  actions: {
    restoreData({ commit, dispatch }) {
      const local = JSON.parse(localStorage.getItem(STORAGE))
      const session = JSON.parse(sessionStorage.getItem(STORAGE)) || local
      if (session) {
        commit('portfolio/setData', session, { root: true })
        commit('setStorages', { local, session })
      } else {
        dispatch('portfolio/resetData', null, { root: true })
      }
    },
    discardChanges({ commit, state }) {
      const session = state.persitant
      commit('stageChanges', session)
      commit('portfolio/setData', session, { root: true })
    },
  },
}
