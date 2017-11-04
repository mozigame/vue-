<template>
  <transition name="slide">
    <div class="exchange-list">
      <div class="exchange-list-content">
        <tab class="tab" active-color="#f45444" bar-active-color="#fff" :animate="false">
          <tab-item selected @on-item-click="onItemClick">未兑换</tab-item>
          <tab-item @on-item-click="onItemClick">已兑换</tab-item>
        </tab>
        <div class="list">
          <ul class="list-1" v-if="listIdx==0">
            <li v-for="i in 10">
              <dl class="left">
                <dt>100元充值卡</dt>
                <dd>商品期数:
                  <span class="striking">20170123061</span>
                </dd>
                <dd>幸运号段:
                  <span class="striking">双号</span>
                </dd>
                <dd>获奖单数:
                  <span class="striking">2单</span>
                </dd>
                <dd>商城时间:2017-01-23 13:09:25</dd>
              </dl>
              <div class="right">
                <button class="click-ex">
                  点击兑换
                </button>
              </div>
            </li>
          </ul>
          <ul class="list-2" v-else="">
            <li>
              <dl class="">
                <dt>20元充值卡</dt>
                <dd>商品期数:
                  <span class="striking">20170123061</span>
                </dd>
                <dd>幸运号段:
                  <span class="striking">双号</span>
                </dd>
                <dd>领取人:
                  <span class="striking">Jape</span>
                </dd>
                <dd>兑奖状态:
                  <span class="striking">已兑换</span></dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="operation-batch">
        <div class="button" @click="showBatch=true">批量兑换抢币</div>
      </div>
      <div v-transfer-dom>
        <popup v-model="showBatch" height="270px" is-transparent>
          <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
            <group style="margin-bottom: 10px">
              <h1 style="line-height: 40px; text-align: center">确定兑换么?</h1>
            </group>
            <div style="padding:20px 15px;">
              <x-button type="warn">确定</x-button>
              <x-button @click.native="showBatch = false">取消</x-button>
            </div>
          </div>
        </popup>
      </div>

    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem ,TransferDom, Popup, Group, Cell, XSwitch, Toast, XAddress, ChinaAddressData} from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XAddress,
    },
    data () {
      return {
        listIdx:0,
        showBatch:false
      }
    },
    methods:{
      onItemClick (index) {
        this.listIdx = index
      },
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

  .exchange-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-background
    z-index 300
    .exchange-list-content
      .tab
        .vux-tab-item
          background #333
          color $color-theme
          font-size $font-size-medium-x
        .vux-tab-selected
          background $color-theme !important
          color white !important
      .list
        position absolute
        width 100%
        top 44px
        bottom 0
        overflow auto
        line-height 25px
        color $color-text-tw
        padding-bottom 60px
        li
          position relative
          background-color $color-highlight-background
          border-bottom 1px solid $color-border
          padding $padding-big
          dt
            font-weight bold
            color $color-text-on
          .striking
            color $color-sub-theme
          .click-ex
            position absolute
            right 15px
            bottom 50px
            width 100px
            border-radius 20px
            border 0
            color $color-text-fo
            background $color-theme
            font-size $font-size-medium
            line-height 28px
    .operation-batch
      position absolute
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
