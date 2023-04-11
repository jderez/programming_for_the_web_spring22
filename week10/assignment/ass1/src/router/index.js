import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Racket from '../views/Racket.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/racket/:id', component: Racket }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
