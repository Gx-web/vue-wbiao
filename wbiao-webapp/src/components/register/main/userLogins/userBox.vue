<template>
    <div class="box">
        <p class="phone">
            <input type="text" placeholder="手机号">
        </p>
        <p class="identify">
            <input type="text" placeholder="图形验证码">
            <img src="../../../../../public/img3/captcha2.png" alt="">
        </p>
        <p class="note">
            <input type="text" placeholder="短信验证码">
            <a href="#">获取验证码</a>
        </p>
        <p class="phone">
            <input type="password" placeholder="设置密码">
        </p>
    </div>
</template>

<script>
    export default {
        name: "userBox"
    }
</script>

<style scoped>
    .box{
        margin-top: 0.31rem;
        background: #fff;
    }
    .box p{
        height: 0.46rem;
        border-bottom: 0.01rem solid #ededed;
        position: relative;
        margin-bottom: 0.25rem;
    }
    .box p input{
        font-size: 14px;
        height: 44px;
        border: none;
        outline: 0;
        float: left;
        width: 82.4%;
    }
    input::-webkit-input-placeholder{
        color: #ccc;
    }
    .identify{
        display: flex;
    }
    .note{
        font-size: 0;
        display: flex;
    }
    .note a{
        display: block;
        width: 0.9rem;
        height: 0.4rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.4rem;
        color: #999;
    }
</style>