import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../pages/login.vue'
import manager from '../pages/manager.vue'
import artList from '../pages/artList.vue'
import artAdd from '../pages/artAdd.vue'
import essayList from '../pages/essayList.vue'
import essayAdd from '../pages/essayAdd.vue'
import admin from '../pages/admin.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: login
}, {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
        path: '/manager',
        name: 'manager',
        component: manager,
        meta: []
    }, {
        path: '/artList',
        name: 'artList',
        component: artList,
        meta: ['文章管理', '文章列表'],
    }, {
        path: '/artAdd',
        name: 'artAdd',
        component: artAdd,
        meta: ['文章管理', '发布文章'],
    }, {
        path: '/essayList',
        name: 'essayList',
        component: essayList,
        meta: ['杂文管理', '杂文列表'],
    }, {
        path: '/essayAdd',
        name: 'essayAdd',
        component: essayAdd,
        meta: ['杂文管理', '发布杂文'],
    }, {
        path: '/admin',
        name: 'admin',
        component: admin,
        meta: ['管理员', '管理员'],
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router