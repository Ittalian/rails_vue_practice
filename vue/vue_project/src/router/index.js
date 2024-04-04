import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '@/views/TopPage'
import SignUpPage from '@/views/SignUpPage'
import LoginPage from '@/views/LoginPage'
import TodoPage from '@/views/TodoPage'
import EveryonePage from '@/views/EveryonePage'
import DetailPage from '@/views/DetailPage'
import LikeMyPage from '@/views/LikeMyPage'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
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
    path: '/everyone',
    name: 'EveryonePage',
    component: EveryonePage,
    beforeEnter: (to, from, next) => {
      if(!store.getters.loggedIn) {
        next({name: 'TopPage'})
      } else {
        next();
      }
    }
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: DetailPage,
    beforeEnter: (to, from, next) => {
      if(!store.getters.loggedIn) {
        next({name: 'TopPage'})
      } else {
        next();
      }
    }
  },
  {
    path: '/like',
    name: 'LikeMyPage',
    component: LikeMyPage,
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
        next({name: 'TodoPage'});
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
          next({name: 'TodoPage'});
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
