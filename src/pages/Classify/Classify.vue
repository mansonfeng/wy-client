<template>
  <div class="classify-wrap">

    <div class="header-wrap">
      <div class="header">
        <div class="classify-hd">
          <div class="search">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cate-nav">
      <div class="scroll-container">
        <ul class="list">
          <li class="item">
            <a href="javascript:;" class="txt">xxx</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .classify-wrap
    .header-wrap
      height (88/$rem)
      .header
        position fixed
        left 0
        top 0
        z-index 1
        width 10rem
        background-color #fff
        .classify-hd
          bottom-border-1px(gray)
          padding (0 30/$rem)
          height (88/$rem)
          display flex
          align-items center
          .search
            display flex
            justify-content center
            align-items center
            background-color #ededed
            width 100%
            height (56/$rem)
            border-radius (8/$rem)
            font-size (28/$rem)
            .icon
              display inline-block
              margin-right (10/$rem)
              width (28/$rem)
              height (28/$rem)
              background-image url("./images/search.png")
              background-size 100% 100%
              background-repeat no-repeat

</style>
