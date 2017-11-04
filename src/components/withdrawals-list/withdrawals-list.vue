<template>
  <transition name="slide">
    <div class="withdrawals-list">
      <div class="withdrawals-list-content">
        <ul class="list">
          <li v-for="(item,index) in wList" :key="index">
            <div class="money">¥{{item.money}}</div>
            <div class="time">{{item.time}}</div>
            <div :class="['state-'+item.state,'state']">{{item.stateStr}}</div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  const wList = [
    {
      money:282742875,
      time:'2017-01-09 10:56',
      state:'0',
      stateStr:'待审核'
    },
    {
      money:28,
      time:'2017-01-09 10:56',
      state:'1',
      stateStr:'成功'
    },
    {
      money:28,
      time:'2017-01-09 10:56',
      state:'2',
      stateStr:'失败'
    },
  ]
  export default {
    components: {
    },
    ready () {

    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      },

    },
    data () {
      return {
        wList:wList
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

  .withdrawals-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-highlight-background
    z-index 300
    overflow auto
    .withdrawals-list-content
      .list
        display flex
        flex-direction column
        li
          display flex
          flex-direction row
          align-items center
          justify-content space-between
          padding $padding-big
          border-bottom 1px solid $color-border
          line-height 28px
          .money
            color $color-theme
            width 80px
          .time
            color $color-text-th
          .state
            font-size $font-size-medium-x
            width 80px
            text-align right
          .state-0
            color $color-attach-theme
          .state-1
            color #16bc34
          .state-2
            color $color-sub-theme




</style>
