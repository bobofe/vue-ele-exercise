import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/goods'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: () => import('@/components/goods/goods')
        },
        {
          path: 'ratings',
          name: 'ratings',
          component: () => import('@/components/ratings/ratings')
        },
        {
          path: 'seller',
          name: 'seller',
          component: () => import('@/components/seller/seller')
        }
      ]
    }
  ]
})
