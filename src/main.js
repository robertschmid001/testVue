// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import Home from '@/components/_layout/Home'
import Exercice1 from '@/components/_layout/Exercices/Exercice1'
import Exercice2 from '@/components/_layout/Exercices/Exercice2'
import Exercice3 from '@/components/_layout/Exercices/Exercice3'
import Exercice4 from '@/components/_layout/Exercices/Exercice4'
import Exercice5 from '@/components/_layout/Exercices/Exercice5'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  { path: '/fisrt', component: Exercice1, name: 'exercice1' },
  { path: '/second', component: Exercice2, name: 'exercice2' },
  { path: '/third', component: Exercice3, name: 'exercice3' },
  { path: '/fourth', component: Exercice4, name: 'exercice4' },
  { path: '/fifth', component: Exercice5, name: 'exercice5' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store({
  state: {
    // ton state
  },
  mutations: {
  // ton setter
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
