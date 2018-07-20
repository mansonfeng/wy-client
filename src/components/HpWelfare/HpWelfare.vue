<template>
  <div class="hp-welfare">
    <section>
      <a href="/">
        <div class="wel-wrap">

          <div class="xy-list">
            <div class="title">严选限时购</div>
            <span class="timer">
              <span class="h">01</span>
              <span class="c">:</span>
              <span class="m">04</span>
              <span class="c">:</span>
              <span class="s">19</span>
            </span>
            <div class="next-title">
              <span>
                <span>下一场</span>
                <span>14:00</span>
                <span>开始</span>
              </span>
            </div>

          </div>

          <div class="fl-list">
            <img src="./images/limitTime/01.jpg" >
          </div>

        </div>
      </a>
    </section>

    <div class="welfare">
      <a href="/"></a>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxins.styl"
  .hp-welfare
    .wel-wrap
      display flex
      background-color #fff
      padding (30/$rem 40/$rem 30/$rem 40/$rem)
      height (380/$rem)
      margin-bottom (20/$rem)
      .xy-list
        display flex
        flex-direction column
        padding-top (80/$rem)
        flex 1
        .title
          font-size (36/$rem)
          line-height (36/$rem)
          margin-bottom (24/$rem)
          color #333
          letter-spacing (12/$rem)
        .timer
          font-size 0
          .hours, .mins, .secs
            display inline-block
            line-height (56/$rem)
            text-align center
            width (62/$rem)
            height (56/$rem)
            font-size (32/$rem)
            color #fff
            background-color #444
            border-radius (40/$rem)
          .colon
            display inline-block
            text-align center
            color #333
            font-size (30/$rem)
            font-weight 700
            width (20/$rem)
        .next-title
          margin-top (40/$rem)
          color #333
          font-size (24/$rem)
          line-height (24/$rem)
          height (24/$rem)
      .fl-list
        width (320/$rem)
        height (320/$rem)
        position relative
        img
          width 100%
          height 100%


  .welfare
    width 10rem
    height 4rem
    margin-bottom (20/$rem)
    a
      display block
      width 100%
      height 100%
      background-image url("./images/welfare/01.jpg")
      background-position center
      background-repeat no-repeat

</style>
