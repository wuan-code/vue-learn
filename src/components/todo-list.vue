<template>
  <ul class="todos">
    <li v-for="(todo,index) in todos"
        :class="{'checked':todo.done}" :key="index">
      <input type="checkbox"
             @change="saveToStore"
             v-model="todo.done"
      /><label>{{ index+1 }}.{{ todo.value }}</label>
      <time>{{ todo.created | date }}</time>
      <button @click.prevent="delItem(todo)"></button>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export default {
  props: {
    todos: {
      type: Array
    }
  },
  /* 过滤器 */
  filters: {
    date (val) {
      return moment(val).calendar()
    }
  },
  methods: {
    delItem (todo) {
      this.todos = this.todos.filter((x) => x !== todo)
      this.saveToStore()
    },
    saveToStore () {
      sessionStorage.setItem('VUE-TODOS', JSON.stringify(this.todos))
      this.setChange()
    },
    setChange () {
      this.$emit('transferchange', this.todos)
    }
  }
}
</script>
