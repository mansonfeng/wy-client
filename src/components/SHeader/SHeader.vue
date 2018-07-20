<template>
    <header>
      <section>
        <router-link class="icon-h" to="homepage"></router-link>
        <router-link class="icon-l" to="homepage">
          <i class="icon-logo"></i>
        </router-link>
        <section class="right">
          <a href="" class="search">
            <i class="icon-s"></i>
          </a>
          <router-link to="shopcart" class="shopcart">
            <i class="icon-sc" ></i>
          </router-link>
        </section>
      </section>
    </header>
</template>

<script>
    export default {


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxins.styl"
  header
   position fixed
   left 0
   top 0
   width 100%
   height (88/$rem)
   z-index 5
   section
    position relative
    background-color: #fafafa;
    height 100%
    display flex
    align-items center
    justify-content space-between
    padding (0 16/$rem  0 24/$rem)
    .icon-h
     display inline-block
     vertical-align middle
     width (48/$rem)
     height (48/$rem)
     background-image url("./images/xb.png")
     background-repeat no-repeat
     background-size (172/$rem 398/$rem)
     background-position (0 -74/$rem)
    .icon-l
     display block
     .icon-logo
      display inline-block
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      margin auto
      background-image url("./images/xb.png")
      background-repeat  no-repeat
      background-size (172/$rem  398/$rem)
      background-position (0 -128/$rem)
      width (172/$rem)
      height (54/$rem)

    .right
      margin-right (5/$rem)
      font-size 0
     .search
      .icon-s
       display inline-block
       vertical-align middle
       background-image url("./images/xb.png")
       background-repeat  no-repeat
       background-size (172/$rem 398/$rem)
       background-position (0 -330/$rem)
       width (64/$rem)
       height (64/$rem)
     .shopcart
      .icon-sc
        display inline-block
        vertical-align middle
        background-image url("./images/xb.png")
        background-repeat  no-repeat
        background-size (172/$rem 398/$rem)
        background-position (0 0)
        width (64/$rem)
        height (64/$rem)



</style>
