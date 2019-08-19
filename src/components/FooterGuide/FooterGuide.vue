<template>
  <footer class="footer_guide border-1px">
    <a class="guide_item on" :class="{on: $route.path==='/shouye'}" @click="goTo('/shouye')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首页</span>
    </a>
    <a class="guide_item" :class="{on: $route.path==='/fenlei'}" @click="goTo('/fenlei')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>分类</span>
    </a>
    <a class="guide_item" :class="{on: $route.path==='/shiwu'}" @click="goTo('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>识物</span>
    </a>
    <a class="guide_item" :class="{on: $route.path==='/gouwuche'}" @click="goTo('/gouwuche')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>购物车</span>
    </a>
    <a class="guide_item" :class="{on: $route.path==='/geren'}" @click="goTo('/geren')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .footer_guide //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction colum
      align-items center
      margin 5px
      color #999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px

</style>
