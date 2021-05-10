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
        exact
      >{{ route.label }}</v-btn>
    </v-toolbar-items>

    <v-spacer />

    <v-toolbar-items>
      <v-layout align-center>
        <span class="subtitle-2 text--grey text--darken-2">
          Fundos para investir:
        </span>
        <span class="subtitle-1 text--grey font-weight-bold ml-3 mr-5">
          R$ {{ $store.getters['portfolio/unappliedFunds'] | number(2) }}
        </span>
      </v-layout>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <span>Salvar Transações</span>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="commitChanges">
              <v-icon>mdi-content-save</v-icon>
              Salvar
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="discardChanges">
              <v-icon>mdi-undo-variant</v-icon>
              Descartar
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Header',

  data() {
    return {
      navigation: [
        { name: 'home', label: 'Home' },
        { name: 'portfolio', label: 'Portfólio' },
        { name: 'stocks', label: 'Ações' },
      ],
    }
  },

  methods: {
    ...mapMutations('storage', ['commitChanges']),
    ...mapActions('storage', ['discardChanges']),
  },
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

.v-list-item__title:hover, .v-list-item__title:active {
  cursor: pointer;
}
</style>
