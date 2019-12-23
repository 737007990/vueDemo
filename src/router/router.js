import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('../components/Mine')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../components/Home')
  },
  {
    name: 'action',
    path: '/action',
    component: () => import('../components/Action')
  }
]

const router = new VueRouter({
  mode: 'history',
   base: process.env.BASE_URL,
  routes
})

export default router
