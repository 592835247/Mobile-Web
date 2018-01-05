/**
 * Created by Hyf on 2018/1/4.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '../pages/home/home.vue'
import myEpet from '../pages/myEpet/myEpet.vue'
import shopcart from '../pages/shopcart/shopcart.vue'
import sort from '../pages/sort/sort.vue'
//配置路由器
export default new VueRouter({
  //配置路由
  routes:
    [
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/sort',component:sort},
      {path:'/shopcart',component:shopcart},
      {path:'/myEpet',component:myEpet},
  ]
})
