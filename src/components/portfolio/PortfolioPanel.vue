<template>
  <div>
    <h2 class="display-2 font-weight-bold mt-8 mb-6">
      Sua Carteira de Ações
    </h2>
    <alert-unsaved-changes />
    <alert-market-is-closed />
    <v-layout row wrap>
      <PortfolioCard
        v-for="stock in portfolioStocks"
        :key="stock.id"
        :stock="stock"
      />
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlertMarketIsClosed from '../AlertMarketIsClosed'
import AlertUnsavedChanges from '../AlertUnsavedChanges'
import PortfolioCard from './PortfolioCard'

export default {

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    PortfolioCard,
  },

  computed: mapGetters('portfolio', ['portfolioStocks']),
}
</script>

<style scoped>
</style>
