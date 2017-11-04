<template>
  <div class="purchase">
    <div class="purchase-content">
      <div class="remind">
        <div class="remind-img"><img src="/static/remind.png" alt=""></div>
        <div class="remind-content">
          <swiper :options="swiperRemind">
            <swiper-slide v-for="(remind, index) in reminds" :key="index">
              <div class="remind-text">{{remind}}</div>
            </swiper-slide>
          </swiper>
        </div>

      </div>
      <div class="person">
        <div class="person-msg">
          <div class="person-avatar">
            <img src="/static/avatar/avatar-1.jpg" alt="">
          </div>
          <div class="person-data">
            <div class="row">
              <img src="/static/integral.png" alt="" class="icon">
              <span class="text">抢币:22</span>
            </div>
            <div class="row">
              <img src="/static/victory.png" alt="" class="icon">
              <span class="text">获胜:1</span>
            </div>
          </div>
        </div>
        <div class="person-operate">
          <router-link class="button" to="/purchase/exchange-list" tag="div">
            <img src="/static/exchange.png" alt="" class="icon">
            <span class="text">兑换</span>
          </router-link>
          <div class="button">
            <img src="/static/recharge.png" alt="" class="icon">
            <span class="text">充值</span>
          </div>
        </div>
      </div>
      <div class="goods">
        <tab :line-width="1" active-color="#f45444" bar-active-color="#f45444">
          <tab-item @on-item-click="onGoodsClick">20元商品</tab-item>
          <tab-item selected @on-item-click="onGoodsClick">50元商品</tab-item>
          <tab-item @on-item-click="onGoodsClick">100元商品</tab-item>
        </tab>
        <div class="details">
          <div class="top">
            <p>本期开奖号码<span class="striking">52241</span></p>
            <p><span class="striking">"单号"</span>抢购成功</p>
          </div>
          <div class="center">
            <swiper :options="swiperGoods">
              <swiper-slide v-for="(card,index) in goodsCards" :key="index">
                <img :src="card" alt="" class="goods-img">
                <span class="goodPrice">¥{{goodsPrice}}</span>
              </swiper-slide>
            </swiper>
          </div>
          <div class="bottom">
            仅售: {{sellPrice}}元
          </div>
        </div>
      </div>
      <div class="rule">
        抢购规则:根据当期"时时彩开奖号码"最后一位数字,为单数则"买单"抢购成功,反之"买双"抢购成功。
        <span class="striking" @click="showRuleDialog=true">详细介绍 >></span>
      </div>
      <div class="buy">
        <button class="odd">买单</button>
        <div class="time-box">
          <p>下期开战倒计时</p>
          <p class="time">01:32:322</p>
        </div>
        <button class="even">买双</button>
      </div>
      <div class="data-list">
        <tab :line-width="1" active-color="#f45444" bar-active-color="#f45444">
          <tab-item selected @on-item-click="dataListClick">最新参与</tab-item>
          <tab-item @on-item-click="dataListClick">中奖记录</tab-item>
          <tab-item @on-item-click="dataListClick">抢购看盘</tab-item>
        </tab>
        <div class="list-box">
          <ul class="list-type1" v-if="dataList != 2">
            <li v-for="(item,index) in dataType1List" :key="index">
              <div class="avatar">
                <img alt="" :src="item.avatar">
              </div>
              <div class="content">
                <div class="row">
                  <div class="name">{{item.name}}</div>
                  <div class="ip">{{item.ip}}</div>
                </div>
                <div class="row">
                  <div class="details">
                    <span v-html="dataList==0?'购买':'夺得'">夺得</span>
                    <span class="striking">{{item.num}}</span>
                    单-{{item.goods}}
                  </div>
                  <div class="time">
                    {{item.time}}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="list-type2" v-else="">
            <li class="header">
              <div>时时彩期号</div>
              <div>开奖号</div>
              <div>中奖</div>
            </li>
            <li v-for="(item,index) in historyList" :key="index">
              <div class="">{{item.term}}</div>
              <div>{{item.num}}</div>
              <div>{{item.win}}</div>
            </li>
          </ul>
        </div>
      </div>

      <div v-transfer-dom>
        <x-dialog v-model="showRuleDialog" class="rule-dialog" hide-on-blur>
          <div class="title">抢购规则</div>
          <div class="img-box">
            <img src="/static/rule-img.png" style="max-width:100%">
          </div>
          <div @click="showRuleDialog=false" class="close">
            知道了
          </div>
        </x-dialog>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem, Sticky, Divider,XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom} from 'vux'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  const reminds = [
    '它无孔不入',
    '你无处可藏',
    '不是它可恶',
    '而是它不懂你',
    '我们试图做些改变',
  ]
  const swiperGoods = {
    paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflow: {
      rotate: 0,
      stretch: 55,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    onSlideChangeEnd: function(swiper){
      swiper.update(); //swiper更新
    }
  }
  const swiperRemind = {
    paginationClickable: true,
    direction: 'vertical',
    autoplay: 2500,
    loop: true,
    speed: 800,
  }
  const goodsCards = [
    '/static/card/card-0.png',
    '/static/card/card-1.png',
    '/static/card/card-2.png',
  ]
  const newList = [
    {
      avatar: '/static/avatar/avatar-1.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-2.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    },
    {
      avatar: '/static/avatar/avatar-3.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-4.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    },
    {
      avatar: '/static/avatar/avatar-5.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-3.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    }
  ]
  const WinList = [
    {
      avatar: '/static/avatar/avatar-5.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-4.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    },
    {
      avatar: '/static/avatar/avatar-3.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-2.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    },
    {
      avatar: '/static/avatar/avatar-1.jpg',
      name: '李谥',
      ip: '【北京北京】182.92.186.167',
      num: '1',
      goods: '50元充值卡',
      time: '2017/01/01 11:30:56'
    },
    {
      avatar: '/static/avatar/avatar-4.jpg',
      name: '王玨',
      ip: '【北京北京】152.2.154.179',
      num: '2',
      goods: '20元充值卡',
      time: '2017/01/01 11:20:56'
    }
  ]
  const historyList = [
    {
      term: '20170101035',
      num: '6,0,9,7,9',
      win: '单号'
    },
    {
      term: '20170101034',
      num: '6,0,9,7,7',
      win: '单号'
    },
    {
      term: '20170101033',
      num: '9,0,9,7,8',
      win: '双号'
    },
    {
      term: '20170101035',
      num: '6,0,9,7,9',
      win: '单号'
    },
    {
      term: '20170101035',
      num: '6,0,9,7,9',
      win: '单号'
    },
  ]

  export default {
    directives: {
      TransferDom
    },
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XDialog,
      XButton,
      Group,
      XSwitch,
      swiper,
      swiperSlide,

    },
    ready () {

    },
    methods: {
      onItemClick (index) {
        console.log('on item click:', index)
      },
      dataListClick(index) {
        this.dataList = index
        if (index == 0) {
          this.dataType1List = this.newList
        } else if (index == 1) {
          this.dataType1List = this.WinList
        } else {
          return
        }
      },
      onGoodsClick(index){
        switch (index){
          case 0:
            this.goodsPrice='20'
            this.sellPrice='12'
            break
          case 1:
            this.goodsPrice='50'
            this.sellPrice='28'
            break
          case 2:
            this.goodsPrice='100'
            this.sellPrice='55'
            break
        }
      }
    },
    data () {
      return {
        reminds: reminds,
        swiperGoods: swiperGoods,
        swiperRemind: swiperRemind,
        goodsCards: goodsCards,
        dataList: 0,
        newList: newList,
        WinList: WinList,
        historyList: historyList,
        dataType1List: newList,
        goodsPrice:'50',
        sellPrice:'28',
        showRuleDialog:false
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .purchase
    position: absolute
    width: 100%
    top: 0
    bottom: 52px
    .purchase-content
      position: relative
      height: 100%
      overflow auto
    .remind
      height 25px
      line-height 25px
      display flex
      flex-direction row
      align-items center
      background-color #282828
      padding 0 $padding-base
      .remind-img
        flex: 0 0 30px
        img
          width 20px
          vertical-align middle
      .remind-content
        flex: 1
        color $color-text-fo
        font-size $font-size-medium
        .swiper-container
          height 25px
          no-wrap()
    .person
      display flex
      flex-direction row
      justify-content space-between
      padding $padding-base
      background-color $color-highlight-background
      color $color-text-th
      border-bottom 1px solid $color-border
      .person-msg
        display flex
        flex-direction row
        .person-avatar
          margin-right 5px
          img
            width 45px
            height 45px
            border-radius 5px
        .person-data
          display flex
          flex-direction column
          height 45px
          justify-content space-around
          .row
            display flex
            flex-direction row
            font-size $font-size-medium
            align-items center
            .icon
              width 18px
              height 18px
              margin-right 5px
      .person-operate
        display flex
        flex-direction row
        align-items center
        .button
          display flex
          align-items center
          margin-left 10px
          border 1px solid $color-sub-line
          padding 5px
          border-radius 5px
          .icon
            height 20px
            width 20px
            margin-right 2px
          .text
            font-size $font-size-medium

    .goods
      .details
        background-color $color-highlight-background
        padding $padding-base
        .top
          display flex
          text-align center
          justify-content center
          .striking
            padding 0 5px
            color $color-attach-theme
        .center
          padding-top 10px
          padding-bottom 10px
          .swiper-container
            width 100%
          .swiper-slide
            position relative
            background-position center
            background-size cover
            width 50%
            .goodPrice
              position absolute
              top 10% !important
              right 10% !important
              font-size $font-size-large-x
              color $color-text-fo
            .goods-img
              width 100%
        .bottom
          text-align center
    .rule
      padding $padding-base
      font-size $font-size-small
      line-height 18px
      .striking
        color $color-sub-theme
    .buy
      display flex
      align-items center
      justify-content space-between
      background-color $color-highlight-background
      padding $padding-base
      .time-box
        color $color-text-tw
        text-align center
        flex 0 0 110px
        .time
          color $color-sub-theme
          margin-top 5px
      button
        width 25%
        line-height 38px
        padding 0
        border 0
        color $color-text-fo
        font-size $font-size-medium
        border-radius 5px
      .odd
        background-color $color-attach-theme
      .even
        background-color $color-sub-theme
    .data-list
      border-top 1px solid $color-border
      .vux-tab .vux-tab-item
        background-color $color-background
      .list-box
        background-color $color-highlight-background
        .list-type1
          margin-top -1px
          li
            display flex
            padding $padding-base
            border-top 1px solid $color-border
            .avatar
              flex 0 0 50px
              img
                width 40px
                height 40px
                border-radius 50%
            .content
              flex 1
              display flex
              flex-direction column
              align-items center
              justify-content space-around
              font-size $font-size-small
              .row
                display flex
                justify-content space-between
                width 100%
                .name, .time
                  color $color-text-th
                .ip
                  color $color-attach-theme
                .striking
                  color $color-sub-theme
        .list-type2
          .header
            background-color $color-background
            border-bottom 1px solid $color-border
          li
            display flex
            justify-content space-around
            align-items center
            text-align center
            line-height 35px
            div
              width 30%
  .rule-dialog
    font-size $font-size-medium-x
    .weui-dialog
      background-color $color-dialog-background
      .img-box
        padding 0 5%
      .title
        color $color-text-tw
        line-height 45px
      .close
        background-color $color-highlight-background
        line-height 45px
        color $color-attach-theme
        margin-top 5%
        border-top 1px solid $color-line
</style>
