import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/alphacart'
  },
  {
    path: '/alphacart',
    name: 'alphacart',
    redirect: '/alphacart/detail',
    component: () => import("../views/AlphaCart.vue"),
    children: [
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/FormDetail.vue')}
      ,
      {
        path: 'delivery',
        name: 'delivery',
        component: () => import('../views/FormDelivery.vue')
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../views/FormPayment.vue')
      },
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
