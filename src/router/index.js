import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
