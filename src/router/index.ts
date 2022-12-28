import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Account/Login.vue';
import Register from '@/views/Account/Register.vue';
import Home from '@/views/Home.vue';
import Belt from '@/views/items/Belt.vue';
import Armor from '@/views/items/Armor.vue';
import OneHandSword from '@/views/items/OneHandSword.vue';
import CustomerList from '@/views/Customers/CustomerList.vue';
import CustomerTotal from '@/views/Customers/CustomerTotal.vue';
import Log from '@/views/Log/Log.vue';
import Manager from '@/views/Managers/Managerlist.vue';
import Chart from '@/views/Chart/Chart.vue';
import Profile from '@/views/Account/Profile.vue';
import UpdateManagerRole from '@/views/Managers/UpdateRole.vue';
import UpdateManagerInfo from '@/views/Managers/UpdateInfo.vue';
import ItemsTotal from '@/views/items/ItemTotal.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component: Register
  },
  {
    path:'/',
    component: Home
  },
  {
    // belt, armor, onehandsword는 차일드 컴포넌트로 생성해야 함!!
    path:'/item',
    component: ItemsTotal
  },
  {
    path:'/item/belt',
    component: Belt
  },
  {
    path:'/item/armor',
    component: Armor
  },
  {
    path:'/item/onehandsword',
    component: OneHandSword
  },
  {
    path: '/customer/customerlist',
    component: CustomerList
  },
  {
    path: '/customer/customeringameinfo/:id',
    sensitive: true,
    component: CustomerTotal,
    //props: true,
  },
  {
    path: '/managerlist',
    component: Manager
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path:'/log',
    component: Log
  },
  {
    path: '/personalinfo',
    component: Profile
  },
  {
    path: '/managerlist/updaterole/:id',
    sensitive: true,
    component: UpdateManagerRole,
    name: 'Updaterole'
  },
  {
    path: '/managerlist/updateinfo/:id',
    component: UpdateManagerInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
//router.beforeEach((to, from, next)=>{
  // const publicPages = ['/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = localStorage.getItem('token');

  // if(authRequired && !loggedIn)
  // {
  //   next('/login');
  // } else {
  //   next();
  // }

//})

export default router
