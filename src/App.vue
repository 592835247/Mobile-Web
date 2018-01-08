<template>
  <div>
    <div class="footRouter" v-show="$route.meta.isTop">
      <div class="tab-item"  @click.stop="refreshIndex" @click="ChangeBackgroundImg">
        <router-link to="/home"></router-link>
      </div>
      <div class="tab-item tab1" @click="ChangeBackgroundImg">
        <router-link to="/sort"></router-link>
      </div>
      <div class="tab-item tab2" @click="ChangeBackgroundImg">
        <router-link to="/shopcart"></router-link>
      </div>
      <div class="tab-item tab3" @click="ChangeBackgroundImg">
        <router-link to="/myEpet"></router-link>
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
          } else {
            this.$router.replace('/home')
          }
        },
        ChangeBackgroundImg (ev) {
          let BackgroundImgs = document.querySelectorAll('.tab-item');
          for (let i = 0; i < BackgroundImgs.length; i++) {
            BackgroundImgs[i].style.backgroundPositionX = '-85px';
            event.target.parentNode.style.backgroundPositionX = '0px';
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
    z-index 3
    background-color #F5F5F5
    .tab-item
      float left
      width:42px
      height 40px
      text-align center
      font-size 14px
      color rgb(77,85,93)
      background url("./common/imgs/routerChange.png") no-repeat
      background-size: 234px 163px;
      margin 0 24px
    .tab1
      background-position: -85px -41px;
    .tab2
      background-position: -85px -81px
    .tab3
       background-position: -85px -122px

      a
        display block
        color #7e8c8d
        width 100%
        height 100%
        /*background url("../")*/
        &.router-link-active
          color: rgb(240,20,20)
      .home
        width 30px
        height 30px



  .router-fade-enter-active, .router-fade-leave-active
    transition: all  .5s;
  .router-fade-enter, .router-fade-leave-to
    opacity: 0;
  /*  transform translateX(100%)*/
</style>
