import Vue from 'vue'
import App from './App.vue'
import vuexStore from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: vuexStore
}).$mount('#app')
