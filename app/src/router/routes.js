import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home'
import example from '../components/home/scenario/example'
const others = () => import('../components/otherperson/person')
const errorPage = () => import('../components/404.vue')
const personal = () => import('../components/personal/personal')
const login = () => import('../components/login/login')
const knowledge = () => import('../components/knowledge/knowledge.vue')
const expired = () => import('../components/conmon/expired.vue')

Vue.use(Router)

// requiresAuth属性表示需要授权的访问
// meta 代表不需要登录验证，auth代表需要登录验证，
// 如果需要登录验证，而当前没有登录时，路由跳转将会阻止，并返回登录页
const meta = { requiresAuth: false }
const auth = { requiresAuth: true }

const routes = [
    {
        path: '/',
        meta: meta,
        redirect: { name: 'login' }
    },
    {
        // 这里应当设置为404页面，当输入不存在的路由时，跳转到404
        path: '*',
        meta: meta,
        redirect: { name: 'error' },
        component: errorPage
    },
    {
        path: '/404',
        name: 'error',
        meta: meta,
        component: errorPage
    },
    {
        path: '/login',
        name: 'login',
        meta: meta,
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: auth
    },
    {
        path: '/example/:id',
        name: 'example',
        component: example,
        meta: auth
    },
    {
        path: '/personal',
        name: 'personal',
        component: personal,
        meta: auth
    },
    {
        path: '/others',
        name: 'others',
        component: others,
        meta: auth
    },
    {
        path: '/knowledge',
        name: 'knowledge',
        component: knowledge,
        meta: auth
    },
    {
        path: '/expired',
        name: 'expired',
        component: expired,
        meta: auth
    }
]

// 重新组织后导出
export default routes
