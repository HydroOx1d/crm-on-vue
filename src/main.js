import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import dateFilter from './filters/filter.date'
import router from './router'
import store from './store'
import vueMessageUtils from './utilites/messages.plugin'
import './registerServiceWorker'
import "materialize-css/dist/js/materialize.min"

Vue.config.productionTip = false
Vue.filter('dates',dateFilter)
Vue.use(VueCompositionApi)
Vue.use(vueMessageUtils)
const app = new Vue({
  router,
  store,
  render: h => h(App)
})
app.$mount('#app')
