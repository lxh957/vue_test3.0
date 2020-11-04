import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Parent from "../components/parent.vue"
var routes = [
    {
        path: "/", name: "parent", component: Parent
    },
    
    { path: "*", component: { template: "<h2>404---404</h2>" } }
]
var router = new VueRouter({
    routes
})
export default router