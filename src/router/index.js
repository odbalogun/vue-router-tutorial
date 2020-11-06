import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Param from '@/components/Param'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/param',
    component: Param
  }
]
export default new Router({
  routes: routes,
  mode: 'history'
})
