import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomeView.vue'
import TestView from '/src/components/TestView.vue'
import SidebarLayout from '/src/layouts/SideBar.vue'
import About from '/src/components/About.vue'
import MainLayout from '/src/layouts/AltDrive.vue'
import OnboardingBaseLayout from '/src/layouts/OnboardingBaseLayout.vue'
import Signup from '/src/views/signup/Signup.vue'
import Login from '/src/views/login/Login.vue'

import SignupIndividual from '/src/views/signup/SignupIndividual.vue'
const routes = [
    {
        path: '/baselayouts',
        name: 'SidebarLayout',
        component: SidebarLayout,
        children: [
            {
                path: '',
                name: 'Test',
                component: TestView,
            },
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/about',
                name: 'About',
                component: About,
            },
        ],
    },
    {
        path: '/',

        redirect: '/signup',
        component: OnboardingBaseLayout,
        name: 'OnboardingBaseLayout',
        meta: {
            skipAuth: true,
        },
        children: [
            {
                path: '/signup',
                name: 'Signup',
                component: Signup,
            },
            {
                path: '/signup/individual',
                name: 'SignupIndividual',
                component: SignupIndividual,
            },
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },

            {
                path: 'forgot-password',
                name: 'Forgot Password',
                component: () => import('/src/views/login/ForgotPassword.vue'),
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    // mode: 'history',
    routes,
})

export default router
