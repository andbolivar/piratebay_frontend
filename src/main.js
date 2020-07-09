import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import storea from './store'
import VueRouter from 'vue-router'
import { store } from './store/store'

window.eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter)


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'Dashboard',
      })
      next({
        name: 'Usuario',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
