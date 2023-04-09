import AuthForm from '@/components/Auth/AuthForm.vue';
import MainPage from '@/pages/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/auth',
        component: AuthForm
    },
    { 
        path: '/unLog', 
        redirect: '/auth'
    }
]


const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
