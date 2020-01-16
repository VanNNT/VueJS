import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

console.log(AppLayout)

const app = new Vue({
  // render: h => h(AppLayout)
  router,
  ...AppLayout
})

export {app, router}
