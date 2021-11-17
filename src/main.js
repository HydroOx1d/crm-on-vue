import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "materialize-css/dist/js/materialize.min"

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
