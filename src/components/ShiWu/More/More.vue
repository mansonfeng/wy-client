<template>
  <div class="find-more-wrap">
    <div class="line-title">
      <span class="inner">更多精彩</span>
    </div>
    <div class="content">
      <a href="/" class="topic-item" v-for="(more, index) in mores" :key="index">
        <div class="img-container onePic" :style="{backgroundImage:'url('+more.itemPicUrl+')'}"
             v-if="more.picList.length === 0"></div>

        <div class="three-pics" v-if="more.picList.length !== 0">
          <div class="img-container pic1" :style="{backgroundImage:'url('+more.picList[0]+')'}"></div>
          <div class="right">
            <div class="img-container pic2" :style="{backgroundImage:'url('+more.picList[1]+')'}"></div>
            <div class="img-container pic3" :style="{backgroundImage:'url('+more.picList[2]+')'}"></div>
          </div>
        </div>

        <div class="desc">{{more.subtitle}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:'More',
    computed:{
      ...mapState(['mores'])
    },
    mounted(){
      this.$store.dispatch('getMore')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/minxins.styl"
  .find-more-wrap
    margin (0 30/$rem 30/$rem)
    .line-title
      display flex
      align-items center
      height (140/$rem)
      &:after, &:before
        content ''
        display block
        width (264/$rem)
        height 1px
        background-color #d999
      .inner
        display inline-block
        margin (0 24/$rem)
        color #333
        font-size (28/$rem)
    .content
      .topic-item
        display block
        margin-bottom (30/$rem)
        padding (24/$rem)
        background-color #fff
        color #333
        .img-container
          background-position center
          background-repeat no-repeat
          background-size cover
          &.onePic
            width (642/$rem)
            height (360/$rem)
          &.pic1
            float left
            width (460/$rem)
            height (360/$rem)
            margin-right (4/$rem)
          &.pic2
            height (178/$rem)
            margin-bottom (4/$rem)
          &.pic3
            height (178/$rem)
        .three-pics
          overflow hidden
          .right
            float right
            width (178/$rem)
        .desc
          padding-top (29/$rem)
          padding-bottom (28/$rem)
          line-height 1.2
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          font-size (28/$rem)



</style>
