<template>
  <div class="shopcar_box">
    <div class="car_header">
      <div class="car_title">
        <span>购物车</span>
      </div>
      <div class="tips">
        <span>领券</span>
      </div>
    </div>
    <div class="car_content">
      <div class="service">
        <span>30天无忧退货</span>
        <span>48小时无忧退款</span>
        <span>满88元免邮费</span>
      </div>
      
      <div class="did_not_login">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
        <p>去添加点什么吧</p>
        <button @click="$router.push('/personal/emaillogin')">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Shopcar',
    data () {
      return {
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shopcar_box
    width 100%
    padding-top 88px
    font-size 28px
    background-color #f4f4f4
    .car_header
      position fixed
      top 0
      left 0
      width 100%
      height 88px
      background-color #fff
      .car_title
        width 100%
        height 100%
        font-size 36px
        display flex
        align-items center
        justify-content center
      .tips
        position absolute
        right 60px
        top 10px
        transform translateY(50%)
        font-size 30px
        color $themeColor
    .car_content
      width 100%
      padding-top 30px
      .service
        font-size 24px
        color #666
        display flex
        align-items center
        justify-content space-around
      .did_not_login
        text-align center
        >img
          display block
          width 248px
          height 248px
          margin 375px auto 0
        >p
          color #999
        >button
          width 480px
          height 92px
          margin 50px auto 288px
          font-size 30px
          color #fff
          background-color $themeColor
</style>
