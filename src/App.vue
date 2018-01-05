<template>
  <div>
    <div class="footRouter">
      <div class="tab-item">

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
    <router-view />
  </div>

</template>
<script>

    export default{
        data(){
            return {}
        },

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footRouter
    height 20px
    left 0
    line-height 20px
    position absolute
    width 100%
    bottom 0
    left 0
    .tab-item
      float left
      width:25%
      text-align center
      font-size 14px
      color rgb(77,85,93)
      a
        display block
        &.router-link-active
          color: rgb(240,20,20)
      .home
        width 30px
        height 30px



</style>
