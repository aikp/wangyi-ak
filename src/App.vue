<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
    <FooterNav></FooterNav>
    <!-- <FooterGuide/> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from "./components/HeaderNav/HeaderNav.vue"
  import FooterNav from "./components/FooterNav/FooterNav.vue"
  
  /* 局部注册,就用一次 */
  export default {
    name: 'App',
    components: {
      HeaderNav,
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
