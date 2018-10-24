import Vue from 'vue'
import App from './App.vue'
//import router from './config/routes.js'
//引入创建的四个页面
import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'
import BookDetail from './books/detail.vue'
import Main from './Main.vue'




//引入路由组件
import VueRouter from 'vue-router'
//引入路由实例插件
Vue.use(VueRouter)

//引入vue-resource
//import VueResource from 'vue-resource'
//Vue.use(VueResource)
//Vue.http.options.emulateHTTP = true
//Vue.http.options.emulateJSON = true
//Vue.http.options.xhr = { withCredentials: true }
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'



//创建路由实例
//无论是服务端还是前端开发，路由的使用都有一个明确的原则，不直接使用路由定义，
//因为万一要修改这个url怎么办，在使用过的地方都改一次吗，所以我们要给它起名字
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        
        {
          name:'Main',
          path:'/',
          component:Main,
          children:[
                //将页面组件和path指定的路由关联
                {name:'Home',path:'home',component:Home},
                {name:'Categories',path:'categories',component:Explorer},
                {name:'ShoppingCart',path:'shopping-cart',component:Cart},
                {name:'Me',path:'me',component:Me},
            ]
        },
        {name:'BookDetail',path:'/books/:id',component:BookDetail}
    ],
    linkActiveClass:"active",
})




new Vue({
  el: '#app',
  //将路由实例添加到vue实例中
  router,
  render: h => h(App)
})
