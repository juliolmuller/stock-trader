<template>
  <div>
    <h1 class="display-1 font-weight-bold mt-8 mb-6">
      Sua Carteira de Ações
    </h1>

    <alert-unsaved-changes />
    <alert-market-is-closed />

    <span v-if="!portfolioStocks.length" class="d-block text-center title font-weight-regular">
      Você não possui nenhum ativo.
      <router-link :to="{ name: 'stocks' }"><a>Comprar ações</a></router-link>.
    </span>

    <v-layout row wrap v-else>
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
  name: 'PortfolioPanel',

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    PortfolioCard,
  },

  computed: mapGetters('portfolio', ['portfolioStocks']),
}
</script>
