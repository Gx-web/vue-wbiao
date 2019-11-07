<template>
    <p class="floor-top">
        <span>我的服务</span>
        <span class="fr">联系万表</span>
        <span class="fr-pic">
            <img src="../../../../../public/img3/contact.png" alt="">
        </span>
    </p>
</template>

<script>
    export default {
        name: "serviceTop"
    }
</script>

<style scoped>
    .floor-top{
        display: block;
        height: 0.44rem;
        line-height: 0.44rem;
        padding-right: 0.12rem;
        margin-left: 0.12rem;
        font-size: 0.14rem;
        color: #333;
        border-bottom: 0.01rem solid #f1f1f1;
        box-sizing: border-box;
    }
    .floor-top .fr{
        float: right!important;
    }
    .floor-top .fr-pic{
        float: right!important;
        width: 0.14rem;
        height: 0.14rem;
        margin-top: 0.08rem;
        margin-right: 0.05rem;
        font-size: 0;
    }
    .floor-top .fr-pic img{
        width: 100%;height: 100%;
    }
</style>