<template>
  <div class="create-business">
    <header>
      <a href="javascript:;" class="more">
        <span>品牌制造商直供</span>
        <i class="icon"></i>
      </a>
    </header>

    <div class="container">
      <ul class="list">
        <li class="item" v-if="tagList" v-for="(tagList, index) in tagListsFliter" :key="index">
          <a href="javascript:;">
            <div class="content">
              <h4 class="title">{{tagList.name}}</h4>
              <div class="price">
                <span class="price1">{{tagList.floorPrice}}</span>
                <span class="price2">元起</span>
              </div>
            </div>
            <img :src="tagList.picUrl" alt="">
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState}  from 'vuex'
  export default {
    name:'create-business',
    computed:{
      ...mapState(['tagLists']),

      tagListsFliter(){
        const arr=[];
        for(var i=0;i<4;i++){
          arr.push(this.tagLists[i])
        }
        return arr
      }
    },
    mounted(){
      this.$store.dispatch('getTagList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .create-business
    padding-bottom (20/$rem)
    background-color #fff
    header
      display flex
      align-items center
      justify-content center
      height (110/$rem)
      font-size (32/$rem)
      a
        color #333
        .icon
          margin-left (10/$rem)
          background-image url("./images/right.png")
          background-repeat no-repeat
          background-size (100% 100%)
          display inline-block
          vertical-align middle
          width (30/$rem)
          height (30/$rem)
    .container
      padding-bottom (8/$rem)
      .list
        margin (0 12/$rem)
        height (470/$rem)
        .item
          display inline-block
          position relative
          margin-bottom (8/$rem)
          margin-right (8/$rem)
          width (355/$rem)
          height (227/$rem)
          background-color #f4f4f4
          a
            width 100%
            height 100%
            .content
              position absolute
              left 0
              top 0
              padding (20/$rem 0 0 20/$rem)
              width 100%
              .title
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                color #333
                font-size (28/$rem)
                line-height (34/$rem)
                margin-bottom (6/$rem)
              .price
                font-size 0
                .price1
                  color #333
                  font-size (28/$rem)
                  line-height (34/$rem)
                .price2
                  color #333
                  font-size (24/$rem)
                  line-height (34/$rem)
            img
              width 100%
              height 100%



</style>
