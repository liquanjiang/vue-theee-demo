import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

// 引入util工作
import util from '@/libs/util.js'

// 路由数据
import routes from './routes'

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    routes: routes
})

/**  * 路由拦截* 权限验证 */

router.beforeEach((to, from, next) => {
    if (to.path.includes('login')) {
        window.sessionStorage.clear()
        store.dispatch('logout')
    } else {
        // window.sessionStorage.setItem('isLogin', 'true')
        store.dispatch('login')
    }
    // 验证当前路由所有的匹配中是否需要有登陆验证的
    if (to.matched.some(r => r.meta.requiresAuth)) {
        // 这里暂时将sessionStorage里是否存有isLogin作为验证是否登陆的条件
        // 请根据自身业务需要修改
        const token = window.sessionStorage.getItem('isLogin')
        if (token && token === 'true') {
            next()
        } else {
            // 没有登录的时候跳转到登录界面
            util.showMessage('您还没有登录', 'warning')
            store.dispatch('logout')
            next({ name: 'login' })
        }
    } else {
        // 不需要身份校验 直接通过
        next()
    }
})

// 路由跳转成功后需要执行的操作
router.afterEach(to => {
    // console.log(to)
})

export default router
