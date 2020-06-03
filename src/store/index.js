import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleFiles = require.context('./module', true, /\.*.js/)
const modules = moduleFiles.keys().reduce((prev, key) => {
  const name = key.replace(/\.\/(.*)\.js/, '$1')
  prev[name] = moduleFiles(key).default
  return prev
}, {})

const store = new Vuex.Store({
  modules,
})

export default store
