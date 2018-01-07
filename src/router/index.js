/**
 * Created by Hyf on 2018/1/4.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import home from '../pages/home/home.vue'
// import myEpet from '../pages/myEpet/myEpet.vue'
// import shopcart from '../pages/shopcart/shopcart.vue'
// import sort from '../pages/sort/sort.vue'
//路由懒加载
const home = ()=>import('../pages/home/home.vue')
const myEpet = ()=>import('../pages/myEpet/myEpet.vue')
const shopcart = ()=>import('../pages/shopcart/shopcart.vue')
const sort = ()=>import('../pages/sort/sort.vue')
//配置路由器
export default new VueRouter({
  //配置路由
  routes:
    [
      {path:'/',redirect:'/home',
        meta: {keepAlive: true, isTop: true}
      },
      {path:'/home',component:home,
        meta: {keepAlive: true, isTop: true}
      },
      {path:'/sort',component:sort,
        meta: {keepAlive: true, isTop: true}
      },
      {
        path:'/shopcart',component:shopcart,
        meta: {keepAlive: true, isTop: false}
      },
      {
        path:'/myEpet',component:myEpet,
        meta: {keepAlive: true, isTop: false}
      },
  ]
})
