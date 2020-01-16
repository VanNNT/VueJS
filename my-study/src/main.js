import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import pinDirective from './directive/PinDirective'

Vue.config.productionTip = false
Vue.directive('pin',pinDirective)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')