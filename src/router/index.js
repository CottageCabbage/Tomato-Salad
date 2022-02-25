import { createRouter, createWebHistory } from 'vue-router'

import Inputs from '../views/Inputs.vue'
import Timer from '@/views/Timer.vue'
import Presets from '@/views/Presets.vue'
import Stopwatch from '@/views/Stopwatch.vue'
import Settings from '@/views/Settings.vue'

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
  },
  {
    path: '/Presets',
    name: 'Presets',
    component: Presets
  },
  {
    path: '/Stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
