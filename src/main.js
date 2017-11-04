// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import { ConfigPlugin } from 'vux'

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX'
})

import 'common/stylus/index.styl'
require('swiper/dist/css/swiper.css')

Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body)


new Vue({
  el: '#app-box',
  router,
  render: h => h(App)
})
