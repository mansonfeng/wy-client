<template>
  <div class="shopcart-wrap">
    <div class="header-wrap">
      <div class="header">
        <div class="header-head">
          <span class="logo">购物车</span>
        </div>
      </div>
    </div>
    <div class="title-wrap">
      <ul class="title">
        <li class="list">
          <i class="list-item"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="list">
          <i class="list-item"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="list">
          <i class="list-item"></i>
          <span>满88免邮费</span>
        </li>
      </ul>
    </div>
    <div class="content-wrap">
      <div class="content">
        <div class="img-container"></div>
        <div class="txt">
          <div class="txt-title">购物车空空如也</div>
          <router-link class="text-button" to="/personal">登陆</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name:"shopcart"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .shopcart-wrap
    background #f4f4f4
    .header-wrap
     height (100/$rem)
     .header
      position fixed
      left 0
      top 0
      width  100%
      z-index 5
      .header-head
        bottom-border-1px(gray)
        position relative
        text-align center
        background-color #fff
        height (88/$rem)
        line-height (88/$rem)
        padding (0 30/$rem)
        font-size (36/$rem)

    .title-wrap
     position relative
     z-index 5
     .title
      display flex
      align-items  center
      justify-content space-between
      padding (0 30/$rem)
      height (70/$rem)
      .list
       display flex
       align-items  center
       font-size (26/$rem)
       color #333
       .list-item
        display inline-block
        vertical-align  middle
        margin-right (10/$rem)
        background-image url("./images/circle.png")
        width (10/$rem)
        height (10/$rem)
        background-size 100%
        background-repeat  no-repeat

    .content-wrap
      position fixed
      top 0
      left 0
      bottom 0
      background-color #f4f4f4
      width 100%
      .content
        width 10rem
        height 4rem
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
        text-align center
        .img-container
          display inline-block
          width (248/$rem)
          height (248/$rem)
          background-image url("./images/shopcart.png")
          background-size 100%
          background-repeat no-repeat
        .txt
          color #7f7f7f
          font-size (28/$rem)
          margin-top (-24/$rem)
          .txt-title
            margin-bottom (50/$rem)
          .text-button
            display inline-block
            margin 0 auto
            width (480/$rem)
            color #fff
            background-color #b4282d
            line-height (92/$rem)
            border-radius (5/$rem)
            font-size (30/$rem)
</style>
