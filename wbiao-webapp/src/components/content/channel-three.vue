<template>
    <div>
        <div class="channel-three" v-for="(img,i) in data.thisMonth" :key="i">
            <img :src=img alt="">
        </div>
<!--        <div class="channel-three">-->
<!--            <img src="../../.././public/img1/e6c20712ab8c403bb2eec9db11bdecc4.jpg" alt="">-->
<!--        </div>-->
<!--        <div class="channel-three">-->
<!--            <img src="../../.././public/img1/4dbb7c2bb2dc4021a37a7bef1a96eafd.jpg" alt="">-->
<!--        </div>-->
<!--        <div class="channel-three">-->
<!--            <img src="../../.././public/img1/bd075dd7db694eadbeecedba24889b58.jpg" alt="">-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name:"channel-three",
    props: ["data"]
}
</script>

<style scoped>
.channel-three{
    width: 100%;
    height: 1.8rem;
}
.channel-three img{
    width: 100%;
    height: 100%;
}
</style>