<template>
  <!--头部导航-->
  <div class="hp-Nav">
    <header>
      <a href="/" class="logo"></a>
      <div class="search">
        <i class="icon"></i>
        <span class="content">搜索商品，共97565款好物</span>
      </div>
    </header>
    <section class="nav-footer">
      <div class="scroll">
        <div class="scroll-container">
          <div class="list">
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
            <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
            <div class="tab">
              <span class="txt">推荐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxins.styl"
  .hp-Nav
    position fixed
    top 0
    left 0
    width 100%
    background #fff
    header
      display flex
      align-items center
      padding (16/$rem 30/$rem)
      .logo
        width (138/$rem)
        height (40/$rem)
        background-image url("./images/logo.png")
        display inline-block
        margin-right (20/$rem)
        background-position center
        background-size cover
        .search
          display flex
          flex-grow 1
          align-items center
          justify-content center
          height: (56/$rem)
          font-size: (28/$rem)
          background-color: #ededed
          border-radius: (8/$rem)
          .icon
            display inline-block
            vertical-align middle
            background-image url("./images/search.png")
            background-repeat no-repeat
            background-size (100% 100%)
            width (28/$rem)
            height (28/$rem)
            margin-right (10/$rem)
            .content
              color #666
              display block
    .scroll
      background #fff
      .scroll-container
        overflow hidden
        display flex
        .list
          display flex
          flex-shrink 0
          padding (0 30/$rem)
          background #fff
          margin-top (-26/$rem)
          .tab
            margin-left (48/$rem)
            position relative
            &.active
              color #b4282d
              margin-left 0
              &::after
                content ''
                position absolute
                left 0
                bottom 0
                width 100%
                height (4/$rem)
                background-color #b4282d
            .txt
              padding (0 16/$rem)
              line-height (60/$rem)
              font-size (28/$rem)
              text-align center
</style>
