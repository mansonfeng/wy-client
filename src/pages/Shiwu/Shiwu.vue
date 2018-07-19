<template>
    <div class="shiwu-wrap">
      <SHeader/>
      <div class="shiwu-content">
        <SummerGirl/>
        <ShiwuCarousel/>
        <Recommend/>
        <DoubleInfo/>
        <TenTimeCarousel/>
        <YanXuanZhenP/>
        <YanXuanLook/>
        <More/>

      </div>
    </div>
</template>

<script>
    import SHeader from '../../components/SHeader/SHeader.vue'
    import ShiwuCarousel from '../../components/shiwu/ShiwuCarousel/ShiwuCarousel.vue'
    import Recommend from '../../components/shiwu/Recommend/Recommend.vue'
    import DoubleInfo from '../../components/shiwu/DoubleInfo/DoubleInfo.vue'
    import TenTimeCarousel from '../../components/shiwu/TenTimeCarousel/TenTimeCarousel.vue'
    import YanXuanZhenP from '../../components/shiwu/YanXuanZhenP/YanXuanZhenP.vue'
    import YanXuanLook from '../../components/shiwu/YanXuanLook/YanXuanLook.vue'
    import More from '../../components/shiwu/More/More.vue'

    export default {
      name:"Shiwu",
      components:{
        SHeader,
        ShiwuCarousel,
        Recommend,
        DoubleInfo,
        TenTimeCarousel,
        YanXuanZhenP,
        YanXuanLook,
        More
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxins.styl"
  .shiwu-wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .shiwu-content
      margin-top (88/$rem)
</style>
