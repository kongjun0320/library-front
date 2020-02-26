import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home1',
    component: () => import('../views/Home.vue'),
    meta: {
      isTab: true,
      auth: true
    }
  },
  {
    path: '/home',
    name: 'Home2',
    component: () => import('../views/Home.vue'),
    meta: {
      isTab: true,
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue'),
    meta: { isTab: true, auth: true }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue'),
    meta: { isTab: true, auth: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    meta: { isTab: true, auth: true }
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
