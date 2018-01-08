<template>
  <div>
    <header style="height: 170px">
      <div class="login_bg" style="height: 100%">
        <div class="rela ftc head-top">
          <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top"></a>
          <div class="zfont ft16 block"><a href="https://wap.epet.com/register.html" class="afff">注册</a></div>
        </div>
        <div class="mlogo">
          <img src="../../common/imgs/bg2.png">
        </div>
        <div class="es_por4">
          <ul id="tags4" class="clearfix login_style">
            <li class="selectTag4">
              <router-link to="/myEpet/myLogin1">普通登录</router-link>
              <i>
              </i>
            </li>
            <li class=""><router-link to="/myEpet/myLogin2">手机动态密码登录</router-link>
              <i>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login_bg
    background: url(../../common/imgs/bg1.png) no-repeat;
    background-size: 100% 100%;
    .head-top
      border-bottom: 0;
      height: 50px;
      line-height: 50px;
      position: relative;
      padding: 0 1em;
      /*border-bottom: 1px solid #f3f3f3;*/
    .rela
      position relative
    .ftc
      text-align: center;
      .aback
        background: url(../../common/imgs/back.png) no-repeat;
        background-size: 9px 17px;
        display: block;
        width: 22px;
        height: 20px;
        position: absolute;
        margin-top: 16px;
      .zfont
        right: 10px;
        position: absolute;
        top: 0;
        a
          color #fff
    .mlogo
      padding: 10px 0 20px 0;
      img
        display: block;
        margin: auto;
        width: 20%;
        vertical-align: middle;

    .es_por4
      background-color: rgba(255,255,255,0.3)
      overflow hidden
      li
        float: left;
        width: 50%;
        text-align: center;
        height: 44px;
        line-height: 44px;
        position: relative;
        a
          font-size: 15px;
          display: block;
          color #fff
        i
          display: block;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          margin: auto;

</style>
