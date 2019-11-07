<template>
    <div class="service">
        <div class="list-line">
            <a href="#">
                <i class="icon-a-m-presale"></i>
                我的预售
            </a>
            <a href="#">
                <i class="icon-d-gift"></i>
                我的礼品单
            </a>
            <a href="#">
                <i class="icon-a-m-receipt"></i>
                售后服务
            </a>
            <a href="#">
                <i class="icon-a-m-integral"></i>
                我的青苗
            </a>
        </div>
        <div class="list-line">
            <a href="#">
                <i class="icon-a-m-invoice"></i>
                发票管理
            </a>
            <a href="#">
                <i class="icon-a-m-coupon"></i>
                优惠券
            </a>
            <a href="#">
                <i class="icon-a-m-wallet"></i>
                余额
            </a>
            <a href="#">
                <i class="icon-a-m-footprint"></i>
                足迹
            </a>
        </div>
        <div class="list-line">
            <a href="#">
                <i class="icon-a-m-comment"></i>
                我的评论
            </a>
            <a href="#">
                <i class="icon-d-recommend"></i>
                推荐
            </a>
            <a href="#">
                <i class="icon-d-repair"></i>
                手表管家
            </a>
            <a href="#">
                <i class="icon-d-after-repair"></i>
                维修订单
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "listLine"
    }
</script>

<style scoped>
    .service .list-line{
        width: 100%;
        height: 0.8rem;
        display: flex;
    }
    .service .list-line a{
        display: block;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 0.12rem;
        color: #333;
    }
    .service .list-line .icon-a-m-presale{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -2.25rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-d-gift{
        display: block;
        background-image: url(../../../../../../public/img3/d.png);
        background-position: -1.18rem -2.795rem;
        background-size: 3.345rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-receipt{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -4.18rem -3.285rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-integral{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -1.25rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-invoice{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -1.5rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-coupon{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -3.25rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-wallet{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -2rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-footprint{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -0.5rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-a-m-comment{
        display: block;
        background-image: url(../../../../../../public/img3/a.png);
        background-position: -3.04rem -2.47rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-d-recommend{
        display: block;
        background-image: url(../../../../../../public/img3/d.png);
        background-position: -1.6rem -0.765rem;
        background-size: 3.345rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-d-repair{
        display: block;
        background-image: url(../../../../../../public/img3/d.png);
        background-position: -0.93rem -2.795rem;
        background-size: 3.345rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .service .list-line .icon-d-after-repair{
        display: block;
        background-image: url(../../../../../../public/img3/d.png);
        background-position: -2.25rem -1.895rem;
        background-size: 3.345rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
</style>