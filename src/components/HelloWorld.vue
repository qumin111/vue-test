<template>
    <div class="input-box">
       <div class="box" ref="box">200</div>
       <div class="box2" ref="box2">375</div>
       <p class="line"></p>

        <p>box width = 200px</p>
        <p>网页可见区域宽：document.body.clientWidth = {{clientWidth}}</p>
        <p>屏幕分辨率的宽：window.screen.width = {{width}}</p>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                clientWidth: '',
                Width: '',
                boxWidth: '',
            }
        },

        mounted () {
            this.clientWidth = document.body.clientWidth;
            this.width = window.screen.width;
            console.log(this.$refs['box']);
            let m = this.filterA();
            console.log(m);
        },

        methods: {
            filterA () {
                let a = [{a: 'd'},{a: 'd'},{a: 's'},{a: 'b'},{a: 'd'},{a: 'm'}];
                let needKey = ['s', 'd', 'b', 'm'];
                for (let i in needKey) {
                    let b = a.filter((x) => {
                        return x.a === needKey[i];
                    })
                    if (b.length > 0) {
                        return b;
                    }
                }
            }   
        }
    }
</script>

<style lang="stylus">
*{
    padding 0
    margin 0
}
html, body {
    width 100%
    height 100%
}
.box {
    width 200px;
    background yellow;
}
.box2 {
    width 375px;
    background red;
}
    .line {
        border 1px solid #333
        width 100%;
    }
@media screen and (max-width: 370px) {
    .box {
        width 200px;
        background blue;
    }
}
</style>
