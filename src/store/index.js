import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  }
})

// 设置暴露接口
export default store
