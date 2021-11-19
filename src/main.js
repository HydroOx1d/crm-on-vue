import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "materialize-css/dist/js/materialize.min"
import dateFilter from './filters/filter.date'

Vue.config.productionTip = false
Vue.filter('dates',dateFilter)
Vue.use(VueCompositionApi)
const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
