<template>
    <div class="login-tips">
        登录后购物车的商品将保存到您账号中，
        <router-link to="/login">
            <a href="#">现在登录</a>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "loginTips"
    }
</script>

<style scoped>
    .login-tips{
        width: 100%;
        height: 0.28rem;
        background: #fff9ce;
        font-size: 0.12rem;
        color: #666;
        text-align: center;
        line-height: 0.28rem;
    }
    .login-tips a{
        color: #5781b4;
    }
</style>