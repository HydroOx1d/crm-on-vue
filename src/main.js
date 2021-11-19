import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "materialize-css/dist/js/materialize.min"
import dateFilter from './filters/filter.date'

Vue.config.productionTip = false
Vue.filter('dates',dateFilter)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
