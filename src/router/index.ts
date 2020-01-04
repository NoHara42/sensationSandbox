import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import EventCalendar from '../views/EventCalendar.vue'

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
    path: '/home2',
    name: 'home2',
    component: Home2
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
