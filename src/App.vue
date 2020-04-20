<template>
  <v-app>
    <app-header />
    <v-content>
      <v-container>
        <transition name="slide" mode="out-in" appear>
          <router-view />
        </transition>
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from './components/layout/Header'
import AppFooter from './components/layout/Footer'

export default {

  components: {
    AppHeader,
    AppFooter,
  },

  beforeCreate() {
    this.$store.dispatch('storage/restoreData')
    this.$store.dispatch('stocks/fetchStocks')
    setInterval(this.$store.dispatch, 5 * 60 * 1000, 'stocks/fetchStocks')
  },
}
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 300ms ease;
}

.slide-leave-active {
  animation: slide-out 300ms ease;
}
</style>
