<template>
  <div class="Shiwu-Carousel">
    <div class="swiper-wrap">
      <div class="swiper-ShiWu list">
        <a href="/" class="swiper-slide my-slide">
          <img src="./images/02.png" alt="">
          <div class="top-wrap">
            <div class="top-num">xxxx</div>
          </div>
          <div class="bottom-tit">xxxx</div>
        </a>
        <a href="/" class="swiper-slide my-slide">
          <img src="./images/02.png" alt="">
          <div class="top-wrap">
            <div class="top-num">xxxx</div>
          </div>
          <div class="bottom-tit">xxxx</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/minxins.styl"
  .Shiwu-Carousel
    height (186/$rem)
    margin-bottom (10/$rem)
    padding: .42667rem .4rem .37333rem;
    background-color #fff
    .list
      display flex
      .my-slide
        margin-right (24/$rem)
        width (164/$rem)
        height (210/$rem)
        position relative
        font-size 0
        img
          display block
          width (164/$rem)
          height (164/$rem)
          margin-bottom (22/$rem)
          border-radius (4/$rem)
        .top-wrap
          position absolute
          top 0
          right 0
          color #fff
          background url("./images/shadow.png") no-repeat
          background-size 100%
          width (116/$rem)
          height (32/$rem)
          border-radius (0 4/$rem 0 0)
          .top-num
            position absolute
            top 0
            right (8/$rem)
            text-align right
            line-height (32/$rem)
            width 2rem
            height (32/$rem)
            font-size (24/$rem)
        .bottom-tit
          width (184/$rem)
          margin-left (-10/$rem)
          text-align center
          font-size (24/$rem)
          color #333
</style>
