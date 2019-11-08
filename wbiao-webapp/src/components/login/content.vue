<template>
    <div class="content">
        <div class="user_logins">
            <div class="box">
                <p class="phone">
                    <input type="text" placeholder="手机号">
                </p>
                <p class="identify">
                    <input type="text" placeholder="图形验证码">
                    <img src="../../../public/img3/captcha2 (1).png" alt="">
                </p>
                <p class="note">
                    <input type="text" placeholder="短信验证码">
                    <a href="#">获取验证码</a>
                </p>
            </div>
            <a href="#" class="mobile_login">登&nbsp;&nbsp;录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Lcontent"
    }
</script>

<style scoped>
    .content{
        padding: 0 7.5%;
    }
    .user_logins .box{
        margin-top: 0.31rem;
        background: #fff;
    }
    .user_logins .box p{
        height: 0.46rem;
        border-bottom: 0.01rem solid #ededed;
        position: relative;
        margin-bottom: 0.25rem;
    }
    .user_logins .box p input{
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
    .mobile_login{
        width: 100%;
        margin: 0.45rem auto 0;
        line-height: 0.44rem;
        background: #aaa;
        font-size: 0.16rem;
        text-align: center;
        display: block;
        height: 0.44rem;
        color: #ccaa7a;
        background-image: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
    }
</style>