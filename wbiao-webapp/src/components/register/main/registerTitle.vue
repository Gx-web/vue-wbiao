<template>
    <div class="register_title">
        <h2>注册万表会员</h2>
        <p>有账号？<a href="#">去登录</a></p>
    </div>
</template>

<script>
    export default {
        name: "registerTitle"
    }
</script>

<style scoped>
    .register_title{
        text-align: center;
    }
    .register_title h2{
        margin: 0.25rem 0 0;
        font-size: 0.24rem;
        color: #666;
        font-weight: 700;
    }
    .register_title p{
        font-size: 0.14rem;
        margin-top: 0.22rem;
        margin-bottom: 0.2rem;
        color: #ccc;
        height: 44px;
    }
    .register_title p a {
        color: #999;
        text-decoration: underline;
    }
</style>