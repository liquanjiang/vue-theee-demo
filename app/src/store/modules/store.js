export default {
    state: {
        userInfo: {},
        headerState: null,
        isLogin: window.sessionStorage.getItem('isLogin') === 'true',
        signShow: false,
        loading: false
    },
    getters: {},
    actions: {
        login ({ commit }) {
            commit('LOGIN')
        },
        logout ({ commit }) {
            commit('LOGOUT')
        },
        signIn ({ commit }) {
            commit('SIGNIN')
        },
        signOut ({ commit }) {
            commit('SIGNOUT')
        },
        showLoading ({ commit }) {
            commit('loadingShow')
        },
        hideLoading ({ commit }) {
            commit('loadingHide')
        }
    },
    mutations: {
        LOGIN (state) {
            window.sessionStorage.setItem('isLogin', 'true')
            state.isLogin = true
        },
        LOGOUT (state) {
            window.sessionStorage.clear()
            state.isLogin = false
        },
        SIGNIN (state) {
            state.signShow = true
        },
        SIGNOUT (state) {
            state.signShow = false
        },
        loadingShow (state) {
            state.loading = true
        },
        loadingHide (state) {
            state.loading = false
        }
    }
}
