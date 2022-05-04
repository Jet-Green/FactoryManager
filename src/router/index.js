import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: "/scanner",
            name: 'Scanner',
            component: () => import('../views/Scanner.vue')
        }

    ]
})

export default router
