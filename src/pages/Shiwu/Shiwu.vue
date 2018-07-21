<template>
    <div class="ShiWu-wrap">
      <!--表头 后面有一样的-->
      <SHeader/>
      <div class="ShiWu-content">
        <SummerGirl/>
        <ShiwuCarousel/>
        <Recommend/>
        <TenTimeCarousel/>
        <YanXuanZhenP/>
        <YanXuanLook/>
        <More/>
      </div>
    </div>
</template>

<script>
    import SHeader from '../../components/SHeader/SHeader.vue'
    import SummerGirl from '../../components/ShiWu/SummerGirl/SummerGirl.vue'
    import ShiwuCarousel from '../../components/ShiWu/ShiwuCarousel/ShiwuCarousel.vue'
    import Recommend from '../../components/ShiWu/Recommend/Recommend.vue'
    import TenTimeCarousel from '../../components/ShiWu/TenTimeCarousel/TenTimeCarousel.vue'
    import YanXuanZhenP from '../../components/ShiWu/YanXuanZhenP/YanXuanZhenP.vue'
    import YanXuanLook from '../../components/ShiWu/YanXuanLook/YanXuanLook.vue'
    import More from '../../components/ShiWu/More/More.vue'

    export default {
      name:"ShiWu",
      components:{
        SHeader,
        SummerGirl,
        ShiwuCarousel,
        Recommend,
        TenTimeCarousel,
        YanXuanZhenP,
        YanXuanLook,
        More
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .ShiWu-wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .ShiWu-content
      margin-top (88/$rem)
</style>
