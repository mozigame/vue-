<template>
  <transition name="slide">
    <div class="business-list">
      <div class="business-list-content">
        <ul class="list">
          <li v-for="(item,index) in wList" :key="index">
            <div class="money">¥{{item.money}}</div>
            <div class="time">{{item.time}}</div>
            <div class="type">{{item.type}}</div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  const wList = [
    {
      money:'-30',
      time:'2017-01-09 10:56',
      type:'提现'
    },
    {
      money:'-100',
      time:'2017-01-09 10:56',
      type:'余额支付'
    },
    {
      money:'+50',
      time:'2017-01-09 10:56',
      type:'充值'
    },
    {
      money:'+100',
      time:'2017-01-09 10:56',
      type:'充值'
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

  .business-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-highlight-background
    z-index 300
    overflow auto
    .business-list-content
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
            color $color-sub-theme
            width 80px
          .time
            color $color-text-th
          .type
            font-size $font-size-medium-x
            color $color-theme
            width 80px
            text-align right


</style>
