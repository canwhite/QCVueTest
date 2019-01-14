// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Hello from './components/HelloWorld.vue'
import Main from './Main.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MintUI)
Vue.use(MuseUI)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    //mode:'history',
    base:__dirname,
    routes:[
        {name:'Main',path:'/',component:Main},
        {name:'Detail',path:'/books/:id',component:Hello}
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
