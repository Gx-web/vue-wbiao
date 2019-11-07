<template>
    <a href="#" class="order-top">
        我的订单
        <i></i>
    </a>
</template>

<script>
    export default {
        name: "orderTop"
    }
</script>

<style scoped>
    .order-top{
        display: block;
        /* width: 100%; */
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.14rem;
        color: #333;
        border-bottom: 0.01rem solid #f1f1f1;
        padding-right: 0.12rem;
        margin-left: 0.12rem;
        box-sizing: border-box;
    }
    .order-top i{
        display: block;
        background-image: url(../../../../../public/img3/a.png);
        background-position: -244px -368px;
        background-size: 4.43rem;
        width: 0.16rem;
        height: 0.16rem;
        float: right!important;
        margin-top: 0.14rem;
    }
</style>