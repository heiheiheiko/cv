import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'ApplicantShow', params: { id: 1 } },
  },
  {
    path: '/applicant/:id',
    name: 'ApplicantShow',
    component: () => import(/* webpackChunkName: "core" */ '../views/ApplicantShow.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
