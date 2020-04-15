<template>
  <v-app-bar app>

    <v-toolbar-title>
      <router-link to="/" class="v-toolbar__title">
        <span>Stock</span>
        <span>Trader</span>
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn text
        v-for="route in navigation"
        :key="route.name"
        :to="{ name: route.name }"
      >{{ route.label }}</v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items>
      <v-btn text>
        <v-icon>mdi-calendar-check</v-icon>
        <span>Finalizar Dia</span>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>mdi-content-save-move</v-icon>
            <span>Salvar ou Carregar</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
export default {

  data() {
    return {
      navigation: [
        { name: 'home', label: 'Home' },
        { name: 'portfolio', label: 'Portfólio' },
        { name: 'stocks', label: 'Ações' }
      ]
    }
  }
}
</script>

<style scoped>
.v-toolbar__title {
  margin-right: 1.5rem;
  margin-left: 1rem;
  line-height: 2rem;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
}
.v-toolbar__title > span:last-child {
  font-weight: 300 !important;
}
</style>
