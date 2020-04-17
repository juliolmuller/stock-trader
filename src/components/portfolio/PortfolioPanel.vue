<template>
  <v-layout row wrap class="pt-10">
    <PortfolioCard
      v-for="stock in portfolioStocks"
      :key="stock.id"
      :stock="stock"
    />
  </v-layout>
</template>

<script>
import PortfolioCard from './PortfolioCard'

export default {

  components: {
    PortfolioCard
  },

  data() {
    return {
      portfolioStocks: [
        { id: 'GOO2', company: 'Google', price: 11.20, quantity: 35 },
        { id: 'XOM1', company: 'ExxonMobil', price: 54.32, quantity: 20 }
      ]
    }
  }
}
</script>

<style scoped>
</style>
