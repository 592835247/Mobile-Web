<template>
    <div>
      <div class="bgfff">
        <div class="mformBox">
          <div id="Content">
            <form method="post" id="newlogin_form" action="">
              <div class="Content4" id="Content1" style="display: block;">
                <ul class="mform">
                  <li>
                    <span class="mNumIco"></span>
                    <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
                  </li>
                  <li>
                    <span class="mpasswordIco"></span>
                    <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
                    <span style="display:block;position: absolute;top:5px;right:0px;">
                      <!--<img src="share/seccode.html?hash=5157&amp;height=30&amp;width=85" name="varify" class="codevar" align="absbottom">-->
                    </span>
                  </li>
                  <li>
                    <span class="mpasswordIco"></span>
                    <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" style="padding-right:8.5em;">
                    <a class="get_phonepass afff ft14 w9 nocode" style="display:none;margin-right:0px">短信已发送</a>
                    <a href="javascript:void(0);"  class="get_phonepass afff ft12 " id="scodebtn">获取动态密码</a>
                  </li>
                </ul>
                <div class="forget_pass"></div>
              </div>
            </form>
          </div>
        </div>
        <div class="ftc" style="padding-left: 2em;padding-right: 2em;">
          <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register ft14 forget pull-right">忘记密码？</a>
          <div class="clear"></div>
        </div>
        <div class="ftc pt5 loginbtn" id="Content1_btn" style="display: block;"><a href="javascript:void(0)" class="btn-login afff" style="margin:0 4%">登 录</a></div>
      </div>
      <div style="height: 120px;"></div>
      <div class="other-login">
        <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
        <ul class="uList1 clearfix">
          <li>
            <a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
            </a>
          </li>
          <li>
            <a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
              <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
            </a>
          </li>
        </ul>
      </div>
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
  .bgfff
    background: #fff;
    .mformBox
      background: #fff;
      border-radius: 0.5em;
      margin: 0em 4% 2px 4%;
      padding: 0 1.6%;
      li
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0 12px 30px;
        position: relative;
        .mNameIco
          float: left;
          display: inline;
          width: 17px;
          height: 21px;
          background: url(../../common/imgs/ico3.png) no-repeat;
          background-size: contain;
          margin: 1px 0 0 -25px;
        .mNumIco
          float: left;
          display: inline;
          width: 17px;
          height: 17px;
          background: url(../../common/imgs/ico1.png) no-repeat;
          background-size: contain;
          margin: 2px 0 0 -25px;

        input
          display: block;
          height: 21px;
          width: 100%;
          font-size: 15px;
          border: none;
          padding: 0px;
          color: #666;
          font-family: "Microsoft Yahei",tahoma,arial;
          outline: none;
        .mpasswordIco
          float: left;
          display: inline;
          width: 17px;
          height: 20px;
          margin: 0px 0 0 -25px;
          background: url(../../common/imgs/ico4.png) no-repeat;
          background-size: contain;
        .get_phonepass
          background: #fff;
          color: #ff4259;
          border: 1px solid #eb4c33;
          position: absolute;
          right: 0;
          top: 10px;
          border-radius: 3px;
          width: 100px;
          text-align: center;
          padding: 5px 0;
          font-size 14px

    .ftc
      text-align: center;
      .btn-register
        color: #898989;
      .ft14
        font-size 14px
      .pull-right
        float: right;
    .pt5
      padding-top: 5px;
      .btn-login
        display: block;
        letter-spacing: 5px;
        margin: 0 10%;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        text-align: center
      .afff
        color: #fff;


  .partners
    color: #d7d7d7;
    margin-top: 2px;
  .c666
    color: #666;
  .ftc
    text-align center
    b
      font-weight: normal
      color: #666;
  .uList1
    padding: 40px 0;
    li
      width: 33.3%;
      padding: 0 20px;
      float: left;
      display: inline;
      img
        width: 60%;
        height: auto;
        display: block;
        margin: auto;
        max-width: 176px;
        vertical-align middle

</style>
