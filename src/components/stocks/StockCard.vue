<template>
  <v-flex class="pr-5 pb-5" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="d-flex justify-space-between">
        <h3 class="order-2">{{ stock.company }}</h3>
        <span class="order-1">{{ stock.id }}</span>
        <span class="order-3">${{ stock.price }} por ação</span>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field type="number" label="Quantidade" />
        <v-btn class="green darken-3 white--text">Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  props: {
    stock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
