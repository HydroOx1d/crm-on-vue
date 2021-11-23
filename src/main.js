import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import dateFilter from './filters/filter.date'
import router from './router'
import store from './store'
import vueMessageUtils from './utilites/messages.plugin'
import Preloader from './components/Preloader'
import currFilter from './filters/filter.currency'
import './registerServiceWorker'
import "materialize-css/dist/js/materialize.min"

import firebase from "firebase/compat"
Vue.config.productionTip = false
Vue.filter('dates',dateFilter)
Vue.filter('currency', currFilter)
Vue.use(VueCompositionApi)
Vue.use(vueMessageUtils)
Vue.component('preloader', Preloader)

firebase.initializeApp({
  apiKey: "AIzaSyA06nJE47fDevNslW9rws9IwRIqPWYu6fc",
  authDomain: "vue-crm-81482.firebaseapp.com",
  projectId: "vue-crm-81482",
  storageBucket: "vue-crm-81482.appspot.com",
  messagingSenderId: "290146495861",
  appId: "1:290146495861:web:3363d58b26600eb277773c",
  measurementId: "G-332RLFCDBW"
})
let app
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

