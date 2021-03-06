import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Chart from '@/views/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/chart/:type',
      name: '图表示例',
      component: Chart,
      props: true
    }
  ]
})
