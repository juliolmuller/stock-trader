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
import { mapGetters } from 'vuex'
import PortfolioCard from './PortfolioCard'

export default {

  components: {
    PortfolioCard,
  },

  computed: mapGetters('portfolio', ['portfolioStocks']),
}
</script>

<style scoped>
</style>
