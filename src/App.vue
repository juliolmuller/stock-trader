<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <transition name="slide" mode="out-in" appear>
          <router-view />
        </transition>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from './components/layout/Footer'
import AppHeader from './components/layout/Header'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },

  beforeCreate() {
    const INTERVAL = 300000 // 5 minutes
    this.$store.dispatch('storage/restoreData')
    this.$store.dispatch('stocks/fetchStocks')
    setInterval(this.$store.dispatch, INTERVAL, 'stocks/fetchStocks')
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
