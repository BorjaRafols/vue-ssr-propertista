import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const HomeView = () => import('../views/home/HomeView.vue')


export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView }
    ]
  })
}
