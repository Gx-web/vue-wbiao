<template>
    <div class="cart-pic">
        <span></span>
        <p>购物车是空的</p>
    </div>
</template>

<script>
    export default {
        name: "cartPic"
    }
</script>

<style scoped>
    .cart-pic{
        width: 100%;
        height: 1.1rem;
        padding-top: 0.43rem;
    }
    .cart-pic span{
        display: block;
        width: 0.82rem;
        height: 0.84rem;
        margin: 0 auto;
        background-image: url(../../../public/img3/a.png);
        background-position: -0.89rem -0.89rem;
        background-size: 4.43rem;
    }
    .cart-pic p{
        font-size: 0.14rem;
        padding-top: 0.16rem;
        text-align: center;
        color: #666;
    }
</style>