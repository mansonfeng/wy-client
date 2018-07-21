<template>
  <section class="hp-goodJujia">
    <div class="jujia-wrap">
      <h3 class="title">居家</h3>
      <div class="jujia-content">
        <ul class="list">
          <li class="item">
            <a href="/" class="good">
              <div class="good-icon">
                <img src="./images/jujia/02.png" >
                <div class="des"></div>
              </div>
              <div class="good-wrap">
                <span class="jian">满额减</span>
              </div>
              <div class="name">
                <span>xxx</span>
              </div>
              <div class="money">
                <span>￥</span>
                <span>xxx</span>
              </div>
            </a>
          </li>

          <li class="item more">
            <a href="/" class="good">
              <p class="text">
                <span>更多</span>
                <span>xx好物</span>
              </p>
              <i class="icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .hp-goodJujia
    margin-bottom (20/$rem)
    background-color #fff
    .jujia-wrap
      background-color #f4f4f4
      .title
        line-height (120/$rem)
        text-align center
        font-size (28/$rem)
        color #333
        background-color #fff
      .jujia-content
        background-color #fff
        .list
          overflow hidden //清除浮动
          .item
            padding (0 10/$rem 33/$rem 20/$rem)
            float left
            width 50%
            &.more
              .good
                border-radius (4/$rem)
                background-color #f4f4f4
                padding (132/$rem 0)
                display flex
                flex-direction column
                align-items center
                justify-content center
                font-size 0
                .txt
                  color #333
                  font-size (32/$rem)
                  margin-bottom (60/$rem)
                .icon
                  display inline-block
                  background-image url("./images/jujia/right.png")
                  background-size (100% 100%)
                  background-repeat no-repeat
                  width (67/$rem)
                  height (67/$rem)
            .good
              .good-icon
                background-color #f4f4f4
                border-radius (4/$rem)
                position relative
                padding-bottom 20%
                img
                  display inline-block
                  height (345/$rem)
                  width 100%
                .des
                  position absolute
                  bottom 0
                  width 100%
                  font-size (24/$rem)
                  line-height (29/$rem)
                  padding (20/$rem 10/$rem)
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  background-color #F1ECE2
                  color #9F8A60
                  border-radius (0 0 4/$rem 4/$rem)

              .good-wrap
                padding-left (10/$rem)
                height (30/$rem)
                margin (20/$rem 0 0 4/$rem)
                font-size 0
                .jian
                  color #fff
                  background-color #f48f18
                  font-size (20/$rem)
                  line-height (20/$rem)
                  padding (5/$rem 16/$rem)
                  text-align center
                  display inline-block
                  vertical-align middle
              .name
                font-size (28/$rem)
                line-height (48/$rem)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #333
                margin-top (10/$rem)
                padding (0 10/$rem)
              .money
                padding (0 10/$rem)
                color #b4282d
                font-size (32/$rem)
</style>
