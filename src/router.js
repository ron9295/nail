import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from './views/HomeView';
import RegisterComp from './views/RegisterComp';

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
  }
];

const router = new VueRouter({
  routes,
});

export default router;