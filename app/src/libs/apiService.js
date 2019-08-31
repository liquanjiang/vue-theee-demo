import axios from 'axios'
import qs from 'qs'
import Util from './util'
import router from '../router/index'

const JsonHeaders = { 'Content-Type': 'application/json' }
const FormHeaders = { 'Content-type': 'multipart/form-data;charset=UTF-8' }
const time = process.env.VUE_APP_CURRENTMODE === 'production' ? 50000 : 60000

const service = axios.create({
    headers: JsonHeaders,
    timeout: time
})

const formDataService = axios.create({
    // 需要非JSON格式交互数据时，设置以下格式
    headers: FormHeaders,
    timeout: time
})

formDataService.interceptors.request.use((config) => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
})

service.interceptors.request.use((config) => {
    const login = config.url.includes('login')
    const token = window.sessionStorage.getItem('token')
    if (token && !login) {
        config.headers.common['Authorization'] = 'Bearer ' + token
    } else if (!token && !login) {
        Util.showMessage('登录超时，请重新登录', 'warning', false)
        setTimeout(function () {
            router.push('/login')
        }, 3000)
    }
    return config
})

service.interceptors.response.use(res => {
    if (res.data.code === 500) {
        Util.showMessage('500: 服务器内部异常！', 'error', false)
    } else if (res.data.code === 401 || res.data.code === 444 || res.data.code === 403) {
        // 跳转到登录页面
        window.sessionStorage.clear()
        window.localStorage.clear()
        if (res.data.code === 444) {
            router.push('/expired')
            return res.data
        } else {
            Util.showMessage('登录超时，请重新登录', 'warning', false)
            Util.showMessage(res.data.message, 'error', false)
            setTimeout(function () {
                router.push('/login')
            }, 3000)
        }
    }
    return res.data
}, err => {
    return Promise.reject(err)
})

/* --------------- 接口配置文档 -------------------- */
const apiService = {
    home: {}, // 首页排行榜接口
    service: service,
    infoCount: {}, // home 首页相关接口
    activity: {}, //
    knowledge: {},
    myupload: {},
    message: {}
}

export default apiService
