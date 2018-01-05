<template>
  <div>
    <Eheader/>
    <div id="indexbox" class="main">
      <!--Tap下划线还没完成-->
      <div class="popup"></div>
      <div class="fictitous hide"></div>
      <!--轮播图-->
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
      <!--商品列表-->
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
      <!--分界线-->
      <split/>
      <!--新人专享 图片-->
      <div class="swiper-wrapper">
        <div class="swiper-slide default_bg">
          <a href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0" class="pointer">
            <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" lazy="loaded">
          </a>
        </div>
      </div>
      <!--商家活动 限时抢购-->
      <div class="surprise_day">
        <!--包裹器-->
        <div class="surprise">
          <!--每日疯抢-->
          <div class="surprise-tit clearfix pad10 rela overflow">
            <div class="fl titimg">
              <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
            </div>
            <div class="fl ft13 ml10" style="margin-top: 1px;">距离下一场</div>
            <div class="time ftc fl ml5">
              <div class="time1 dib clearfix ft12 dtime">
                <span class="time1-1">00</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">44</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">47</span>
              </div>
            </div>
            <div class="more">
              <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0" class="db ftr">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
              </a>
            </div>
          </div>
          <div class="surprise-pro pl5 mb10">
            <div class="swiper-container surprise-scroll swiper-container-horizontal swiper-container-android" ref="goosX">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-active" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img class="image" src="https://img1.epetbar.com/2017-05/31/10/5f9ff331b32047be265ba217ecd32ca1.jpg@!300w-b" lazy="loaded">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">2.48</span>
                      </div>
                      <p class="c999 ftc ft12">省￥22.32</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide swiper-slide-next" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img class="image" src="https://img1.epetbar.com/2017-09/28/10/c8d6a265f60e93c5ad03ac3777f142e5.jpg@!300w-b" lazy="loaded">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="c999 ftc ft12">省￥43.20</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img class="image" src="https://img1.epetbar.com/2017-08/04/10/9c91bafd70b0ed668eb7abb2420252bf.jpg@!300w-b" lazy="loaded">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">8.30</span>
                      </div>
                      <p class="c999 ftc ft12">省￥74.70</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" src="https://img1.epetbar.com/2017-12/01/13/5f68537ffa126f1965def06f6e3b6a5c.jpg@!300w-b" lazy="loaded">
                      <!----> <!----></div>
                    <div class="cred ftc mt5">
                      <span class="ft12">¥</span>
                      <span class="ft17">3.20</span>
                    </div>
                    <p class="c999 ftc ft12">省￥28.80</p>
                  </a>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img class="image" src="https://img1.epetbar.com/2016-12/12/14/b0c8b9ff8526cd6e0cda27002b7797cb.jpg@!300w-b" lazy="loaded">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">8.80</span>
                      </div>
                      <p class="c999 ftc ft12">省￥79.20</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed"><img class="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">2.65</span>
                      </div>
                      <p class="c999 ftc ft12">省￥23.85</p>
                    </a>
                  </div>
                </div>
                <div class="swiper-slide" style="width: 94.2857px; margin-right: 10px;">
                  <div class="pro-block">
                    <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                      <div class="thispro-img loadimg-nofixed">
                        <img class="image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading">
                        <!----> <!----></div>
                      <div class="cred ftc mt5">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.25</span>
                      </div>
                      <p class="c999 ftc ft12">省￥38.25</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import header from '../../components/header/header.vue'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {}
    },
    mounted(){
        new BScroll(this.$refs.goosX,{scrollX:true,click:true})

    },
    components:{
      Eheader:header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .allmodule
      width: 100%
      margin-top 141px
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

     /* .default_bg*/
        /*background: url(../images/background/default-epet.png) no-repeat center center #f4f4f4;
        background-size: 120px auto;
        overflow: hidden;*/

    .surprise-tit
      position relative
      overflow hidden
    .pad10
      padding: 10px;
    .overflow
      overflow: hidden!important;
      .titimg
        float left
        img
          height: 24px;
          margin-left: -20px;
          display block
      .ft13
        font-size: 13px;
        float left
      .ml10
        margin-left: 10px;
        margin-top 2px
        .dtime
          overflow hidden
      .more
        position absolute
        top: -10px
        right -8px
        .db
          display block
        .ftr
          text-align right
          img
            width 50%
            text-align center
      .time
        margin-left: 5px
        float: left
        text-align: center
        .ft12
          font-size: 12px;
          display inline-block



    .pl5
      padding-left: 5px;
    .mb10
      margin-bottom: 100px;
      margin-top 5px
      .swiper-container
        width:220%
        height:100%
        margin 0 auto
        position relative
        overflow hidden
        .swiper-wrapper
          width 150%
          /*overflow hidden*/
          position relative
          .swiper-slide
            width: 98px
            margin-right 10px
            display inline-block
            & img
              width:100%
              display block
            & span
              color #f00
              display inline-block
              font-size 11px
            & span:first-child
              font-size 11px
            & .ftc
              text-align center
              font-size:0
            & .mt5
              margin-top 5px
            & .c999
              font-size 12px
              margin-top 4px
          .pro-block
            margin 10px








</style>
