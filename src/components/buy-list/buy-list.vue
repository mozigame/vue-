<template>
  <transition name="slide">
    <div class="buy-list">
      <ul class="buy-list-content">
        <li class="row">
          <div class="left">
            <div class="goods">
              <img src="/static/card/card-0.png" alt="">
              <span>¥50</span>
            </div>
            <div class="state">
              <img src="/static/puy-state/state-1.png" alt="">
            </div>
          </div>
          <div class="right">
            <ul class="msgDetails">
              <li>50元充值卡</li>
              <li>本期参与:
                <span class="name">Nipn</span>
              </li>
              <li>参与时间:2017-01-03 12:45:21</li>
              <li>
                参与号段:
                <span class="striking">买双 X 1单</span>
              </li>
              <li>开奖时间:2017-01-03 12:50:00</li>
              <li>获胜号码:
                <span class="striking">0</span>
              </li>
            </ul>
            <div class="look-button">
              <button class="">查看详情</button>
            </div>
          </div>
        </li>
        <li class="row" v-for="i in 20">
          <div class="left">
            <div class="goods">
              <img src="/static/card/card-1.png" alt="">
              <span>¥20</span>
            </div>
            <div class="state">
              <img src="/static/puy-state/state-2.png" alt="">
            </div>
          </div>
          <div class="right">
            <ul class="msgDetails">
              <li>20元充值卡</li>
              <li>本期参与:
                <span class="name">Nipn</span>
              </li>
              <li>参与时间:2017-01-03 12:45:21</li>
              <li>
                参与号段:
                <span class="striking">买双 X 1单</span>
              </li>
              <li>开奖时间:2017-01-03 12:50:00</li>
              <li>获胜号码:
                <span class="striking">5</span>
              </li>
            </ul>
            <div class="look-button">
              <button class="">查看详情</button>
            </div>
          </div>
        </li>
      </ul>
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
  .buy-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-background
    z-index 300
    overflow auto
    .buy-list-content
      .row
        display flex
        flex-direction row
        padding $padding-big $padding-base
        &:nth-child(2n-1)
          background white
        .left
          flex 0 0 135px
          .goods
            position relative
            width 125px
            img
              width 100%
            span
              position absolute
              top 6px
              right 6px
              font-size $font-size-medium-x
              color $color-text-fo
          .state
            width 100px
            margin -4px auto
            img
              width 100%
        .right
          flex 1
          .msgDetails
            font-size $font-size-small
            li
              line-height 22px
              .striking
                color $color-sub-theme
              .name
                color #c19c41
          .look-button
            overflow hidden
            margin-top 10px
            text-align right
            button
              width 110px
              border 1px solid $color-theme
              border-radius 20px
              color $color-theme
              background none
              font-size $font-size-medium
              line-height 22px



</style>
