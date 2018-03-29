<template>
  <div class="index">
    <h1>{{Author}}</h1>
    <div class="footer">
      {{Slogan}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  /* 计算属性 computed: {
   ...mapState({
   author: state => state.home.author,
   slogan: state => state.home.slogan
   })
   } */
  computed: {
    ...mapGetters([
      'Author',
      'Slogan'
    ])
  },
  methods: {
    init () {
      this.$store.dispatch('getAuthor')
      this.$store.dispatch('getSlogan')
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/site";
  @import "../assets/scss/todos";
</style>
