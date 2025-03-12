import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Portfolio - Jeff',
        description: 'Explore my latest movie project made with Vue.js and Laravel'
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Jeffry Jimenez - Portfolio';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Discover my projects in web development.');
  }

  next();
});

export default router
