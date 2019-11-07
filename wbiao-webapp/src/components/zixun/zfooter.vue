<template>
    <div id="footer">
        <div class="footer-nav">
            <div class="footer-icon1"></div>
            <span style="color: #d1af67;">首页</span>
        </div>
        <div class="footer-nav">
            <div class="footer-icon2"></div>
            <span>资讯</span>
        </div>
        <div class="footer-nav">
            <div class="footer-icon3"></div>
            <span>选表</span>
        </div>
        <div class="footer-nav">
            <div class="footer-icon4"></div>
            <span>购物车</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "zfooter"
    }
</script>

<style scoped>
    #footer{
        width: 100%;
        height: 0.5rem;
        background: #262626;
        position: fixed;
        bottom: 0;
        display: flex;
        color: #999;
    }
    .footer-nav{
        width: 25%;
        height: 100%;
        font-size: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .footer-icon1{
        width: 0.26rem;
        height: 0.26rem;
        background-image: url(../../../../public/img2/sprite.png);
        background-position: -72px -27px;
        background-repeat: no-repeat;
    }
    .footer-icon2{
        width: 0.26rem;
        height: 0.27rem;
        background-image: url(../../../../public/img2/sprite.png);
        background-position: -72px 0;
        background-repeat: no-repeat;
    }
    .footer-icon3{
        width: 0.26rem;
        height: 0.26rem;
        background-image: url(../../../../public/img2/sprite.png);
        background-position: 0 -46px;
        background-repeat: no-repeat;
    }
    .footer-icon4 {
        width: 0.26rem;
        height: 0.26rem;
        background-image: url(../../../../public/img2/sprite.png);
        background-position: -54px -73px;
        background-repeat: no-repeat;
    }
    .footer-nav span {
        font-size: 0.11rem;
    }
</style>