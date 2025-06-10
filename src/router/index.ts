import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CountryDetail from '../views/CountryDetail.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/country/:code', component: CountryDetail },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
