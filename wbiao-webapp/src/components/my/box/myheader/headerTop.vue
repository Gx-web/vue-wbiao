<template>
    <div class="my-header-top">
        <div class="my-header-icon">
            <a href="#"></a>
        </div>
        <a href="#" class="pic">
            <span class="icon-a-m-head01"></span>
            <div class="head-login">
                <p class="p1">登录/注册</p>
                <p class="p2">登录享优惠</p>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "headerTop"
    }
</script>

<style scoped>
    .my-header-top{
        width: 100%;
        height: 1.54rem;
        /* background: olivedrab; */
        font-size: 0;
    }
    .my-header-icon{
        width: 100%;
        height: 0.44rem;
        /* background: wheat; */
        font-size: 0;
        display: flex;
        align-items: center;
    }
    .my-header-icon a{
        display: inline-block;
        width: 0.32rem;
        height: 0.32rem;
        background: white;
        position: absolute;
        right: 0.1rem;
        background: url(../../../../.././public/img3/a.png);
        background-position: -3.81rem 0;
        background-size: 4.43rem;
    }
    .my-header-top .pic{
        display: inline-block;
        width: 1.73rem;
        height: 0.65rem;
        /* background: violet; */
        font-size: 0;
    }
    .icon-a-m-head01{
        display: inline-block;
        margin: 0 13px 0 24px;
        width: 0.64rem;
        height: 0.64rem;
        background: url(../../../../.././public/img3/a.png);
        background-position: -0.69rem -1.78rem;
        background-size: 4.43rem;
    }
    .head-login{
        display: inline-block;
        color: #fff;
        font-size: 0.12rem;
        vertical-align: top;
        margin-top: 0.13rem;
    }
    .head-login .p1{
        font-size: 0.16rem;
        margin-bottom: 0.05rem;
    }
</style>