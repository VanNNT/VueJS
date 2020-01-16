import Vue from 'vue'
import Router from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

Vue.use(Router)

const routes = [
  {path: '/', redirect: '/category/front-end'},
  {
    path: '/login',
    component: Login
  },
  {
    path: '/category/:id',
    component: Category
  }
]

export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  //  scrollBehavior: (to, from, savedPosition)  => ({y: 0}),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  },
  routes
})
