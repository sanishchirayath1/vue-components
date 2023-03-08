import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import todosModule from './modules/todos';
import homeModule from './modules/home';
import aboutModule from './modules/about';

import './assets/main.scss';
import { registerModules } from './register-modules';

registerModules({
  todos: todosModule,
  home: homeModule,
  about: aboutModule,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
