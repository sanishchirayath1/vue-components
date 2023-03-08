import type { Router } from 'vue-router';
import router from '@/router';

const Module = () => import('./ModuleRoute.vue');
const Todos = () => import('./views/TodosView.vue');

const moduleRoute = {
  path: '/todos',
  component: Module,
  children: [
    {
      path: '/todos',
      component: Todos,
    },
  ],
};
router.addRoute(moduleRoute);

export default (router: Router) => {
  router.addRoute(moduleRoute);
};
