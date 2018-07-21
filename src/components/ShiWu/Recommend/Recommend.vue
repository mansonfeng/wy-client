<template>
  <div class="recommend">
    <div class="recommend-wrap">
      <div class="title">为你推荐</div>

      <a href="javascript:;" class="list-p">
        <div class="img-container">
          <div class="tag">
            <div class="content">xxxx</div>
          </div>
        </div>

        <div class="one-info">
          <div class="content1">
            <div class="content1-title">xxxx</div>
            <div class="money">
              <span class="num">x</span>
              <span class="yuan">元起</span>
            </div>
          </div>
        </div>
      </a>

      <a href="/" class="list-all">
        <div class="ones-info">
          <div class="author-p">
            <div class="p">
              <img src="" alt="不可描述">
            </div>
            <div class="name"></div>
          </div>
          <div class="content1-big "></div>
          <div class="content2-small"></div>
        </div>

        <div class="twos-info">
          <div class="img-container">
            <div class="tag">
              <div class="content"></div>
            </div>
          </div>
        </div>
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
  .recommend
    padding (0 30/$rem 40/$rem)
    margin-bottom (20/$rem)
    background-color #fff
    font-size 0
    .recommend-wrap
      .title
        text-align center
        font-size (32/$rem)
        line-height (120/$rem)
        height (120/$rem)
      .list-p
        display block
        color #333
        border 1px solid #d9d9d9
        border-radius (8/$rem)
        margin-bottom (30/$rem)
        .img-container
          position relative
          height (386/$rem)
          border-radius (8/$rem 8/$rem 0 0)
          -webkit-background-size cover
          background-repeat no-repeat
          background-position center
          .tag
            position absolute
            top (20/$rem)
            left (20/$rem)
            .content
              display inline-block
              padding (0 16/$rem)
              height (36/$rem)
              line-height (36/$rem)
              background-color rgba(255,255,255,.9)
              border 1px solid #d9d9d9
              border-radius (20/$rem)
              color #333
              font-size (24/$rem)
        .one-info
          padding (24/$rem 20/$rem 67/$rem)
          .content1
            display flex
            justify-content space-between
            align-items center
            line-height 1.2
            margin-bottom (19/$rem)
            .content1-title
              flex 1
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-right (30/$rem)
              font-size (36/$rem)
            .money
              min-width (115/$rem)
              text-align center
              font-size (36/$rem)
          .line2
            font-size (28/$rem)
            line-height 1.2
            color #7f7f7f
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
      .list-all
        display flex
        border 1px solid #d9d9d9
        border-radius (4/$rem)
        margin-bottom (30/$rem)
        color #333
        background-color #fff
        .ones-info
          flex 1
          display flex
          flex-direction column
          justify-content center
          padding-left (20/$rem)
          padding-right (30/$rem)
          .author-p
            display flex
            align-items center
            height (48/$rem)
            font-size (20/$rem)
            margin-bottom (25/$rem)
            .p
              border 1px solid #d9d9d9
              margin-right (8/$rem)
              border-radius 50%
              overflow hidden
              width (48/$rem)
              height (48/$rem)
              img
                border 0
                display block
                height 100%
                width 100%
            .name
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333
              line-height (24/$rem)
              font-size (20/$rem)
          .content1-big
            font-size (32/$rem)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-bottom (14/$rem)
            margin-right (40/$rem)
            line-height 1.2
          .content2-small
            line-height 1.5
            overflow hidden
            text-overflow ellipsis
            color #7f7f7f
            font-size (24/$rem)
        .twos-info
          width (280/$rem)
          height (272/$rem)
          .img-container
            position relative
            width 100%
            height 100%
            background-color #f4f4f4
            background-position center
            background-repeat no-repeat
            .tag
              position absolute
              top (10/$rem)
              left (10/$rem)
              .content
                display inline-block
                padding (0 16/$rem)
                height (36/$rem)
                line-height (36/$rem)
                background-color rgba(255,255,255,.9)
                border 1px solid #d9d9d9
                border-radius (20/$rem)
                color #333
                font-size (24/$rem)
</style>
