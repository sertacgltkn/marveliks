import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FavPage from '../views/FavPage.vue';
import ComicsDetails from '../views/ComicsDetails.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/fav/:id',
    name: 'FavPage',
    component: FavPage
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: ComicsDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;