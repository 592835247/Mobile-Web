<template>
  <div>
    <div class="footRouter" v-show="$route.meta.isTop">
      <div class="tab-item"  @click.stop="refreshIndex">
        <router-link to="/home">  首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sort">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">购物车</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myEpet">我的E宠</router-link>
      </div>
    </div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
  </div>

</template>
<script>
  import axios from 'axios'
    export default{
        data(){
            return {}
        },
//      mounted(){
//            axios.get('/api/home')
//              .then(response=>{
//                  console.log(response.data);
//              })
//              .catch(error=>{
//                  console.log(error);
//              })
//      },
      methods:{
        refreshIndex() {
          console.log(this.$route)
          if (this.$route.path === '/home') {
            window.location = '/'
            alert('没事瞎几把点什么')
          } else {
            this.$router.replace('/home')
          }
        }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footRouter
    height 40px
    left 0
    line-height 40px
    position fixed
    width 100%
    bottom 0
    left 0
    z-index 3
    background-color moccasin
    .tab-item
      float left
      width:25%
      text-align center
      font-size 14px
      color rgb(77,85,93)

      a
        display block
        color #7e8c8d
        /*background url("../")*/
        &.router-link-active
          color: rgb(240,20,20)
      .home
        width 30px
        height 30px



  .router-fade-enter-active, .router-fade-leave-active
    transition: all  .8s;
  .router-fade-enter, .router-fade-leave-to
    opacity: 0;
  /*  transform translateX(100%)*/
</style>
