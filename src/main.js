import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false

//公共事件Bus
const bus = new Vue()
Vue.prototype.$bus = bus


import store from "./vuex/store"
Vue.config.silent = true
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
