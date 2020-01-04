import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IkosCave from '../views/IkosCave.vue'
import EventCalendar from '../views/EventCalendar.vue'
import TheInterned from '../views/TheInterned.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/IkosCave',
    name: 'IkosCave',
    component: IkosCave
  },
  {
    path: '/TheInterned',
    name: 'TheInterned',
    component: TheInterned
  },
  {
    path: '/eventcalendar',
    name: "eventcalendar",
    component: EventCalendar
  }
]

const router = new VueRouter({
  routes
})

export default router
