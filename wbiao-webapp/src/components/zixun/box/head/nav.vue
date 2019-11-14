<template>
    <div class="nav">
        <div class="nav-content" v-for="(title,i) in data.nav" :key="i"
             @click="changeColor(i)" :class="i==color?'active':''">
            <div class="nav-c-t">{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "znav",
        props: ["data"],
        data(){
            return {
                color:0
            }
        },
        methods:{
            changeColor(index){
                this.color = index
            }
        }
    }
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 0.43rem;
        /* background: pink; */
        display: flex;
        align-items: center;
        overflow-x: scroll;
    }
    /* 取消滚动条 */
    .nav::-webkit-scrollbar { width: 0 !important;display: none;}
    .nav-content{
        width: 5.77rem;
        height: 0.168rem;
        /* background: chartreuse; */
    }
    .nav-c-t{
        font-size: 0.13rem;
        /* background: chocolate; */
        width: 0.72rem;
        height: 100%;
        text-align: center;
        font-weight: bold;
    }
    .active{
        color: #d1af67;
    }
</style>