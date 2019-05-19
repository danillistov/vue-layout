import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
