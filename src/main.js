import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './filters'

Vue.config.productionTip = false

new Vue({ // eslint-disable-line vue/require-name-property
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
