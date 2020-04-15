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
import { mapGetters } from 'vuex'
import StockCard from './StockCard'

export default {

  components: {
    StockCard
  },

  computed: mapGetters('stocks', ['stocks'])
}
</script>

<style scoped>
</style>
