<template>
  <v-flex class="pr-5 pb-5" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="d-flex justify-space-between">
        <h3 class="order-2">{{ stock.company }}</h3>
        <span class="order-1">{{ stock.id }}</span>
        <span class="order-3">${{ stock.price | number(2) }} por ação</span>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          type="number"
          :label="`Quantidade (max. ${stock.quantity})`"
          :error="quantity !== 0 && !canSell"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="!canSell"
          @click="sellStock"
        >Vender</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  data: () => ({
    quantity: 0
  }),

  computed: {
    canSell() {
      return this.quantity > 0 &&
        Number.isInteger(this.quantity) &&
        this.quantity <= this.stock.quantity
    }
  },

  props: {
    stock: {
      type: Object,
      required: true
    }
  },

  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      this.$store.dispatch('sellStocks', order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
</style>
