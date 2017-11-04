<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from 'components/tabbar/tabbar'
  export default {
    components: {
      tabbar

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~vux/src/styles/close.less';
</style>
