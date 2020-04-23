import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/page/Home.vue'
import List from '../components/page/List.vue'
import Car from '../components/page/Car.vue'
import Personal from '../components/page/Personal.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }
]

const router = new VueRouter({
  routes
})

export default router
