// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import Main from './Main.vue'
Vue.config.productionTip = false


import Cube from 'cube-ui' // 一般直接放在这个位置
import Hello from './components/HelloWorld.vue'
import recycle from './components/RecycleList.vue'


Vue.use(Cube)


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    //mode:'history',
    base:__dirname,
    routes:[
        {name:'Main',path:'/',component:Main},
        {name:'Detail',path:'/details/:id',component:Hello},
        {name:'List',path:'/list/:id/:mode',component:recycle},
    ],
    linkActiveClass:"active",
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
