//这个东西用的时候出现问题了，暂时先放在这里，有空的时候再了解一下0
import Vue from 'vue'
//引入创建的四个页面
import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'

//引入路由组件
import VueRouter from 'vue-router'
//引入路由实例插件
Vue.use(VueRouter)


//创建路由实例
//无论是服务端还是前端开发，路由的使用都有一个明确的原则，不直接使用路由定义，
//因为万一要修改这个url怎么办，在使用过的地方都改一次吗，所以我们要给它起名字
const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        //将页面组件和path指定的路由关联
        {name:'Home',path:'/',component:Home},
        {name:'Categories',path:'/categories',component:Explorer},
        {name:'ShoppingCart',path:'/shopping-cart',component:Cart},
        {name:'Me',path:'/me',component:Me}
    ]
})
