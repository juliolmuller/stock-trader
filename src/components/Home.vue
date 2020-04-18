<template>
  <div>
    <h1 class="display-3 font-weight-light mt-8 mb-4">
      Brinque de Negociar Ações em Tempo Real
    </h1>
    <alert-unsaved-changes />
    <alert-market-is-closed />
    <v-layout row wrap class="mt-8 strat">
      <dashboard-card v-for="card in cards" :key="card.title" :info="card" />
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlertMarketIsClosed from './AlertMarketIsClosed'
import AlertUnsavedChanges from './AlertUnsavedChanges'
import DashboardCard from './DashboardCard'

export default {

  components: {
    AlertMarketIsClosed,
    AlertUnsavedChanges,
    DashboardCard
  },

  computed: {
    ...mapGetters('portfolio', [
      'appliedFunds',
      'unappliedFunds',
      'totalFunds'
    ]),
    cards() {
      return [
        { title: 'Valor em ações', value: this.appliedFunds, route: { name: 'portfolio', label: 'Ir para carteira' } },
        { title: 'Valor não investido', value: this.unappliedFunds, route: { name: 'stocks', label: 'Comprar ações' } },
        { title: 'Fundos totais', value: this.totalFunds }
      ]
    }
  }
}
</script>

<style scoped>
.text-upper {
  text-transform: uppercase;
}
</style>
