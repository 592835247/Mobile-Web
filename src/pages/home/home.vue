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
      <div class="columnnavdiv">
        <ul class="clearfix hottype pt10 pb10">
          <li class="fl" style="width: 20%;">
            <a href="https://wap.epet.com/group/v226/main.html?pettype=dog&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/de2bc9261bf6ebfc241f24133b854474.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="http://wap.epet.com/v2/brandsale.html?pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/b88234ac2e2cf0f2c6c36f5576e1acd3.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0&amp;pet_type=dog">
              <img src="https://img1.epetbar.com/2017-12/13/21/c1ebce34a16eadda5a934c142f9eab98.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="https://sale.epet.com/m/mould/fashion/main.html?pet_type=dog&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/ff6fe3be0ccc1cda104d649a5982dc62.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="http://wap.epet.com/activity/cleargoods.html?pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/ac5e9b46a46304ca486b50b229b0a65b.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="https://wap.epet.com/main.html?menu_param=4&amp;is_single=1&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/00a840c25cc2f28f03925f6237689c00.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="http://wap.epet.com/trial/?pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/2ac1504b1cd475560903ec8bbb48ff10.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="https://wap.epet.com/main.html?menu_param=121&amp;is_single=1&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/cc1ecc3676befd5155c613cb36183db4.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="https://wap.epet.com/article/video/List.html?do=KnowledgeVideo&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/bdef0401534ff876873138c92916f849.jpg@!water" lazy="loaded">
            </a>
          </li>
          <li class="fl" style="width: 20%;">
            <a href="https://wap.epet.com/article/video/List.html?do=AdorableVideo&amp;pet_type=dog&amp;fw=0">
              <img src="https://img1.epetbar.com/2017-12/13/21/b49c1cfa039724a157843d09a88b854e.jpg@!water" lazy="loaded">
            </a>
          </li>
        </ul>
      </div>
      <split/>
      <div class="swiper-wrapper">
        <div class="swiper-slide default_bg">
          <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
            <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" lazy="loaded">
          </a>
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


    .columnnavdiv
      overflow hidden
      .hottype
        padding: 0
        li
          float left
          a
            img
              width: 100%;
              display: block;





    .swiper-wrapper
      width 100%
      .swiper-slide
        width: 100%;
        height: 100%;
        a
          width 100%
          img
            width 100%

      .default_bg
        /*background: url(../images/background/default-epet.png) no-repeat center center #f4f4f4;
        background-size: 120px auto;
        overflow: hidden;*/



































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
