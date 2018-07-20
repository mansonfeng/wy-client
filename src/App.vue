<template>
  <div id="app">
    <keep-alive>
    <router-view />
    </keep-alive>
    <Footguide/>
  </div>
</template>

<script>
  import Footguide from './components/Footguide/Footguide.vue'
export default {
  name:"app",
  components:{
    Footguide
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
