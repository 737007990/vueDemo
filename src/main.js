import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router/router'
import store from './store/store'

Vue.config.productionTip = false
new Vue({
  router:VueRouter,
  store:store,
  render: h => h(App),
}).$mount('#app')
