<template>
  <div id="app">
    <router-view />
    <Footguide/>
  </div>
</template>

<script>
  import Footguide from './components/Footguide/Footguide.vue'
export default {
  name:"app",
  components:{
    Footguide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
