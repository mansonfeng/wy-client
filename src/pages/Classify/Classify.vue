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

    <div class="classify-nav">
      <div class="scroll-container">
        <ul class="list">
          <li class="item " v-for="(classify ,index) in classifys" :key="index"
            @click="goto(index)">
            <a href="javascript:;" class="txt" >{{classify.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="classifyList-wrap" v-for="(classify ,index) in classifys"  v-if="index === currentIndex "  :key="index">

      <div class="banner" >
        <img :src="classify.bannerUrl" alt="">
      </div>

      <div class="catelist">
        <div class="hd" >
          <span class="txt">
            <span class="txt1"  >{{classify.name}}</span>
            <span class="txt2">分类</span>
          </span>
        </div>
        <div class="content">
          <li class="content-item"v-for="(item ,index) in classify.subCateList" :key="index">
            <a href="javascript:;">
              <div class="lazy-img">
                <img :src="item.bannerUrl" alt="">
              </div>
              <div class="name">{{item.name}}</div>
            </a>
          </li>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name:'Classify',
    data(){
      return{
        currentIndex:0
      }
    },
    computed:{
      ...mapState(['classifys']),
    },
    mounted(){
      this.$store.dispatch('getClassify',()=> {
        this.$nextTick(() => {
          new BScroll('.scroll-container',{
          probeType: 2,
          click: true,
          })
        })
      })
    },
    methods: {
      goto (index) {
        this.currentIndex = index
      },
    }
  }
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
    .classify-nav
      position fixed
      left 0
      top (88/$rem)
      width (162/$rem)
      background-color #fff
      height 100%
      .scroll-container
        position absolute   //加这个，是为了实现高度不使内容撑开。副作用是，要一层层的根据包含块找height的百分比
        width 100%
        height 95%
        .list
          right-border-1px(gray)
          padding (40/$rem 0 138/$rem)
          .item
            margin-top (40/$rem)
            height (50/$rem)
            width 100%
            text-align center
            &:first-child
              margin-top 0
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6/$rem)
                background-color #ab2b2b
              .txt
                font-size (36/$rem)
                color #ab2b2b
            .txt
              display block
              font-size (28/$rem)
              line-height (50/$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333
    .classifyList-wrap
      margin-left (132/$rem)
      padding (30/$rem 30/$rem 21/$rem)
      .banner
        background center no-repeat #f4f4f4
        background-image url("./images/banner.jpg")
        width 100%
        height (240/$rem)
        background-size cover
        border-radius (4/$rem)
      .catelist
        .hd
          font-size (24/$rem)
          height (108/$rem)
          color #333
          display flex
          align-items center
          justify-content center
          .txt
            display flex
            align-items center
            justify-content center
            padding (0 8/$rem)
            color #7f7f7f
            line-height (30/$rem)
            font-size (24/$rem)
            &::before, &::after
              content ''
              display inline-block
              width (24/$rem)
              height 1px
              background-color #7f7f7f
            .txt1
              margin-left (8/$rem)
            .txt2
              margin-right (8/$rem)

        .content
          .content-item
            display inline-block
            margin-right (34/$rem)
            width (144/$rem)
            vertical-align top    //为了lazy-img
            &:nth-child(3n)
              margin-right (-10/$rem)
            a
              .lazy-img
                width (144/$rem)
                height (144/$rem)
                /*background url("./images/lazy.png") center no-repeat*/
                img
                  width 100%
                  height 100%
              .name
                height (72/$rem)
                text-align center
                color #333
                line-height (34/$rem)
                font-size (24/$rem)
</style>
