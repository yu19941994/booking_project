import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'
import currencyFilter from './filters/currency'

Vue.filter('currency', currencyFilter)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VCalendar)

extend('required', {
  ...required,
  message: '*必填'
})

for (const rule in rules) {
  extend(rule, rules[rule])
} // 引入其他規則

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
