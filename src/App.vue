<template>
  <div id="app">
    <router-view class="a" v-transition/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
.a{
  height: 100%;
  background-color #eee
}
#app {
  min-height:100vh
}
</style>
