import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '@/views/TopPage'
import SamplePage from '@/views/SamplePage'
import SignUpPage from '@/views/SignUpPage'
import LoginPage from '@/views/LoginPage'
import TodoPage from '@/views/TodoPage'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  },
  {
    path: '/sample',
    name: 'SamplePage',
    component: SamplePage,
    beforeEnter: (to, from, next) => {
      if(!store.getters.loggedIn) {
        next({name: 'TopPage'})
      } else {
        next();
      }
    }
  },
  {
    path: '/todo',
    name: 'TodoPage',
    component: TodoPage,
    beforeEnter: (to, from, next) => {
      if(!store.getters.loggedIn) {
        next({name: 'TopPage'})
      } else {
        next();
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: SignUpPage,
    beforeEnter: (to, _, next) => {
      if(store.getters.loggedIn) {
        alert("すでにログインしています");
      } else {
        next();
      }
    }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: (to, _, next) => {
        if(store.getters.loggedIn) {
        alert("すでにログインしています");
        } else {
          next();
        }
      }
    },
  ]
          
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
