<template>
  <div>
    <Eheader/>
    <div id="indexbox" class="main">
      <!--Tap下划线还没完成-->
      <div class="popup"></div>
      <div class="fictitous hide"></div>
      <div class="allmodule module">
          <div class="banner_item">
              <mt-swipe :auto="2000">
                <mt-swipe-item>
                  <img src="../../common/imgs/lunbo1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../common/imgs/lunbo2.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../common/imgs/lunbo3.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../common/imgs/lunbo4.jpg" alt="">
                </mt-swipe-item>
              </mt-swipe>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
  import header from '../../components/header/header.vue'
  export default{
    data(){
      return {}
    },
    mounted(){

    },
    components:{
      Eheader:header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .allmodule
      width: 100%
      margin-top 85px
      .banner_item
        width: 100%
        height: 160px
       img
         width 100%
         height 160px










































  /*.main
    max-width: 640px;
    margin: auto
    .indexnavcon
      height: 86px;
      .main
        max-width: 640px;
        margin: auto;
        .clearfix
          padding-left: 10px
        .pd5
          padding-bottom: 5px;
        .pr10
          padding-right: 10px;
        .pt5
          padding-top: 5px;
          .epet-search
            padding: 8px 0;
            background: #fff;
            text-align: center;
            display: -webkit-box;
            -webkit-box-align: center;
            display: -moz-box;
            -moz-box-align: center;
            width: 100%;
            .location
              margin-right: 20px;
            .rela
              position: relative
            .ft14
              font-size 14px
            .f1
              float: left
            .search-text
              input
                width: 100%;
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;

              a
                color: #333;
                text-decoration: none;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                .catordog c89
                  color: #898989;
                .ft13
                  font-size: 13px;
                i
                  position: absolute;
                  top: 10px;
                  right: -11px;
                  border-width: 4px;
                  font-size: 0;
                  line-height: 0;
                  border-style: solid solid dotted;
                  border-color: #898989 transparent transparent;
            p
              position: relative;
            .epet-category img
              width: 25px;
              margin-left: 10px;
              .epet-search .serach-ico
                width: 11px;
                height: 11px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                background-position: 0 0;




*/


  /* .homeWrap
     .headerWrap
       width 100%
       height 150px
       .searchWrap
         width 100%
         height 51px
         background-color #782
         .searchBg
           width 340px
           height 41px
           margin 8px auto
           background: #000;
           text-align: center;
           .leftSearch
             float left
             line-height 41px
             font-size 14px*/


</style>
