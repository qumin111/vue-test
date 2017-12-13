<template>
  <div >
      <div class="input_page">
        <input type="tel" v-for="(item, index) in 10" :key="index"
            maxlength="1"
            @keyup="inputVal('a'+index, $event)"
            :ref="'a'+index"
        >          
      </div>

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
        getRefArr () {
            let arr = [];
            for (let i in this.$refs) {
                arr.push(i);
            }
            return arr;
        },
       inputVal (refNum, e) {
            let arr = this.getRefArr();
            let nextRefNum = '';
            let index = Array.indexOf(arr, refNum);
            if (e.keyCode === 8) {
                nextRefNum = index - 1;
            } else {
                nextRefNum = index + 1;
            }
            let nextRef = arr[nextRefNum];
            this.$refs[nextRef] && this.$refs[nextRef][0].focus();
       }
   }
 }
</script>

<style lang="stylus">
.input_page {
    padding 100px 20px;
    input {
        line-height 30px;
        font-size 20px; /*px*/
        border-bottom 2px solid #575757;
        margin 0 10px;
        width 40px;
        text-align center
        background-color #eee
    }
}
 
</style>
