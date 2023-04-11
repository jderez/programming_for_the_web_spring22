import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import Racket from './views/Racket.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/racket/:id',
      component: Racket
    }
  ]
})

createApp(App).use(router).mount('#app')
