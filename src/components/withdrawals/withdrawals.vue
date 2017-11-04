<template>
  <transition name="slide">
    <div class="withdrawals">
      <div class="withdrawals-content">
        <div class="top">
          <img src="/static/purse.png" alt="">
        </div>
        <div class="center">
          <h3>可提现金额</h3>
          <h1>30</h1>
        </div>
        <div class="bottom">
          <div class="ipt-box">
            <div class="ipt-main">
              <div class="label">金额</div>
              <input type="text" placeholder="输入提现金额">
            </div>
            <div class="ipt-ps">
              温馨提示:单笔提现第三方支付平台收取手续费2元(每日第一笔免费)
            </div>
          </div>
          <div class="submit-bnt">
            提现
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .withdrawals
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-background
    z-index 300
    overflow hidden
    .withdrawals-content
      width 65%
      min-width 240px
      margin 0 auto
      .top
        padding 15% 0
        img
          display block
          margin 0 auto
          width 100%
      .center
        display flex
        flex-direction column
        align-items center
        color $color-text-tw
        h3
          font-size 18px
        h1
          margin-top 5%
          font-size 30px
      .bottom
        .ipt-box
          background-color $color-highlight-background
          border 1px solid $color-border
          border-radius 5px
          color $color-text-tw
          margin 10% auto
          .ipt-main
            display flex
            align-items center
            padding 5px 15px
            line-height 35px
            .label
              flex 0 0 40px
            input
              flex 1
              border none
              line-height 35px
              height 35px
          .ipt-ps
            display flex
            flex-wrap wrap
            justify-content center
            align-items center
            height 45px
            padding 0px 15px
            border-top 1px solid $color-border
            color $color-text-th
            font-size $font-size-small
        .submit-bnt
          width 100%
          line-height 35px
          border 0
          border-radius 5px
          text-align center
          color white
          background-color  $color-sub-theme
</style>
