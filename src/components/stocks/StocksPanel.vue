<template>
  <v-layout row wrap class="pt-10">
    <StockCard
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    />
  </v-layout>
</template>

<script>
import StockCard from './StockCard'

export default {

  components: {
    StockCard
  },

  data() {
    return {
      stocks: [
        { id: 'BMW3', company: 'NMW', price: 20.57 },
        { id: 'AMZ4', company: 'Amazon', price: 8.87 },
        { id: 'GOO2', company: 'Google', price: 11.20 },
        { id: 'FBK1', company: 'Facebook', price: 5.51 },
        { id: 'XOM1', company: 'ExxonMobil', price: 54.32 }
      ]
    }
  }
}
</script>

<style scoped>
</style>
