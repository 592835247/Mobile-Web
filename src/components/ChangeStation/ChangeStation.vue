<template>
  <!--切换站点-->
    <div id="wrap" >
      <div class="switchtype">
        <div type="dog" class="go-dog pointer dog" v-show="isShowClose" @click.stop="ChangeClose1(true)"></div>
        <div class="changepop bgfff block" style="transform:scale(0)" ref="main_pop" v-show="!isShowClose" >
          <div class="cartc-bg db"></div>
          <div class="cartc-box rela overflow">
            <div class="main">
              <p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b></p>
              <p class="ftc mt20  c666">亲爱的小主</p>
              <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
              <ul class="clearfix ftc change-ul">
                <li type="cat" class="fl pet1 cat">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                  <div class="pet1name">猫猫站</div>
                </li>
                <li type="dog" class="fl pet2 mainpet rela dog">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                  <div>狗狗站</div>
                  <b class="current-line c000 ft12">▁</b>
                  <a href="javascript:;" class="cfff ft14 ftc once-into mt15 dib">立即进入</a>
                </li>
                <li type="fish" class="fl pet3 fish">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                  <div class="pet3name">水族站</div>
                </li>
              </ul>
            </div >
          </div>
          <a href="javascript:;" class="cartc-close afff ft20 ftc c666" @click.stop="ChangeClose1(false)">
            <img src="//static.epetbar.com/static_web/wap/src/images/close2.png">
          </a>
        </div >
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                isShowClose:true,

            }
        },
      methods:{
        ChangeClose1(isShow){
//            还是稍微有点BUG 第一次不会有过渡动画  第二次点才有 明天改进 提交时间2018/1/6
          if (isShow) {
            this.$refs.main_pop.style = 'transform:scale(1)'
          } else {
            this.$refs.main_pop.style = 'transform:scale(0)'
          }
//            if (isShow){
//              this.isShowClose = !this.isShowClose
//              this.$refs.main_pop.style.transform = 'scale(1)';
//              this.$refs.main_pop.style.opacity = 1;
//            }else {
//
//              this.$refs.main_pop.style.transform = 'scale(.01)';
//              this.$refs.main_pop.style.opacity = 0;
//              this.$refs.main_pop.style.transition ='all .4s linear 0s';
//            }
        },
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .go-dog
    background: url(../../common/imgs/ChangeImgs.png) no-repeat;
    width: 41px;
    height: 46px;
    background-size: 80px auto;
    background-size 200% 100%
    position: fixed;
    bottom: 15%;
    right: -1px;
    z-index: 5;
    animation: Change 0.5s steps(2) infinite;
  @keyframes Change
    0%
      background-position 0 center
    100%
      background-position 205% center
  .changepop
      visibility: hidden;
      background-color #ffff
      -webkit-transform: scale(.01,.01);
      -moz-transform: scale(.01,.01);
      -o-transform: scale(.01,.01);
      -ms-transform: scale(.01,.01);
      transform: scale(.01,.01);
      -webkit-transition: all .4s linear 0s;
      -moz-transition: all .4s linear 0s;
      -o-transition: all .4s linear 0s;
      -ms-transition: all .4s linear 0s;
      transition: all .4s linear 0s;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;
      z-index: 104;
      text-align center
      .cartc-bg
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -moz-opacity: 1;
        opacity: 1;
        display: none;
        z-index: 101;
    .block
      visibility: visible;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
      .cartc-box
        width: 100%;
        position: fixed;
        border-radius: 5px;
        z-index: 102;
        overflow: hidden;
        display: block;
        top: 97.5px;
        left: 0px;
      .rela
        position: relative;
        .main
          max-width: 640px;
          margin: auto;
          .ftc
            text-align: center;
          .c999
            color: #999;
          .rela
            position: relative;
          .ft16
            font-size: 16px;
            .b-line
              width: 100%;
              position: absolute;
              bottom: -4px;
              left: 0;
              text-align: center;
            .c000
              color: #000;
            .ft12
              font-size: 12px
            b
              font-weight: 400;
          .c666
            font-size: 16px;
            color: #666;
          .mt20
            margin-top: 20px;
          .c333
            color: #333;
            font-size 20px
            margin-top 15px
          .change-ul
            margin-top: 35px;
            min-width: 305px;
            padding-left: 10%;
            li
              float left
            .cat
              width: 25%;
              text-align: center;
              margin-top: 21%;
              img
                max-width: 70%;
                vertical-align middle
              .pet1name
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            .dog
              color: #4e9a36;
              width: 40%;
              margin-top: 14%;
              img
                max-width: 80%;
                vertical-align middle
              div
                margin-top: 5px;
              .current-line
                width: 100%;
                position: absolute;
                top: -58px;
                left: 0;
                text-align: center;
              .once-into
                background: #4e9a36;
                border-radius: 30px;
                padding: 7px 15px;
                margin-top: 30px;
                font-size: 12px;
              .cfff
                color: #fff;
              .dib
                display inline-block

            .fish
              width: 25%;
              text-align: center;
              margin-top: 21%;
              img
                vertical-align middle
                max-width: 70%;
              .pet3name
                margin-top: 5px;
                font-size: 12px;
                color: #999;

      .cartc-close
        width: 100%;
        height: 40px;
        line-height: 50px;
        position: fixed;
        bottom: 20px;
        left: 0;
        display: block;
        border-top: 1px solid #e7e7e7;
        z-index: 103;
      a
        img
          width: 23px;
          vertical-align middle
</style>
