import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'TalentShow', params: { slug: 'heiko' } },
  },
  {
    path: '/talent/:slug',
    name: 'TalentShow',
    component: () => import(/* webpackChunkName: "core" */ '../views/TalentShow.vue'),
  },
  {
    path: '/data-protection',
    name: 'DataProtectionPage',
    component: () => import(/* webpackChunkName: "core" */ '../views/DataProtectionPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
