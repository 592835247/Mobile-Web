<template>
  <div>
    <header class="clearfix rela top bgfff">
      <div id="1" class="fl sort nav-sort ft13 bold cur">
        <router-link to="/sort/sortTab1"><span >分类</span></router-link>
      </div>
      <div id="2" class="fl brand nav-sort ft13 bold">
        <router-link to="/sort/sortTab2"><span class="mrg">品牌</span></router-link>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" class="abs search">
      </a>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


  </div>
</template>
<script>
  export default{
    data(){
      return {
          classIsShow:true,
      }
    },
    mounted(){
        this.$store.dispatch('requestSort')
    }
//    methods:{
//      changeColor(){
//          if (){
//
//          }else {
//
//          }
//            this.classIsShow = !this.classIsShow
//      }
//    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .top
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 11;
  .bgfff
    background: #fff;
  .rela
    position: relative;
    .sort
      text-align: right;
    .nav-sort
      width: 50%;
      height: 40px;
      line-height: 40px;
    .ft13
      font-size: 13px;
    .fl
      float left
    .bold
      font-weight: 700;
      a
        color: #333;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        span
          font-weight: 700;
          padding: 0 4px;
      .router-link-active span
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
          display: inline-block;
          height: 40px;
          cursor: pointer;
        .mrg
          margin-left 20px

    a
      color: #333;
      .abs
        position absolute
      img
        border: 0;
        vertical-align middle
      .search
        top: 13px;
        right: 15px;
        width: 14px;
        height: 14px;
</style>
