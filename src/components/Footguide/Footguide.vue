<template>
  <footer>
    <div class="guide_item" @click="goto('/homepage')" >
      <i class="iconfont homepage" :class="{on: isCurrent('/homepage')}"></i>
      <span class="text" :class="{on: isCurrent('/homepage')}">首页</span>
    </div>

    <div class="guide_item" @click="goto('/shiwu')" >
      <i class="iconfont shiwu" :class="{on: isCurrent('/shiwu')}"></i>
      <span class="text" :class="{on: isCurrent('/shiwu')}">识物</span>
    </div>

    <div class="guide_item" @click="goto('/classify')" >
      <i class="iconfont classify" :class="{on: isCurrent('/classify')}"></i>
      <span class="text" :class="{on: isCurrent('/classify')}">分类</span>
    </div>

    <div class="guide_item shop" @click="goto('/shopcart')" >
      <i class="iconfont shopcart" :class="{on: isCurrent('/shopcart')}"></i>
      <span class="text" :class="{on: isCurrent('/shopcart')}" >购物车</span>
    </div>

    <div class="guide_item" @click="goto('/personal')" >
      <i class="iconfont personal" :class="{on: isCurrent('/personal')}"></i>
      <span class="text" :class="{on: isCurrent('/personal')}">个人</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  footer
    position fixed
    z-index 5
    left 0
    bottom 0
    font-size 0rem
    display flex
    align-items center
    justify-content space-around
    flex-flow row nowrap
    width 100%
    height (98/$rem)
    background-color #fafafa
    border-top 1px solid #d9d9d9
   .guide_item
     position relative
     text-align center
     display inline-block
     width (48/$rem)
     &.shop
       width (72/$rem)
     .iconfont
       display inline-block
       background-image url("./images/footer.png")
       background-repeat no-repeat
       background-size (40/$rem 490/$rem)
       width (40/$rem)
       height (40/$rem)
       vertical-align middle
       &.homepage
         background-position (0 -250/$rem)
         &.on
           background-position (0 -200/$rem)
       &.shiwu
         background-position (0 -350/$rem)
         &.on
           background-position (0 -300/$rem)
       &.classify
         background-position (0 -150/$rem)
         &.on
           background-position (0 -100/$rem)
       &.shopcart
         background-position (0 -50/$rem)
         &.on
           background-position (0 -0/$rem)
       &.personal
         background-position (0 -450/$rem)
         &.on
           background-position (0 -400/$rem)
     .text
       font-size (24/$rem)
       text-align center
       display block
       color #666
       margin-top (7/$rem)
       line-height 1
       &.on
         color #DA989B
</style>
