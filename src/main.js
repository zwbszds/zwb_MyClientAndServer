
import Vue from 'vue'
import App from './App'
import  router from './router'
import  {Button}from 'mint-ui'
import store from './store'
import './mock/mockServer.js'


//在全局中引入头
import  TopHeader from './components/TopHeader/TopHeader.vue'
import 'swiper/dist/css/swiper.min.css'
//注册全局组件
Vue.component('TopHeader',TopHeader)
Vue.component(Button.name,Button)

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  render: h=>h(App),
  //注册路由器
  router,
  store
})
