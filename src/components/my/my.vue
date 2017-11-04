<template>
  <div class="my">
    <div class="my-content">
      <div class="person">
        <img src="/static/avatar/avatar-5.jpg" class="avatar" alt="">
        <div class="name">
          <span>Jape</span>
          <img src="/static/edit-red.png" alt="" class="edit">
        </div>
        <div class="details">
          <div class="content">
            <div class="num">10</div>
            <div class="label">抢币</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div class="num">8</div>
            <div class="label">获胜</div>
          </div>
          <div class="line"></div>
          <div class="content">
            <div class="num">5</div>
            <div class="label">兑换</div>
          </div>
        </div>
      </div>
      <div class="handle">
        <router-link tag="div" to="/my/withdrawals" class="content">
          <img src="/static/withdrawals-red.png" alt="">
          <span>提现</span>
        </router-link>
        <div class="line"></div>
        <router-link class="content" to="/my/exchange-list" tag="div">
          <img src="/static/exchange-red.png" alt="" style="width: 23px; height: 23px">
          <span>兑换</span>
        </router-link>
        <div class="line"></div>
        <div class="content" @click="show13=true">
          <img src="/static/recharge-red.png" alt="">
          <span>充值</span>
        </div>
      </div>
      <group class="cell-list">
        <cell-box is-link link="/my/buy-list">
          <img src="/static/my-cell/my-cell-1.png" alt="">
          <span>抢购记录</span>
        </cell-box>
        <cell-box is-link link="/my/withdrawals-list">
          <img src="/static/my-cell/my-cell-2.png" alt="">
          <span>提现记录</span>
        </cell-box>
        <cell-box is-link link="/my/exchange-list">
          <img src="/static/my-cell/my-cell-3.png" alt="">
          <span>兑换记录</span>
        </cell-box>
        <cell-box is-link link="/my/business-list">
          <img src="/static/my-cell/my-cell-4.png" alt="">
          <span>交易明细</span>
        </cell-box>
        <cell-box is-link link="/my/rank-list">
          <img src="/static/my-cell/my-cell-5.png" alt="">
          <span>总排行榜</span>
        </cell-box>
        <cell-box is-link link="/my">
          <img src="/static/my-cell/my-cell-6.png" alt="">
          <span>推广链接</span>
        </cell-box>
      </group>
      <group class="cell-list">
        <cell-box is-link link="/my/bank-card">
          <img src="/static/my-cell/my-cell-7.png" alt="">
          <span>银行卡管理</span>
        </cell-box>
      </group>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Group, Cell, CellBox,TransferDom, Popup, XButton, XSwitch, Toast, XAddress, ChinaAddressData} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      CellBox,
      Popup,
      XSwitch,
      Toast,
      XAddress,
      XButton
    },
    data () {
      return {
        show13: false
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .my
    position: fixed
    width: 100%
    top: 0
    bottom: 52px
    z-index 280
    .my-content
      position: relative
      height: 100%
      overflow auto
    .person
      display flex
      flex-direction column
      justify-content center
      height 230px
      background url("/static/my-bk1.png") no-repeat center
      background-size cover
      align-items center
      color $color-text-fo
      .avatar
        width 80px
        height 80px
        border-radius 50%
      .name
        display flex
        align-items center
        font-size $font-size-medium-x
        margin 20px 0
        img
          width 18px
          height 18px
          margin-left 5px
      .details
        display: flex;
        align-items center
        justify-content space-around
        width 100%
        .line
          width 1px
          height 25px
          background-color white
        .content
          display flex
          flex-direction column
          align-items center
          justify-content space-between
          height 35px
          width 120px

    .handle
      display flex
      flex-direction row
      align-items center
      justify-content space-around
      background-color $color-highlight-background
      color $color-sub-theme
      line-height 50px
      border-bottom 1px solid $color-border
      margin-bottom 12px
      .line
        width 1px
        height 25px
        background-color $color-sub-theme
      .content
        display flex
        align-items center
        font-size $font-size-medium-x
        width 120px
        justify-content center
        img
          width 28px
          height 28px
          margin-right 5px
    .cell-list
      .weui-cells
        margin-top 0
        margin-bottom 12px
      .weui-cell
        line-height 30px
        img
          width 20px
          height 20px
          margin-right 10px
        span
          font-size $font-size-medium
</style>
