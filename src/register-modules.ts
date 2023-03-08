import type { Router } from 'vue-router';
import router from '@/router';

interface ModuleType {
  router: (router: Router) => void;
}

interface ModuleObjectType {
  [key: string]: ModuleType;
}

const registerModule = (module: ModuleType) => {
  if (module.router) {
    module.router(router);
  }
};

export const registerModules = (modules: ModuleObjectType) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};
