<template>
  <div class="Summer-Girl">
    <div class="Girl-wrap">

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <a href="/" class="swiper-slide my-slide" v-for="(summerGirl, index) in summerGirls" :key="index">
            <img :src="summerGirl.picUrl" alt="">
            <div class="content">
              <div class="sub-title">{{summerGirl.subTitle}}</div>
              <div class="title">{{summerGirl.title}}</div>
              <div class="desc">{{summerGirl.desc}}</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "Summer-Girl",
    computed: {
      ...mapState(['summerGirls'])
    },
    mounted () {
      this.$store.dispatch('getSummerGirl', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            autoheight: true,
            slidesPerView: 'auto'
          })
        })
      })
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/minxins.styl"
  .Summer-Girl
    background-color #fff
    .Girl-wrap
      padding (24/$rem 0)
      width (690/$rem)
      margin auto
      .my-slide
        padding (0 10/$rem)
        position relative
        img
          border-radius (8/$rem)
          width 100%
          display block
          height (385/$rem)
        .content
          position absolute
          left 0
          top 0
          bottom 0
          right 0
          margin auto
          width (466/$rem)
          height (198/$rem)
          background-color rgba(255,255,255,.9)
          display flex
          flex-direction column
          align-items center
          justify-content center
          font-size 0
          .sub-title
            position relative
            padding (0 8/$rem)
            color #7f7f7f
            line-height (30/$rem)
            font-size (20/$rem)
            &::before, &::after
              content ''
              position absolute
              top 0
              bottom 0
              margin auto
              width (24/$rem)
              height 1px
              background-color #999
            &::before
              left (-24/$rem)
            &::after
              right (-24/$rem)
          .title
            font-weight 700
            margin-top (16/$rem)
            color #333
            line-height (48/$rem)
            font-size (32/$rem)
          .desc
            margin-top (4/$rem)
            color #333
            line-height (36/$rem)
            font-size (24/$rem)
</style>
