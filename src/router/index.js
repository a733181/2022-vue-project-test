import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '國立科技高中─校園社團介紹網',
      },
    },
    {
      path: '/guitarhistory',
      name: 'guitarhistory',
      component: () => import('@/views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史',
      },
    },
    {
      path: '/guitarevent',
      name: 'guitarevent',
      component: () => import('@/views/GuitarEvent.vue'),
      meta: {
        title: '吉他社近期活動公告',
      },
    },
    {
      path: '/guitarLearning',
      name: 'guitarLearning',
      component: () => import('@/views/GuitarLearning.vue'),
      meta: {
        title: '吉他社教學內容',
      },
    },
    {
      path: '/prepare',
      name: 'prepare',
      //alias 別名
      alias: ['/dance', '/baseball', '/badminton', '/soccer', '/scout'],
      component: () => import('@/views/NotReady.vue'),
      meta: {
        title: '準備中',
      },
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('@/views/NotFind.vue'),
      meta: {
        title: '404',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'all',
      redirect: '/404',
    },
    // {
    //   path: '/:notFound(.*)',
    //   redirect: '/',
    // },
  ],
});

router.afterEach((to, from) => {
  document.title = to.meta.title;
});

export default router;
