<template>
  <div>
    <p @click="next">demo1</p>
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
    next () {
      this.$router.push('/demo2');
    },
   }
 }
</script>

<style lang="stylus">

 
</style>
