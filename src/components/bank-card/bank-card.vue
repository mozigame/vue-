<template>
  <transition name="slide">
    <div class="bank-card">
      <ul class="bank-card-content">
        <li class="row">
          <div class="icon">
            <img src="/static/my-cell/my-cell-7.png" alt="" class="">
          </div>
          <div class="card-msg">
            <h4>工商银行</h4>
            <h5>**************3795</h5>
          </div>
          <div class="set">
            <h5>设为默认</h5>
            <!--<x-switch title="" v-model="value1"></x-switch>-->
            <input type="radio" name="default">
          </div>
        </li>
      </ul>
      <div class="add-bank-card">
        <div class="button">添加银行卡</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { XSwitch, Group,XButton } from 'vux'

  export default {
    components: {
      XSwitch,
      Group,
      XButton
    },
    methods: {

    },
    data () {
      return {
        value1: true,
        value2: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .bank-card
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-background
    z-index 300
    overflow auto
    .bank-card-content
      padding-bottom 60px
      .row
        display flex
        align-items center
        justify-content space-between
        padding $padding-big
        background-color $color-highlight-background
        color $color-text-th
        border-bottom 1px solid $color-border
        .icon
          flex 0 0 60px
          img
            width 35px
        .card-msg
          flex 1
          display flex
          flex-direction column
          h4
            font-size $font-size-medium-x
            margin-bottom 10px
        .set
          flex 0 0 100px
          display flex
          flex-direction column
          align-items center
          .weui-cell:before
            border 0
          h5
            font-size $font-size-medium
            margin-bottom 12px


    .add-bank-card
      position fixed
      bottom 0
      left 0
      width 100%
      height 60px
      background $color-cover-background
      .button
        width 92%
        height 40px
        margin 10px auto
        line-height 40px
        text-align center
        background-color $color-sub-theme
        color $color-text-fo
        border-radius 5px
</style>
