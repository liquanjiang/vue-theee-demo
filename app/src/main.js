import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.prototype.$lodash = lodash

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
