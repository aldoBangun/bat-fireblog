import { createRouter, createWebHistory } from "vue-router";

// components
import PageHome from '../components/pages/PageHome.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'home',
         component: PageHome
      }
   ]
})

export default router