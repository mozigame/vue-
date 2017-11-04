<template>
  <transition name="slide">
    <div class="rank-list">
      <div class="rank-list-content">
        <ul class="list">
          <li class="row" v-for="(item,index) in listDate">
            <div class="rank">{{index+1}}</div>
            <div class="avatar">
              <img :src="item.avatar" alt="" class="">
            </div>
            <h2 class="name">{{item.name}}</h2>
            <div class="ps">
              (已中奖
              <span class="number">{{item.number}}</span>
              单)
            </div>
          </li>
        </ul>
      </div>
      <tab class="tab" active-color="#f45444" bar-active-color="#fff" :animate="false">
        <tab-item selected @on-item-click="onItemClick">日榜</tab-item>
        <tab-item @on-item-click="onItemClick">周榜</tab-item>
        <tab-item @on-item-click="onItemClick">月榜</tab-item>
      </tab>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  const todayList = [
    {
      rank:1,
      avatar:'/static/avatar/avatar-4.jpg',
      name:'Npnpoe',
      number:132498
    },
    {
      rank:2,
      avatar:'/static/avatar/avatar-5.jpg',
      name:'Kpae',
      number:13249
    },
    {
      rank:3,
      avatar:'/static/avatar/avatar-3.jpg',
      name:'Iik3',
      number:2498
    },
    {
      rank:4,
      avatar:'/static/avatar/avatar-2.jpg',
      name:'Onoaie',
      number:498
    },
    {
      rank:5,
      avatar:'/static/avatar/avatar-1.jpg',
      name:'Wokpe',
      number:98
    },
  ]
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
    },
    data () {
      return {
        listIdx:0,
        showBatch:false,
        todayList:todayList,
        weekList:todayList.slice(1,6),
        monthList:todayList.slice(2,6),
        listDate:todayList
      }
    },
    methods:{
      onItemClick (index) {
        switch (index){
          case 0:
            this.listDate=this.todayList
            break
          case 1:
            this.listDate=this.weekList
            break
          case 2:
            this.listDate=this.monthList
            break
        }

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
  .rank-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-highlight-background
    z-index 300
    overflow auto
    .tab
      position fixed
      left 0
      bottom 0
      width 100%
      .vux-tab-item
        background #333
        color $color-theme
        font-size $font-size-medium-x
      .vux-tab-selected
        background $color-theme !important
        color white !important
    .rank-list-content
      padding-bottom 44px
      .list
        display flex
        flex-direction column
        .row
          display flex
          align-items center
          padding $padding-big
          &:nth-child(1)
            background-color #fef1bd
          &:nth-child(2)
            background-color #ebfaff
          &:nth-child(3)
            background-color #f2e2e2
          .rank
            width 40px
            font-size $font-size-large-x
            color $color-theme
          .avatar
            width 50px
            height 50px
            border-radius 50%
            border 3px solid #e0b100
            overflow hidden
            margin-right 10px
            img
              width 100%
          .name
            margin-right 5px
            font-size $font-size-medium-x
            color #d6aa09
          .ps
            font-size $font-size-small
            color $color-text-th
            .number
              color $color-sub-theme

</style>
