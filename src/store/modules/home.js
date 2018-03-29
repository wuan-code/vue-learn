import $axios from '@/api/index'
import * as types from '../types'

const state = {
  author: JSON.parse(localStorage.getItem('author')) || '',
  slogan: JSON.parse(localStorage.getItem('slogan')) || ''
}

const getters = {
  Author: state => state.author,
  Slogan: state => state.slogan
}

/*
   vue页面使用方法: import store from '../vuex/index'
   store.dispatch({
   type:'setAuthor',
   payload:{
   name:'武安'
   }
   })
 */
const actions = {
  /**
   * 请求用户信息
   */
  getAuthor ({ commit }) {
    $axios.getAuthor()
      .then(result => {
        // 调用mutations对应的方法
        commit(types.SET_AUTHOR, result)
      })
  },

  /**
   * 请求用户信息
   */
  getSlogan ({ commit }) {
    $axios.getSlogan()
      .then(result => {
        commit(types.SET_SLOGAN, result)
      })
  },

  /**
   * 设置作者
   */
  setAuthor ({ commit }, res) {
    localStorage.setItem('author', JSON.stringify(res))
    commit(types.SET_AUTHOR, res)
  },

  /**
   * 设置slogan
   */
  setSlogan ({ commit }, res) {
    localStorage.removeItem('slogan')
    commit(types.SET_SLOGAN, res)
  }
}

// 实际操作数据方法
const mutations = {
  [types.SET_AUTHOR] (state, res) {
    state.author = res
  },

  [types.SET_SLOGAN] (state, status) {
    state.slogan = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
