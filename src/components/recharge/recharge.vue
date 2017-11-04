<template>
  <transition name="slide">
    <router-link class="recharge" tag="div" to="/my">
      <div v-transfer-dom>
        <popup v-model="show13" position="bottom" max-height="50%" :hide-on-blur="true" :on-hide="log('27408')">
          <group>
            <cell v-for="i in 20" :key="i" :title="i"></cell>
          </group>
          <div style="padding: 15px;">
            <x-button @click.native="show13 = false" plain type="primary"> Close Me </x-button>
          </div>
        </popup>
      </div>
    </router-link>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XAddress,
      XButton
    },
    data () {
      return {
        addressData: ChinaAddressData,
        show: false,
        show1: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        title6: '默认空的',
        value6: [],
        show7: false,
        showToast: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
        show12: false,
        show13: true
      }
    },
    methods: {
      log (str) {
        console.log(str)
      },

    },
    watch: {
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false
          }, 1000)
        }
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

  .exchange-list
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color $color-cover-background
    z-index 300
</style>
