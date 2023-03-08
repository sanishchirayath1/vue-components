// import router from "@/router";
import type { Router } from 'vue-router';

const Module = () => import('./ModuleRoute.vue');
const Home = () => import('./views/HomeView.vue');

const moduleRoute = {
  path: '/home',
  component: Module,
  children: [
    {
      path: '/home',
      component: Home,
    },
  ],
};

// router.addRoute(moduleRoute);

export default (router: Router) => {
  router.addRoute(moduleRoute);
};
