import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView';
import RegisterComp from './views/RegisterComp';
import LoginComp from './views/LoginComp';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterComp
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComp
  }
];

const router = new VueRouter({
  routes,
});

export default router;
