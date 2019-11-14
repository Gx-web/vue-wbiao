<template>
    <div class="modular">
        <div class="modular-content" v-for="(pic,i) in data.modular" :key="i">
            <img :src=pic.img alt="">
            <p>{{pic.text}}</p>
        </div>
<!--        <div class="modular-content">-->
<!--            <img src="../../../../public/img2/152220649960305.jpg" alt="">-->
<!--            <p>为什么会有人在闲鱼上卖1600元的水鬼？</p>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "modular",
        props: ["data"]
    }
</script>

<style scoped>
    .modular{
        width: 100%;
        height: 1.37rem;
        /* background: skyblue; */
        padding: 0.15rem;
        border-bottom: 0.01rem solid #f1f1f1;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .modular-content{
        width: 48%;
        height: 100%;
        /* background: slateblue; */
        font-size: 0;
    }
    .modular-content img{
        width: 100%;
        border-radius: 0.1rem;
    }
    .modular-content p{
        margin-top: 0.05rem;
        font-size: 0.12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>