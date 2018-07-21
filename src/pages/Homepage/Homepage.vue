<template>
  <div class="wei">
    <!--头部导航-->
    <HpNav/>

    <!--轮播图-->
    <HpCarousel/>

    <!--品牌制造商-->
    <HpCreateBusiness/>

    <!--新品首发-->
    <HpFirstNew/>

    <!--好物精选-->
    <HpGoodSelected/>

    <!--福利社-->
    <HpWelfare/>

    <!--专题精选-->
    <HpSpecialSelected/>

    <!--居家好物-->
    <HpGoodJujia/>

  </div>
</template>

<script>
    import HpNav from '../../components/HpNav/HpNav.vue'
    import HpCarousel from '../../components/HpCarousel/HpCarousel.vue'
    import HpCreateBusiness from '../../components/HpCreateBusiness/HpCreateBusiness.vue'
    import HpFirstNew from '../../components/HpFirstNew/HpFirstNew.vue'
    import HpGoodSelected from '../../components/HpGoodSelected/HpGoodSelected.vue'
    import HpWelfare from '../../components/HpWelfare/HpWelfare.vue'
    import HpSpecialSelected from '../../components/HpSpecialSelected/HpSpecialSelected.vue'
    import HpGoodJujia from '../../components/HpGoodJujia/HpGoodJujia.vue'

    export default {
      name:"homepage",

      data(){
        return {

        }
      },
      methods : {

      },
      components:{
        HpNav,
        HpCarousel,
        HpCreateBusiness,
        HpFirstNew,
        HpGoodSelected,
        HpWelfare,
        HpSpecialSelected,
        HpGoodJujia
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"
  .wei
   background #f4f4f4;
</style>
