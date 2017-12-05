<template>
  <div class="bodya">
    <p class="hello" @click="next">huhu</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      bottomNav:'recents',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {

  },
  methods: {
    next () {
      this.$router.push('/demo1');
    },
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bodya {
  width: 100%;
}
.restore{
  font-size: 20px;
  /* px */
}
.hello {
  width: 100%;
  height: 150px;
  background-color:red;
  color: #fff;
  font-size: 20px;
  /*px*/
  border: 1px solid #ddd; /*no*/
}
</style>
