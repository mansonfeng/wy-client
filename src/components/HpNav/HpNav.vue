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

    <section>
      <div class="scroll-wrap">
          <div class="list">
            <div class="item">
              <span class="text">推荐</span>
            </div>
            <div class="item">
              <span class="text">推荐</span>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
  import BetterScroll from "better-scroll"
  import {mapState,mapActions} from "vuex"

  export default {
    name: "hp-nav",
    methods:{

    },
    computed:{

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .hp-Nav
    position fixed
    z-index 5
    left 0
    top 0
    width 100%
    background #fff
    header
     display flex
     align-items center
     padding (16/$rem 30/$rem)
     .logo
      display inline-block
      background-image url("./images/logo.png")
      background-size cover
      background-position center
      margin-right (20/$rem)
      width (138/$rem)
      height (40/$rem)
     .search
        display flex
        flex-grow 1
        align-items center
        justify-content center
        background-color #ededed
        height (56/$rem)
        border-radius (8/$rem)
        font-size (28/$rem)
        .icon
          display inline-block
          background-image url("./images/search.png")
          background-size 100% 100%
          background-repeat no-repeat
          margin-right (10/$rem)
          width (28/$rem)
          height (28/$rem)
          .content
            color #666
            display block
    section
     background #pink
     .scroll-wrap
       overflow hidden
       display flex
       .list
        display flex
        flex-shrink 0
        padding (0 30/$rem)
        background #fff
        margin-top (-26/$rem)
        .item
         margin-left (48/$rem)
         position relative
        .text
         padding (0 16/$rem)
         line-height (60/$rem)
         font-size (28/$rem)
         text-align center
</style>
