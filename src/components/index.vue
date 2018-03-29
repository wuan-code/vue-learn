<template>
  <div class="index">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li>
        <input v-model="newTodo"
               @keyup.enter="addItem"
               placeholder="快写下您要我记住的事吧"
               autofocus="true"/>
      </li>
    </ul>
    <Todo :todos="todos" @transferchange="getChange"></Todo>
  </div>
</template>

<script type="text/ecmascript-6">
import Todo from './todo-list.vue'
export default {
  name: 'index',
  data () {
    return {
      newTodo: '',
      title: '记事本',
      todos: []
    }
  },
  components: {Todo},
  /* 实例完成之后的钩子函数 ，mounted:将编译好的html挂载到页面完成后执行的钩子 */
  created () {
    if (this.is_initialized) {
      this.todos = JSON.parse(sessionStorage.getItem('VUE-TODOS'))
    }
  },
  /* 计算属性 */
  computed: {
    is_initialized () {
      return sessionStorage.getItem('VUE-TODOS') != null
    }
  },
  methods: {
    addItem () {
      this.todos.push({
        value: this.newTodo,
        created: Date.now(),
        done: false
      })
      this.saveToStore()
      this.newTodo = ''
    },
    getChange (todos) {
      this.todos = todos
    },
    saveToStore () {
      // localStorage存储本地json(永久储存).由于vuex里，我们保存的状态，都是数组，而LS只支持字符串，所以需要用JSON转换： JSON.stringify(state.subscribeList);   // array -> string
      // JSON.parse(localStorage.getItem("subscribeList"));    // string-> array
      // sessionStorage(会话储存)
      console.log(this.todos)
      sessionStorage.setItem('VUE-TODOS', JSON.stringify(this.todos))
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/site";
  @import "../assets/scss/todos";
</style>
