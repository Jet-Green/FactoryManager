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
            component: () => import('../views/Scanner.vue'),
            props: true 
        },
        {
            path: "/party-movement",
            name: 'PartyMovement',
            component: () => import('../views/PartyMovement.vue')
        },
        {
            path: "/info-about-order",
            name: 'InfoAboutOrder',
            component: () => import('../views/InfoAboutOrder.vue'),
            props: true 
        }
    ]
})

export default router
