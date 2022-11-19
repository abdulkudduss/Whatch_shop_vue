import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Watch from '../views/WatchInfoPage.vue'
import Category from '../views/cotegoriespage.vue'
import Signin from '../views/Sing_In_page.vue'
import Payment from '../views/Payment_detail_page.vue'
import About from '../views/About_us_page.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path:'/payment',
    name:'payment',
    component:Payment
  },
  {
    path:'/about',
    name:'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
