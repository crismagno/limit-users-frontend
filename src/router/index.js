import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../components/views/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('../components/views/Auth'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'content',
        component: () => import('../components/views/socket')
      },
      {
        path: 'clockpicker',
        component: () => import('../components/views/Clock')
      },
      {
        path: 'addintegrations',
        component: () => import('../components/views/AddIntegrations')
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: true
})

export default router
