<template>
  <div>
    <h1 class="display-2 text-center font-weight-bold mt-8 mb-6">
      Brinque de Negociar Ações em Tempo Real
    </h1>

    <alert-unsaved-changes />
    <alert-market-is-closed />

    <v-layout row wrap class="mt-12">
      <v-img
        v-if="$store.state.appLoading"
        src="@/assets/loading.svg"
        açt="Carregando"
        max-width="10%"
        class="mx-auto"
      />

      <dashboard-card
        v-else
        v-for="card in cards"
        :key="card.title"
        :info="card"
      />
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AlertMarketIsClosed from './AlertMarketIsClosed'
import AlertUnsavedChanges from './AlertUnsavedChanges'
import DashboardCard from './DashboardCard'

export default {
  name: 'Home',

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    DashboardCard,
  },

  computed: {
    ...mapGetters('portfolio', [
      'appliedFunds',
      'unappliedFunds',
      'totalFunds',
    ]),
    cards() {
      return [
        { title: 'Valor em ações', value: this.appliedFunds, route: { name: 'portfolio', label: 'Ir para carteira' } },
        { title: 'Valor não investido', value: this.unappliedFunds, route: { name: 'stocks', label: 'Comprar ações' } },
        { title: 'Fundos totais', value: this.totalFunds },
      ]
    },
  },
}
</script>

<style scoped>
.v-image.mx-auto {
  margin: 5rem;
}
</style>
