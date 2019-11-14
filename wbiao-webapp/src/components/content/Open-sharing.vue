<template>
    <div>
        <div class="Open-sharing" v-for="(list,i) in data.sharePic" :key="i">
            <img :src=list alt="">
        </div>
<!--        <div class="Open-sharing">-->
<!--            <img src="../../.././public/img1/c04f5cc9cc5a4c63a6f190a33acaeb6e.jpg" alt="">-->
<!--        </div>-->
<!--        <div class="Open-sharing">-->
<!--            <img src="../../.././public/img1/992db90dc7b545e2805c2ac01c7e717d.jpg" alt="">-->
<!--        </div>-->
<!--        <div class="Open-sharing">-->
<!--            <img src="../../.././public/img1/e1a99b944a074902af47541d377ba211.jpg" alt="">-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name:"Open-sharing",
    props: ["data"]
}
</script>

<style scoped>
.Open-sharing{
    width: 100%;
    height: 1.2rem;
}
.Open-sharing img{
    width: 100%;
    height: 100%;
}
</style>