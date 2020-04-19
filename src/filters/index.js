import Vue from 'vue'

const requireFilter = require.context('.', false, /\.js$/)

requireFilter.keys().forEach(fileName => {
  if (fileName !== './index.js') {
    const filterConfig = requireFilter(fileName).default
    const filterName = fileName.replace(/^\.\//, '').replace(/\.js$/, '')

    Vue.filter(filterName, filterConfig)
  }
})
