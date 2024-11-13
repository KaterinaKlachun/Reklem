import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import CatalogPage from '../views/CatalogPage.vue';
import ContactsPage from '../views/ContactsPage.vue';
import ProductPage from '../views/ProductPage.vue';
import NewsPage from '../views/NewsPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ServicesPage from '../views/ServicesPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/news', component: NewsPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/services', component: ServicesPage },
  {
    path: '/product/:category/:id',
    name: 'ProductPage',
    component: ProductPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }; // Перемещаемся в верхнюю часть страницы
    }
  }
});

export default router;
