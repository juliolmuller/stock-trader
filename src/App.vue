<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from '@/components/layout/Header'
import AppFooter from '@/components/layout/Footer'

export default {

  components: {
    AppHeader,
    AppFooter
  },

  beforeCreate() {
    this.$store.dispatch('stocks/fetchStocks')
    this.$store.dispatch('portfolio/restoreData')
  }
}
</script>

<style>
</style>
