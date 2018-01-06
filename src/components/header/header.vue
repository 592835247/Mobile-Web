<template>
    <div class="wrap">
      <div class="header">
        <router-link to="####"><img src="../../common/imgs/banner.jpg" alt=""></router-link>
      </div>
      <div id="indexbox" class="main">
        <div class="indexheader">
          <div class="indexnavcon">
            <div class="headerbox float-div">
              <div class="main">
                <div class="clearfix pt5 pl10 pr10 pb5">
                  <div class="epet-search bgf">
                    <div class="fl rela ft14 location">
                      <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
                        <span class="catordog c89">狗狗站</span>
                        <span class="c89">|</span>
                        <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                        <i class="triangle"></i>
                      </a>

                    </div>
                    <p class="search-text">
                      <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                        <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                        <span class="eico serach-ico"></span>
                      </a>
                    </p>
                    <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                      <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png"></a>
                  </div>
                </div>
                <div  class="find_nav">
                  <div class="find_nav_left dscroll">
                    <div class="find_nav_list dscroll-div " ref="nav">
                      <ul class="dscroll-ul">
                        <li data-type="0" data-shareid="1" class="dscroll-li on" style="width: 71.5px;"
                            v-for="(navItem,index) in home.menus" :key="index">
                          <a href="https://wap.epet.com/main.html?menu_param=0&amp;pet_type=dog&amp;fw=0">
                           <span class="rela">
                          <span>{{navItem.menu_name}}</span>
                          <i></i></span>
                          </a>
                        </li>
                      </ul>
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
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default{
        data(){
            return {}
        },
      mounted(){
            this.$nextTick(()=>{
              new BScroll(this.$refs.nav,{scrollX:true,click:true})
            })
      },
      computed:{
        ...mapState(['home'])
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .wrap
   position fixed
   top 0
   left 0
   z-index 10
   background-color  white
  .header
    height 55px
    width 100%

    &>a
      img
        width 100%
        height 100%
   #indexbox
     .indexheader
       width: 100%
       .indexnavcon
         width: 100%
         height: 86px
       .headerbox
         width: 100%
         height: 100%
         .main
           width: 100%
           height: 100%
           max-width: 640px;
           margin: auto;
           .clearfix
             width: 355px
             height: 41.6px
             padding 5px 10px
             padding-top 0px
             .epet-search
               width: 355.2px
               height: 25.6px
               background: #fff;
               text-align center
               .location
                 display inline-block
                 position relative
                 margin-right: 20px;
                 width: 80px
                 height: 22.4px
                 a
                   display inline-block
                   width: 90px
                   height: 19.2px
                 .catordog
                   width: 36px
                   height: 19.2px
                 .c89
                   color: #898989
                   font-size 14px
                 .myposition
                   width: 20px
                   height: 16.8px
                 .triangle
                   display inline-block
                   position: absolute;
                   top: 10px;
                   right: -21px;
                   border-width: 4px;
                   font-size: 0;
                   line-height: 0;
                   border-style: solid solid dotted;
                   border-color: #898989 transparent transparent;
                   font-style: normal
               p
                 display: inline-block;
                 width: 210px
                 height: 25px
                 -webkit-margin-before: 1em;
                 -webkit-margin-after: 1em;
                 -webkit-margin-start: 0px;
                 -webkit-margin-end: 0px;
                 position: relative
                 -webkit-box-flex: 1
                 text-align: center
                 a
                   width: 220px
                   height: 19.2px
                   text-decoration: none;
                   -webkit-tap-highlight-color: rgba(0,0,0,0)
                   color: #333
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
                 .serach-ico
                   display inline-block
                   vertical-align middle
                   width: 11px;
                   height: 11px;
                   position: absolute;
                   right: 5px;
                   top: 0;
                   bottom: 0;
                   margin: auto 0;
                   background-position: 0 0;
                 .eico
                   background: url(../../common/imgs/img.png) no-repeat;
                   background-size: 11px auto;
               .epet-category
                 display: inline-block
                 width: 35px
                 height: 25.6px
               img
                 display inline-block
                 width: 25px;
                 height: 25px
                 vertical-align middle
                 margin-left: 10px;



           .find_nav
             width 100%
             height: 35px
             min-width 320px
             .dscroll
               width: 100%
               height: 100%
               .dscroll-ul
                 width 140%
                 white-space: nowrap;
                 display: flex;
                 text-align center
                 line-height 35px
                 .on a
                   color greenyellow
                 .dscroll-li
                   width: 74.64px
                   height: 36px
                   font-size 14px







</style>
