import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import homePage from '../views/homePage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (to.name !== 'login' && !token) next({ name: 'login' })
    else next()
})

export default router