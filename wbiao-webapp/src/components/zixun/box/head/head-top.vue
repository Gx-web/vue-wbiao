<template>
    <div class="head-title">
        <a href="#" class="wbiao">
            <p class="icon-a-return"></p>
            <p class="text">万表</p>
        </a>
        <div class="logo">
            <img src="../../../../../public/img2/index-logo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "head-top"
    }
</script>

<style scoped>
    .head-title{
        width: 100%;
        height: 0.47rem;
        background: #262626;
        border-bottom: 0.02rem solid #d1af67;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo{
        width: 0.75rem;
        height: 0.15rem;
        /* background: plum; */
        font-size: 0;
    }
    .logo img{
        width: 100%;
    }
    .head-title .wbiao{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
    }
    .icon-a-return{
        background: url(../../../../../public/img2/sprite.png) no-repeat 0 0;
        background-size: 98px 98px;
        width: 0.44rem;
        height: 0.44rem;
    }
    .text{
        position: absolute;
        left: 0.34rem;
        top: 0;
        width: 0.5rem;
        font-size: 0.14rem;
        color: #fff;
        line-height: 0.44rem;
    }
</style>