<template>
  <div>
    <div class="d-flex justify-space-between align-center-end mt-8">
      <h1 class="display-1 font-weight-bold">
        Mercado de Ações
      </h1>

      <v-spacer />

      <v-text-field
        style="max-width:300px;"
        append-icon="mdi-magnify"
        placeholder="Procurar ativo..."
        filled rounded dense
        v-model="search"
      />
    </div>

    <alert-unsaved-changes />
    <alert-market-is-closed />

    <v-layout row wrap>
      <v-img
        v-if="$store.state.appLoading"
        src="@/assets/loading.svg"
        açt="Carregando"
        max-width="10%"
        class="mx-auto"
      />

      <StockCard
        v-else
        v-for="stock in searchResult"
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
  name: 'StocksPanel',

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    StockCard,
  },

  data: () => ({
    search: '',
  }),

  computed: {
    ...mapGetters('stocks', ['stocks']),
    searchResult() {
      if (!this.search) {
        return this.stocks
      }

      return this.stocks.filter((stock) => JSON.stringify(stock).match(new RegExp(this.search, 'i')))
    },
  },
}
</script>

<style scoped>
.v-image.mx-auto {
  margin: 10rem;
}
</style>
