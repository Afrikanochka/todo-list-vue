import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import axios from './api'


// Vue.prototype.$api = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
