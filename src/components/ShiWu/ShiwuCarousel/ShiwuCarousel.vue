<template>
  <div class="Shiwu-Carousel">

    <div class="swiper-container">
      <div class="swiper-wrapper list">
        <a href="/" class="swiper-slide my-slide" v-for="(shiWuCarousel,index) in shiWuCarousels" :key="index">
          <img :src="shiWuCarousel.picUrl" >
          <div class="top-num-wrap">
            <div class="top-num">{{shiWuCarousel.articleCount}}</div>
          </div>
          <div class="title">{{shiWuCarousel.title}}</div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import  Swiper from 'Swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    name:'Shiwu-Carousel',
    computed:{
      ...mapState(['shiWuCarousels'])
    },
    mounted(){
      this.$store.dispatch('getShiWuCarousel', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            initialSilde:0,
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
        .top-num-wrap
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
            text-align right    //right和这条样式配合使用，针对宽度不同的问题
            line-height (32/$rem)
            width 2rem
            height (32/$rem)
            font-size (24/$rem)


        .title
          width (184/$rem)
          margin-left (-10/$rem)
          text-align center
          font-size (24/$rem)
          color #333
</style>
