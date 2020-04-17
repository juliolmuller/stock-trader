<template>
  <v-flex class="pr-5 pb-5" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="d-flex justify-space-between">
        <h3 class="order-2">{{ stock.company }}</h3>
        <span class="order-1">{{ stock.id }}</span>
        <span class="order-3">${{ stock.price }} por ação</span>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          type="number"
          :label="`Quantidade (max. ${stock.quantity})`"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="quantity <= 0 || quantity > stock.quantity || !Number.isInteger(quantity)"
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
      // TODO: dispatch request for persistance
      console.log(order)
      this.stock.quantity -= this.quantity
      console.log(this.stock)

      this.quantity = 0
    }
  }
}
</script>

<style scoped>
</style>
