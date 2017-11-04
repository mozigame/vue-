<template>
  <div class="tabbar">
    <!--<group>-->
    <!--<cell is-link title="Simple" link="/component/tabbar-simple"></cell>-->
    <!--<cell is-link title="Switch icons" link="/component/tabbar-icon"></cell>-->
    <!--</group>-->
    <tabbar>
      <tabbar-item selected link="/purchase">
        <img slot="icon" src="/static/purchase-false.png">
        <img slot="icon-active" src="/static/purchase-true.png">
        <span slot="label">抢购</span>
      </tabbar-item>
      <tabbar-item link="/shop">
        <img slot="icon" src="/static/shop-false.png">
        <img slot="icon-active" src="/static/shop-true.png">
        <span slot="label">商城</span>
      </tabbar-item>
      <tabbar-item link="/find">
        <img slot="icon" src="/static/find-false.png">
        <img slot="icon-active" src="/static/find-true.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" src="/static/my-false.png">
        <img slot="icon-active" src="/static/my-true.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tabbar
    .weui-tabbar
      position fixed
      z-index 200
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label
      color $color-sub-theme
    .weui-tabbar__label
      line-height 20px

</style>
