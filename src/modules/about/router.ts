// import router from "@/router";
import type { Router } from 'vue-router';

const Module = () => import('./ModuleRoute.vue');
const About = () => import('./views/AboutView.vue');

const moduleRoute = {
  path: '/about',
  component: Module,
  children: [
    {
      path: '/about',
      component: About,
    },
  ],
};

// router.addRoute(moduleRoute);

export default (router: Router) => {
  router.addRoute(moduleRoute);
};
