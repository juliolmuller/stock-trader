<template>
  <v-app-bar app bottom class="d-flex justify-center align-center">
    <span class="caption">
      Todos os direitos reservados &copy; 2020
      <span class="font-weight-black">LacusSoft</span>
    </span>

    <v-tooltip top v-for="icon in icons" :key="icon.name">
      <template v-slot:activator="{ on }">
        <v-btn icon :href="icon.href" v-on="on" class="mr-8">
          <v-icon>{{ icon.name }}</v-icon>
        </v-btn>
      </template>
      <span>{{ icon.tooltip }}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {

  data() {
    return {
      icons: [
        {
          href: 'https://github.com/juliolmuller/stock-trader',
          tooltip: 'Veja no GitHub',
          name: 'mdi-github',
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>
