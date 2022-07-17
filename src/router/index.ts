import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../components/DefaultView.vue'
import Home from '../views/Home.vue'
import Produkte from '../views/Products.vue'
import Settings from '../views/Settings.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultView',
      redirect: '/home',
      component: DefaultView,
      children: [
      {path: '/home', name:'Home', component:Home},
      {path: '/lager', name:'Produkte', component:Produkte},
      {path: '/cart', name:'Cart', component:Cart}]
    },
    {
    path: '/settings',
    name: 'Settings',
    component: Settings
    }
  ]
})

export default router
