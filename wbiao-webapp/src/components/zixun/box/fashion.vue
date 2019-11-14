<template>
    <div>
        <div class="fashion" v-for="(list,i) in data.fashion" :key="i">
            <div class="title">{{list.title}}</div>
            <div class="fashion-img">
                <img :src=list.img alt="">
            </div>
            <div class="fashion-time">
                <span class="f-l">购表指南</span>
                <span class="f-r">11-04</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fashion",
        props: ["data"]
    }
</script>

<style scoped>
    .fashion{
        width: 100%;
        /* height: 2.8rem; */
        /* background: aqua; */
        padding: 0.15rem;
        border-bottom: 0.01rem solid #f1f1f1;
        box-sizing: border-box;
        font-size: 0;
    }
    .fashion .title{
        font-size: 0.16rem;
        color: #333;
        line-height: 0.24rem;
    }
    .fashion-img{
        margin-top: 0.1rem;
    }
    .fashion-img img{
        width: 100%;
    }
    .fashion-time{
        margin-top: 0.05rem;
        font-size: 0.12rem;
        color: #999;
        height: 0.15rem;
    }
    .fashion-time .f-l{
        float: left!important;
    }
    .fashion-time .f-r{
        float: right!important;
    }
</style>