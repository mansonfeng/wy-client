<template>
  <div class="more-wrap">

    <div class="more-title">
      <span class="item">更多精彩</span>
    </div>

    <div class="content">
      <a href="javascript:;" class="more-item">

        <div class="item-container oneP">
          <img src="" alt="">
        </div>

        <div class="three-p">
          <div class="img-more p1">
            图片
          </div>
          <div class="right">
            <div class="img-more p2">

            </div>
            <div class="img-more p3">

            </div>
          </div>
        </div>

        <div class="des">xxxxxxxx</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/minxins.styl"
  .more-wrap
    margin (0 30/$rem 30/$rem)
    .more-title
      display flex
      align-items center
      height (140/$rem)
      &:after, &:before
        content ''
        display block
        width (264/$rem)
        height 1px
        background-color #d999
      .item
        display inline-block
        margin (0 24/$rem)
        color #333
        font-size (28/$rem)
    .content
      .more-item
        display block
        margin-bottom (30/$rem)
        padding (24/$rem)
        background-color #fff
        color #333
        .item-container
          background-position center
          background-repeat no-repeat
          background-size cover
          &.oneP
            width (642/$rem)
            height (360/$rem)
          &.p1
            float left
            width (460/$rem)
            height (360/$rem)
            margin-right (4/$rem)
          &.p2
            height (178/$rem)
            margin-bottom (4/$rem)
          &.p3
            height (178/$rem)
        .three-p
          overflow hidden
          .right
            float right
            width (178/$rem)
        .des
          padding-top (29/$rem)
          padding-bottom (28/$rem)
          line-height 1.2
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          font-size (28/$rem)



</style>
