import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      isTab: true,
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/Collection.vue'),
    meta: { isTab: true }
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue'),
    meta: { isTab: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const loginUser = localStorage.getItem('loginUser')
  if (to.meta.auth) {
    if (loginUser) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
