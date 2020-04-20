<template>
  <div>
    <h2 class="display-2 font-weight-bold mt-8 mb-6">
      Sua Carteira de Ações
    </h2>
    <alert-unsaved-changes />
    <alert-market-is-closed />
    <v-layout row wrap class="pt-10">
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
