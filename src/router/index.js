import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Profile from '@/components/Profile'
import Param from '@/components/Param'
import ParamDetails from '@/components/paramdetails'

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
  },
  {
    path: '/param-details/:id',
    component: ParamDetails,
    name: 'ParamDetails'
  }
]

const router = new Router({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/param') {
    if (localStorage.getItem('user') === null) {
      var user = prompt('Please enter your username')
      var pass = prompt('Please enter your password')

      if (user === 'hozier' && pass === 'password') {
        localStorage.setItem('user', user)
        next()
      } else {
        alert('Wrong authentication credentials')
        return
      }
    }
  }

  next()
})

export default router
