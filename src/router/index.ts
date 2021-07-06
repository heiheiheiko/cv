import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'TalentShow', params: { id: 1 } },
  },
  {
    path: '/talent/:id',
    name: 'TalentShow',
    component: () => import(/* webpackChunkName: "core" */ '../views/TalentShow.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
