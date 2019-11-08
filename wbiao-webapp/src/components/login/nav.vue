<template>
    <div class="nav">
        <p class="psd-login">手机登录</p>
        <p class="user-login">账号登录</p>
    </div>
</template>

<script>
    export default {
        name: "Lnav"
    }
</script>

<style scoped>
    .nav{
        margin: 0.8rem 0 0.5rem;
        display: flex;
    }
    .nav p{
        overflow: hidden;
        display: inline-block;
        width: 50%;
        font-size: 0.24rem;
        color: #ccc;
        box-sizing: border-box;
    }
    .nav .psd-login{
        text-align: right;
        padding-right: 0.3rem;
        letter-spacing: 0.02rem;
        color: #666;
        font-weight: 700;
    }
    .nav .user-login{
        position: relative;
        text-align: left;
        padding-left: 0.3rem;
        letter-spacing: 0.02rem;
    }
    .user-login::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0.07rem;
        width: 0.01rem;
        height: 0.2rem;
        background: #d8d8d8;
    }
</style>