import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/PortfolioPanel'
import Stocks from '@/components/stocks/StocksPanel'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: Stocks
    },
    {
      // fallback route
      path: '*',
      redirect: '/'
    }
  ]
})
