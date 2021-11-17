import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: "mainLayouts",
    },
    component: Home
  },
  {
    path: "/signup",
    name: 'signup',
    meta: {
      layout: "logReg"
    },
    component: () => import("../views/Sign")
  },
  {
    path: "/detail",
    name: 'detail',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/DetailRecord")
  },
  {
    path: "/history",
    name: 'history',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/History")
  },
  {
    path: "/planning",
    name: 'planning',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/Planning")
  },
  {
    path: "/profile",
    name: 'profile',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/Profile")
  },
  {
    path: "/record",
    name: 'record',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/Record")
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "logReg"
    },
    component: () => import("../views/Login")
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: "mainLayouts"
    },
    component: () => import("../views/Categories")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
