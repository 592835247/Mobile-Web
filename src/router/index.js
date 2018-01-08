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
const sortTab1 = ()=>import('../pages/sortTab1/sortTab1.vue')
const sortTab2 = ()=>import('../pages/sortTab2/sortTab2.vue')
const myLogin1 = ()=>import('../pages/myLogin1/myLogin1.vue')
const myLogin2 = ()=>import('../pages/myLogin2/myLogin2.vue')
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
        redirect:'/sort/sortTab1',
        meta: {keepAlive: true, isTop: true},
        children:[
          {path:'sortTab1',component:sortTab1,
            meta: {keepAlive: false, isTop: true}
          },
          {path:'sortTab2',component:sortTab2,
            meta: {keepAlive: false, isTop: true}
          },
        ]
      },
      {
        path:'/shopcart',component:shopcart,
        meta: {keepAlive: true, isTop: false}
      },
      {
        path:'/myEpet',component:myEpet,
        redirect:'/myEpet/myLogin1',
        meta: {keepAlive: true, isTop: false},
        children:[
          {path:'myLogin1',component:myLogin1,
            meta: {keepAlive: false, isTop: true}
          },
          {path:'myLogin2',component:myLogin2,
            meta: {keepAlive: false, isTop: true}
          },
        ]
      },
  ]
})
