<template>
  <div>
    <h1 class="display-1 font-weight-bold mt-8 mb-6">
      Sua Carteira de Ações
    </h1>
    <alert-unsaved-changes />
    <alert-market-is-closed />
    <v-layout row wrap>
      <StockCard
        v-for="stock in stocks"
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
import StockCard from './StockCard'

export default {

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    StockCard,
  },

  computed: mapGetters('stocks', ['stocks']),
}
</script>

<style scoped>
</style>
