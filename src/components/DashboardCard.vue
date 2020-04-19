<template>
  <v-flex xs12 md4>
    <v-card class="text-center mx-4" height="100%">
      <v-card-text class="text--primary">
        <span class="display-1">{{ info.title }}</span>
        <div class="d-flex justify-center align-center mt-4">
          <span class="headline">R$</span>
          <span class="display-4">{{ info.value | number(2) }}</span>
        </div>
      </v-card-text>
      <v-card-actions v-if="info.route" class="pb-4">
        <v-btn color="primary" text x-large block :to="info.route">
          <span class="text-upper">{{ info.route.label }}</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>
