import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ch2_lifetime from '@/components/ch2_lifetime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ch2',
      name: 'ch2',
      component: ch2_lifetime
    }
  ]
})
