import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/policy',
      name: 'policy',
      component: () => import('../views/PolicyView.vue')
    },
    {
      path: '/termuse',
      name: 'termuse',
      component: () => import('../views/TermUseView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bisness',
      name: 'bisness',

      component: () => import('../views/BisnessView.vue')
    },
    {
      path: '/preorder',
      name: 'preorder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PreorderView.vue')
    }
  ]
})

export default router
