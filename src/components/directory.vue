<template>
  <div>
      <h2>目录</h2>
      <ul class="directory">
          <li @click="goPage('/HelloWorld')">helloWord</li>
          <li @click="goPage('/inputAutoNext')">输入框依次输入自动聚焦到下一个</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
     return {

     }
   },
   created () {

   },
   methods: {
       goPage (page) {
           this.$router.push(page);
       }
   }
 }
</script>

<style lang="stylus">
.directory {
    padding 20px;
    li {
        line-height 50px;
        font-size 25px; /*px*/
    }
}
 
</style>
