import path from 'path'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue'),
        name: 'Home',
    },
]

const router = createRouter({
    linkActiveClass: 'font-bold shadow-md',
    history: createWebHistory(),
    routes,
})

export default router
