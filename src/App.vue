<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from 'components/FooterGuide/FooterGuide.vue'
  
  /* 局部注册,就用一次 */
  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
