import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'All',
    component: Main,
  },
];

const router = new VueRouter({
  routes,
  base: '/',
  mode: 'history',
});

export default router;
