<template>
  <v-flex class="pr-5 pb-5" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
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
          label="Quantidade"
          :error="quantity !== 0 && !canBuy"
          v-model.number="quantity"
        />
        <v-btn
          class="green darken-3 white--text"
          :disabled="!canBuy"
          @click="buyStock"
        >Comprar</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  data: () => ({
    quantity: 0,
  }),

  computed: {
    availableFunds() {
      return this.$store.getters['portfolio/unappliedFunds']
    },
    canBuy() {
      return this.quantity > 0 &&
        Number.isInteger(this.quantity) &&
        this.quantity * this.stock.price <= this.availableFunds
    },
  },

  props: {
    stock: {
      type: Object,
      required: true,
    },
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity,
      }
      this.$store.dispatch('buyStocks', order)
      this.quantity = 0
    },
  },
}
</script>

<style scoped>
</style>
