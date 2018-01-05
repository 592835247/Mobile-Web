import Vue from 'vue'
import App from './App.vue'
import router from './router'
import svgImage from './components/svg/svg_image.vue'
//引入横向滑动
import {Swipe,SwipeItem} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component('svgImage', svgImage)
new Vue({
  el:'#app',
  render: h => h(App),
  router
})
