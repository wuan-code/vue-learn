// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from './api'
// 引入vuex
import store from './store'
// 引入过滤器
import * as filters from './tool/filter'

Vue.config.productionTip = false
// 将 axios 改写为 Vue 的原型属性，其他组件可以直接使用，不需要每次引用 （一般情况下组件不建议使用$axios,最好封装在store里面）
Vue.prototype.$ajax = axios
// 使用过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
