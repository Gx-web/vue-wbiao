<template>
    <div class="profile">
        <p class="no-login">
            登录后将显示您的详细资料~
            <a href="#">马上登录></a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "profile"
    }
</script>

<style scoped>
    .profile{
        width: 91.47%;
        margin: 0 auto;
        padding: 0.18rem 0 0.1rem;
    }
    .profile .no-login{
        background: #cc3d3d;
        color: #fff;
        display: block;
        height: 0.28rem;
        line-height: 0.28rem;
        font-size: 0.12rem;
        text-align: center;
    }
    .profile .no-login a{
        color: #fff;
        text-decoration: underline;
        padding-bottom: 0.02rem;
    }
</style>