import { createRouter, createWebHistory } from 'vue-router';
export const constantRoutes = [
  {
    path: '/',
    component: () => import('../views/Edit.vue')
  },
  {
    name: 'edit',
    path: '/edit',
    component: () => import('../views/Edit.vue')
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => import('../views/demo/index.vue')
  },
  {
    name: 'preview',
    path: '/preview',
    component: () => import('../views/Preview.vue')
  },
  {
    name: 'mypreview',
    path: '/mypreview',
    component: () => import('../views/MyPreview.vue')
  },
  {
    name: 'edit-load',
    path: '/edit-load',
    component: () => import('../views/demo/edit-load.vue')
  },
  {
    name: 'set-node-attr',
    path: '/set-node-attr',
    component: () => import('../views/demo/set-node-attr.vue')
  },
  {
    name: 'event-callback',
    path: '/event-callback',
    component: () => import('../views/demo/event-callback.vue')
  },
  {
    name: 'change-attr',
    path: '/change-attr',
    component: () => import('../views/demo/change-attr.vue')
  }
];
const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: constantRoutes
});

export default router;
