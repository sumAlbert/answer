import Vue from 'vue'
import Router from 'vue-router'
import GoodsPage from '@/components/GoodsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsPage',
      component: GoodsPage,
      children: [
        {
          path: '/SelectBox',
          name: 'SelectBox',
          component: resolve => require(['@/components/SelectBox'], resolve)
        }
      ]
    }
  ]
})
