<template>
  <div class="YanXuan-Look">
    <div class="YanXuan-wrap">
      <div class="title">严选Look</div>

      <a href="javascript:;" class="Look-wrap">

        <img :src="yanXuanLooks.picUrl" alt="xx" class="scene-pic">
        <div class="topic-info">
          <div class="author-container">
            <div class="avatar">
              <img :src="yanXuanLooks.avatar" alt="">
            </div>
            <div class="name">{{yanXuanLooks.nickname}}</div>
          </div>
          <div class="des">{{yanXuanLooks.content}}</div>
        </div>

      </a>
    </div>
  </div>
</template>

<script>
  import  {mapState} from 'vuex'
  export default {
    name:'YanXuan-Look',
    data(){
      return {
        show:true
      }
    },
    computed:{
      ...mapState(['yanXuanLooks'])
    },
    mounted(){
      this.$store.dispatch('getYanXuanLook', () => {
        setInterval(() => {
          this.show = !this.show
        },600)
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/minxins.styl"
  .YanXuan-Look
    padding (0 30/$rem 40/$rem)
    margin-bottom (20/$rem)
    background-color #fff
    font-size 0
    .YanXuan-wrap
      .title
        text-align center
        font-size (32/$rem)
        line-height (120/$rem)
        height (120/$rem)

      .Look-wrap
        display block
        color #333
        position relative
        .scene-pic
          width 100%
          height 100%
        .topic-info
          padding (24/$rem 30/$rem 46/$rem)
          background-color #fff
          .author-container
            display flex
            align-items center
            margin-bottom (24/$rem)
            height (48/$rem)
            font-size (24/$rem)
            .avatar
              width (48/$rem)
              height (48/$rem)
              border-radius 50%
              overflow hidden
              border 1px solid #d9d9d9
              margin-right (8/$rem)
          .des
            color #7f7f7f
            line-height 1.6
            font-size (28/$rem)

</style>
