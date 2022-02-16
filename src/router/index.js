import { createRouter, createWebHistory } from 'vue-router'
import Inputs from '../views/Inputs.vue'
import Timer from '@/views/Timer.vue'

const routes = [
  {
    path: '/Inputs',
    name: 'Inputs',
    component: Inputs
  },
  {
    path: '/Timer',
    name: 'Timer',
    component: Timer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
