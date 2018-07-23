<template>
  <div class="special-selected">
    <header>
      <a href="/" class="more">
        <span>专题精选</span>
        <i class="icon"></i>
      </a>
    </header>

    <div class="special-slide">
      <div class="special-inner swiper-container">
        <ul class="list swiper-wrapper">
          <li class="item swiper-slide" v-for="(specialSelected ,index) in specialSelecteds" :key="index">
            <a href="/" class="img-wrap">
              <img :src="specialSelected.itemPicUrl">
            </a>
            <div class="content">
              <h4 class="title">{{specialSelected.title}}</h4>
              <span class="price">
                  <span>{{specialSelected.priceInfo}}</span>
                  <span>元起</span>
                </span>
            </div>
            <div class="des">{{specialSelected.subtitle}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  export default {
    name:'special-selected',
    computed:{
      ...mapState(['specialSelecteds'])
    },
    mounted(){
      this.$store.dispatch('getSpecialSelected', () => {
        this.$nextTick(() => {
          new Swiper('.special-inner', {
            autoheight: true,
            slidesPerView: 'auto',
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .special-selected
    margin-bottom (20/$rem)
    background-color #fff
    header
      display flex
      justify-content center
      height (110/$rem)
      font-size (32/$rem)
      .more
        color #333
        display flex
        align-items center
        .icon
          display inline-block
          width (30/$rem)
          height (30/$rem)
          background-image url("./images/right.png")
          background-repeat no-repeat
          background-size (100% 100%)
          margin-left (10/$rem)
          margin-top (5/$rem)
    .special-slide
      padding (0 30/$rem 36/$rem)
      overflow hidden
      .list
        width (575/$rem)
        .item
          margin-right (20/$rem)
          .img-wrap
            display block
            height (322/$rem)
            width (575/$rem)
            margin-bottom (16/$rem)
            border-radius (8/$rem)
            overflow hidden
            img
              width 100%
              position relative
              left 50%
              transform translateX(-50%)
              border 0
          .content
            height (41/$rem)
            margin-bottom (2/$rem)
            width (575/$rem)
            .title
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              width (410/$rem)
              float left
              font-size (28/$rem)
            .price
              float right
              font-size (28/$rem)
              color #b4282d
          .des
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size (24/$rem)
            color #7F7F7F

</style>
