import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Lazyload } from 'vant'
import axios from 'axios'

Vue.use(Lazyload)
Vue.config.productionTip = false

axios.interceptors.response.use(response => {
  return response.data
})

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
