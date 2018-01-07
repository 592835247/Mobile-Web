<template>
  <div>
    <div class="wap-top-bar hide" style="display: block;">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="">
          <a href="javascript:void(0)" class="aback page-top go-back"
             @click="$router.back()"
          ></a>
          <span class="ft18 topbar-title">购物车</span>
          <div class="zfont ft16 block">
            <a class="zcolor topbar-link ">
            </a>
          </div>
          <span class="mla pull-right Jbur ml J_bur" @click.stop="ChangeCatMenu"></span>
        </div>
      </header>
      <transition name="bounce" mode="out-in" v-show="ChangeCatMenuShow">
      <div class="header-quick header-quicknew  hide Jtk" style="display: block;" v-show="ChangeCatMenuShow">
        <a href="https://wap.epet.com/main.html?pet_type=dog">
          <span class="icon1"></span>
          <p>首页</p>
        </a>
        <a href="https://wap.epet.com/category.html">
          <span class="icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="https://wap.epet.com/cart/">
          <span class="icon4" id="getCartNum"><em>0</em></span>
          <p>购物车</p>
        </a>
        <a href="https://wap.epet.com/user/UserCenter.html">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </a>
      </div>
      </transition>
    </div>
    <!--新增内容  一会进行 修改-->
    <div id="CartBox">
      <div class="mycart" data-reactid=".0">
        <div class="m-emptycoupon ftc bgfff" data-reactid=".0.0">
          <div data-reactid=".0.0.0">
            <span class="u-emtcoupon" data-reactid=".0.0.0.0">&nbsp;</span>
          </div>
          <div class="ftc emttip ft16" data-reactid=".0.0.1">购物车是空的</div>
          <div class="emt-a mt15" data-reactid=".0.0.2">
            <a href="http://wap.epet.com" class="c999 ft16 mr5" data-reactid=".0.0.2.0">去逛逛</a>
            <a href="/zt/knowledge/favorites.html" class="c999 ft16" data-reactid=".0.0.2.1">我的收藏</a>
          </div>
        </div>
        <span data-reactid=".0.1"></span>
        <div class="chooseaddbg hide" data-reactid=".0.2"></div>
        <div class="chooseadd hide" data-reactid=".0.3">
          <p class="addtext" data-reactid=".0.3.0">收货地址</p>
          <ul class="choose" data-reactid=".0.3.1">
            <li class="handcur tab1 now" data-reactid=".0.3.1.0">请选择</li>
            <li class="handcur tab2 hide" data-reactid=".0.3.1.1">请选择</li>
            <li class="handcur tab3 hide" data-reactid=".0.3.1.2">请选择</li>
            <li class="handcur tab4 hide" data-reactid=".0.3.1.3">请选择</li>
            <li class="handcur tab5 hide" data-reactid=".0.3.1.4">请选择</li>
          </ul>
          <div class="address" data-reactid=".0.3.2">
            <ul class="chooseone" data-reactid=".0.3.2.0"></ul>
            <ul class="choosetwo" data-reactid=".0.3.2.1"></ul>
            <ul class="choosethree" data-reactid=".0.3.2.2"></ul>
            <ul class="choosefour" data-reactid=".0.3.2.3"></ul>
            <ul class="choosefive" data-reactid=".0.3.2.4"></ul>
          </div>
          <div class="addclose handcur" data-reactid=".0.3.3"></div>
        </div>
        <div class="addresslist hide" data-reactid=".0.4">
          <p class="addtext" data-reactid=".0.4.0">收货地址</p>
          <ul data-reactid=".0.4.1"></ul>
          <p class="handcur choseother" data-reactid=".0.4.2">选择其他配送区域</p>
          <div class="addclose handcur" data-reactid=".0.4.3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        ChangeCatMenuShow:false
      }
    },
    methods:{
      ChangeCatMenu(){
          this.ChangeCatMenuShow = !this.ChangeCatMenuShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .head-top
    height: 50px;
    line-height: 50px;
    position: relative;
    padding: 0 10px;
    border-bottom: 1px solid #f3f3f3;
    z-index 3
  .zcolor
    color: #333;
  .rela
    position: relative;
  .bgfff
    background: #fff;
  .ftc
    text-align center
    .aback
      background: url(../../common/imgs/CallBackShopCart.png) no-repeat;
      background-size: 9px 17px;
      display: block;
      width: 22px;
      height: 20px;
      position: absolute;
      margin-top: 16px;
  /*                更新的新内容***********************************         ***************************        ***************************************/
    .topbar-title
      width: 90%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      margin: 0 auto;
      font-size 16px
    .zfont
       position: absolute;
       right: 15px;
       top: 0;
      .topbar-link
        color: #333;
    .Jbur
      background: url(../../common/imgs/ShopCartRightImg.png) no-repeat;
      background-size: 20px 20px;
      position: absolute;
      top: 0;
      right: 10px;
    .mla
      width: 20px;
      height: 20px;
      /*background: url(../images/imgtk.png) no-repeat;*/
      background-size: 20px 20px;
      margin-top: 14px;
      position: relative;
      z-index: 100;
      cursor: pointer;
    .pull-right
      float right
    .ml
      margin-right -10px
  .header-quick
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d7d7d7;
    overflow: hidden;
    padding: 10px 0;
    a
      display: inline-block;
      width: 25%;
      text-align: center;
      float: left;
      p
        color: #666;
        font-size: 14px;
        text-align: center;
        margin-top 5px
      span
        display: block;
        height: 30px;
      .icon1
        background: url(../../common/imgs/head_icon1.png) 50% 0 no-repeat;
        background-size: auto 100%;
      .icon2
        background: url(../../common/imgs/head_icon2.png) 50% 0 no-repeat;
        background-size: auto 100%;
      .icon4
        background: url(../../common/imgs/head_icon4.png) 50% 0 no-repeat;
        background-size: auto 100%;
        em
          display: inline-block;
          height: 18px;
          width: 18px;
          color: #fff;
          text-align: center;
          line-height: 18px;
          font-size: 12px;
          background: #FF0000;
          border-radius: 50%
          border: #fff solid 2px;
          position: relative;
          top: -5px;
          left: 10px
          vertical-align: middle;
          font-style: normal;
      .icon5
        background: url(../../common/imgs/head_icon5.png) 50% 0 no-repeat;
        background-size: auto 100%;
  .m-emptycoupon
    padding-bottom: 50px;
  .bgfff
    background-color #fff
  .ftc
    text-align center
    .u-emtcoupon
      margin: 50px auto 20px;
      display: inline-block;
      width: 100px;
      height: 100px;
      background: url(../../common/imgs/cart-ico.png) no-repeat 0 -160px;
      background-size: 105px auto;
    .emttip
      color: #dbdbdb;
    .ft16
      font-size: 16px;
    .mt15
      margin-top: 15px;
      a
        display: inline-block;
        border-radius: 5px;
        border: 1px solid #999;
        height: 40px;
        line-height: 40px;
        width: 100px;
      .c999
        color: #999;
      .mr5
        margin-right 5px
        /*炫酷动画*/
  .bounce-enter-active {
    animation: bounce-in .8s;
  }
  .bounce-leave-active {
    animation: bounce-in .8s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
/*动画上移*/
/*  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }
  .fade-enter, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {
    transform translateY(-70px)
    opacity 0
  }*/



</style>
