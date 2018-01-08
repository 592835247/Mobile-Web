<template>
  <div>
    <div id="tab1" class="kindbox"><div class="leftbox bgfff scrollbar-none">
      <div>
        <ul>
          <li data-id="88888" class="ftc bgfff"
              v-for="(dog,index) in sort.categorys"
          >{{dog.name}}</li>
        </ul>
      </div>
    </div>
      <div class="rightbox bgfff scrollbar-none">
        <div class="sort-detail-list">
          <div class="sort-recom bgfff">
            <div class="hot-recom bbtf3">
              <a href="javascript:;" class="title c999 db ft12 mt10 pl5">热门分类</a>
              <ul class="clearfix" style="overflow: hidden">
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_10&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg@!300w-b" lazy="loaded">
                    </div>
                    <p class="ftc ft12 mt10 c333">磨牙洁齿</p>
                  </a>
                </li>
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_413&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg@!300w-b" lazy="loaded"></div>
                    <p class="ftc ft12 mt10 c333">强化免疫</p>
                  </a>
                </li>
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_521&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg@!300w-b" lazy="loaded">
                    </div>
                    <p class="ftc ft12 mt10 c333">体内驱虫</p>
                  </a>
                </li>
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_756&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg@!300w-b" lazy="loaded">
                    </div>
                    <p class="ftc ft12 mt10 c333">肠胃调理</p>
                  </a>
                </li>
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_3555&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg@!300w-b" lazy="loaded">
                    </div>
                    <p class="ftc ft12 mt10 c333">国产狗粮</p>
                  </a>
                </li>
                <li class="fl mt10">
                  <a href="https://wap.epet.com/goodslist.html?id_param=cateid_7&amp;fw=0" class="db">
                    <div class="rela loadimg-nofixed">
                      <img class="w100 image" src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg@!300w-b" lazy="loaded">
                    </div>
                    <p class="ftc ft12 mt10 c333">进口狗粮</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import  {mapState} from 'vuex'
    export default{
        data(){
            return {}
        },
      computed:{
        ...mapState(['sort'])
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .kindbox
    margin-top: 0px;
    .leftbox
      position: fixed;
      top: 40px;
      left: 0;
      overflow-y: scroll;
      bottom: 0;
      padding-bottom: 45px;
    .bgfff
      background: #fff;
      li
        padding: 15px 0;
        border-bottom: 1px solid #f3f4f5;
        width: 70px;
        height: 50px;
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*overflow: hidden;*/
        text-align center
      .on
        background: #f3f4f5;
        color: #ed4044;

    .rightbox
      margin-left: 75px;
      .hot-recom
        padding: 15px 5px 20px;
      .bbtf3
        border-top: 1px solid #f3f4f5
        .ft12
          font-size: 12px;
        .db
          display block
        .c999
          color: #999;
        .mt10
          margin-top: 10px;
        li
          width: 33.33%;
          height 111.66px
          padding: 0 5px;
        .fl
          float left
          .loadimg-nofixed
            background: url(../../common/imgs/default-epet.png) no-repeat center center #f4f4f4;
            background-size: 120px auto;
            position: relative;
            padding-top: 100%;
            .rela
              position relative
            .image
              top: 0;
              left: 0;
              position: absolute;
              border: 0;
            .w100
              width: 100%;
          p
            /*overflow: hidden;*/
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px;
          .ft12
            font-size 12px
            text-align center
</style>
