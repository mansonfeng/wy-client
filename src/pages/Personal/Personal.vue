<template>
    <div class="personal-wrap">
      <!--用的是识物的表头-->
      <SHeader/>

      <div class="personal-first-wrap" v-show="isShow">
        <div class="personal-type">
          <div class="content">
            <div class="logo-wrap">
              <img class="img" src="./images/logo.png" >
            </div>
            <div class="btn-wrap">
              <div class="w-button p-button" @click="phonePersonal">
                <i class="p-icon icon-p"></i>
                <span>手机号码登录</span>
              </div>
              <div class="w-button e-button" @click="emailPersonal">
                <i class="p-icon icon-e"></i>
                <span>邮箱帐号登录</span>
              </div>
              <div class="quick-btn">
                <span>手机号快捷注册</span>
                <i class="r-icon"></i>
              </div>
            </div>
          </div>

          <div class="Triple-chat">
            <div class="Triple-wrap">
            <span class="item">
              <i class="icon icon-wx"></i>
              <span class="names">微信</span>
            </span>
            </div>
            <div class="Triple-wrap">
            <span class="item">
              <i class="icon icon-qq"></i>
              <span class="names">QQ</span>
            </span>
            </div>
            <div class="Triple-wrap">
            <span class="item">
              <i class="icon icon-wb"></i>
              <span class="names">微博</span>
            </span>
            </div>
          </div>
        </div>
      </div>

      <div class="personal-container" v-show="!isShow">
        <!--手机登陆-->
        <div class="view" v-show="!personalWay">
          <div class="logo">
            <img src="./images/logo.png">
          </div>
          <div class="user-box">
            <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone">
            <div class="code-wrap">
              <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code">
              <div class="test-code">
                <button class="code-btn" :disabled="!rightPhone" @click.prevent="getCode"
                        :class="{'right-phone': rightPhone}">
                  {{computeTime>0 ? `已发送${computeTime}s` : '获取验证码'}}
                </button>
              </div>
            </div>
          </div>
          <div class="btn-wrap">
            <div class="w-button phone-button" >
              <i class="b-icon icon-phone"></i>
              <span>登录</span>
            </div>
            <div class="w-button email-button"  @click="phonePersonal">
              <i class="b-icon icon-email"></i>
              <span>其他方式登录</span>
            </div>
            <div class="btn">
              <span>手机号快捷注册</span>
              <i class="icon-right"></i>
            </div>
          </div>
        </div>
        <!--邮箱账号登陆-->
        <div class="view" v-show="personalWay">
          <div class="logo">
            <img src="./images/logo.png" alt="">
          </div>
          <div class="user-box">
            <input type="text" maxlength="11" placeholder="邮箱账号" v-model="email">
            <div class="code-wrap">
              <input type="text" maxlength="6" placeholder="密码" v-model="pwd">
            </div>
          </div>
          <div class="btn-wrap">
            <div class="w-button phone-button" @click="emailPersonal" >
              <i class="b-icon icon-phone"></i>
              <span>登录</span>
            </div>
            <div class="w-button email-button" @click="emailPersonal">
              <i class="b-icon icon-email"></i>
              <span>其他方式登录</span>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import SHeader from '../../components/SHeader/SHeader.vue'
    export default {
      name:"personal",
      data(){
        return{
          isShow:true,
          personalWay:true,
          phone:'',
          code:'',
          computeTime:0,
          email: '',
          pwd: '',
        }
      },
      computed:{
        rightPhone () {
          return /^1\d{10}$/.test(this.phone)
        }
      },
      methods:{
        phonePersonal () {
          this.isShow = !this.isShow
          this.personalWay = !this.personalWay
        },
        emailPersonal () {
          this.isShow = !this.isShow
        },
        getCode(){
          // 如果是正确的手机号并且没有计时, 才开始倒计时
          if(this.rightPhone && this.computeTime===0) {
            this.computeTime = 20
            // 启动循环定时器
            const intervalId = setInterval(() => {
              this.computeTime--
              if(this.computeTime<=0) {
                // 清除定时器
                clearInterval(intervalId)
                this.computeTime = 0
              }
            }, 1000)
          }
        },

      },
      components:{
        SHeader,
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .personal-wrap
    .personal-first-wrap
      background-color #F4F4F4
      position relative
      padding-top  (90/$rem)
      .personal-type
       height 100%
       background #F2F5F4
       position relative
       .content
        padding-bottom (548/$rem)
        .logo-wrap
         text-align center
         padding (160/$rem  0)
         .img
          width (268/$rem)
          height (90/$rem)
        .btn-wrap
          padding (0 40/$rem)
         .w-button
           text-align center
           border 1px solid #b4282d
           font-size (28/$rem)
           vertical-align middle
           border-radius (6/$rem)
           margin-bottom (32/$rem)
           color #fff
           &.p-button
            height (94/$rem)
            line-height (94/$rem)
            background-color #b4282d
           &.e-button
             height (94/$rem)
             line-height (94/$rem)
             color #b4282d
             .p-icon
              position relative
              top (-2/$rem)
              margin-right (10/$rem)
              background-image url("./images/xb1.png")
              background-size (40/$rem 290/$rem)
              background-repeat no-repeat
              vertical-align middle
              width (40/$rem)
              height (40/$rem)
              display inline-block
              &.icon-p
                background-position (0 -50/$rem)
              &.icon-e
                background-position (0 0)
          .quick-btn
            text-align center
            font-size (28/$rem)
            color #333
            .r-icon
              background-image url("./images/right.png")
              background-size 100%
              background-repeat no-repeat
              display inline-block
              vertical-align bottom
              width (28/$rem)
              height (28/$rem)


       .Triple-chat
         position absolute
         left 0
         bottom (80/$rem)
         width 100%
         text-align center
         .Triple-wrap
           display inline-block
           text-align center
           height (40/$rem)
           padding-right (25/$rem)
           border-right 1px solid #979797
           font-size 0
           &:last-child
             border none
           &:nth-child(2)
           .item
             display inline-block
             .icon
               vertical-align middle
               display inline-block
               width (40/$rem)
               height (40/$rem)
               background-size 100% 100%
               background-repeat no-repeat
               &.icon-wx
                 background-image url("./images/wechat.png")
               &.icon-qq
                 background-image url("./images/qq.png")
               &.icon-wb
                 background-image url("./images/weibo.png")
             .names
               vertical-align middle
               color #7F7F7F
               font-size (28/$rem)
    .personal-container
      padding-top (88/$rem)
      .view
        .logo
          margin-top (150/$rem)
          text-align center
          > img
            width (192/$rem)
            height (64/$rem)
        .user-box
          margin-top (100/$rem)
          font-size (30/$rem)
          padding (0 40/$rem)
          input
            border-bottom 1px solid #d4d4d4
            padding-bottom (30/$rem)
            padding-left (16/$rem)
            width 100%
            margin (20/$rem 0)
            outline 0
          .code-wrap
            position relative
            .test-code
              position absolute
              top (12/$rem)
              right 0
              padding (10/$rem)
              border-radius (10/$rem)
              border 1px solid #333
              .code-btn
                border 0
                color #ccc
                background transparent
                font-size (30/$rem)
                &.right-phone
                  color black
        .btn-wrap
          padding (100/$rem 40/$rem 0)
          .w-button
            border-radius (6/$rem)
            margin-bottom (32/$rem)
            text-align center
            color #fff
            border 1px solid #b4282d
            font-size (28/$rem)
            vertical-align middle
            &.phone-button
              height (94/$rem)
              line-height (94/$rem)
              background-color #b4282d
            &.email-button
              height (94/$rem)
              line-height (94/$rem)
              color #b4282d
            .b-icon
              position relative
              top (-2/$rem)
              margin-right (10/$rem)
              background-image url("./images/xb1.png")
              background-size (40/$rem 290/$rem)
              background-repeat no-repeat
              vertical-align middle
              width (40/$rem)
              height (40/$rem)
              display inline-block
              &.icon-phone
                background-position (0 -50/$rem)
              &.icon-email
                background-position (0 0)
          .btn
            text-align center
            font-size (28/$rem)
            color #333
            .icon-right
              display inline-block
              vertical-align bottom
              width (28/$rem)
              height (28/$rem)
              background-image url("./images/right.png")
              background-size 100% 100%
              background-repeat no-repeat
</style>
