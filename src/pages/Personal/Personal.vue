<template>
  <div class="personal_box" :class="{is_personal:($route.path === '/personal')}">
    <HeaderSlot>
      <div slot="netease"><span class="netease">网易严选</span></div>
    </HeaderSlot>
    <div class="content_box" v-if="$route.path === '/personal'">
      <div class="top_login">
        <div class="top_logo"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease"/></div>
        <div class="phone_login active" @click="$router.push('/personal/phonelogin')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="email_login" @click="$router.push('/personal/emaillogin')">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱帐号登录</span>
        </div>
        <div class="email_register">手机号快捷注册&gt;</div>
      </div>
  
      <ul class="bottom_nav">
        <li><a href="javascript:">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </a></li>
        <li>|</li>
        <li><a href="javascript:">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </a></li>
        <li>|</li>
        <li><a href="javascript:">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </a></li>
      </ul>
    </div>
    
    <div class="content_box" v-else>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Personal',
    data () {
      return {
        curPos: "fond"
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .personal_box
    width 100%
    height 100%
    font-size 24px
    padding-top 88px
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    &.is_personal
      background-color: #f2f5f4
    .content_box
      .top_login
        width 100%
        display flex
        align-items center
        flex-direction column
        .top_logo
          display flex
          align-items center
          justify-content center
          width 100%
          height 423px
          img
            width 268px
            height 90px
        .phone_login,
        .email_login
          width 677px
          height 96px
          margin-top 32px
          color $themeColor
          display flex
          justify-content center
          align-items center
          border 1px solid $themeColor
          &.active
            color #fff
            background-color $themeColor
          >i
            font-size 30px
          >span
            font-size 28px
            margin-left 16px
        .email_register
          margin-top 32px
          font-size 28px
      .bottom_nav
        margin 375px 0 100px 0
        display flex
        justify-content center
        >li
          float left
          font-size 30px
          >a
            font-size 30px
            color #7f7f7f
            display flex
            align-items center
            >i
              font-size 36px
              margin 0 20px 0 40px
            >span
              margin-right 30px
</style>
