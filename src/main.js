import Vue from 'vue'
import App from './App'
import store from './store'
import request from './utils/request'
import loading from 'vuex-axios-sync'

Vue.config.productionTip = false

App.mpType = 'app'

loading(store, request)

const app = new Vue({
  store,
  ...App,
})
app.$mount()
