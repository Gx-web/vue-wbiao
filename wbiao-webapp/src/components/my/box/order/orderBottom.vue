<template>
    <div class="list-line">
        <a href="#">
            <i class="icon-a-m-pay"></i>
            待付款
        </a>
        <a href="#">
            <i class="icon-a-m-ship"></i>
            代发货
        </a>
        <a href="#">
            <i class="icon-a-m-receipt"></i>
            待收货
        </a>
        <a href="#">
            <i class="icon-a-m-evaluate"></i>
            待评价
        </a>
    </div>
</template>

<script>
    export default {
        name: "orderBottom"
    }
</script>

<style scoped>
    .list-line{
        width: 100%;
        height: 0.8rem;
        display: flex;
    }
    .list-line a{
        display: block;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 0.12rem;
        color: #333;
    }
    .list-line .icon-a-m-pay{
        display: block;
        background-image: url(../../../../../public/img3/a.png);
        background-position: -1.75rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .list-line .icon-a-m-ship{
        display: block;
        background-image: url(../../../../../public/img3/a.png);
        background-position: -3rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .list-line .icon-a-m-receipt{
        display: block;
        background-image: url(../../../../../public/img3/a.png);
        background-position: -2.5rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
    .list-line .icon-a-m-evaluate{
        display: block;
        background-image: url(../../../../../public/img3/a.png);
        background-position: -0.25rem -3.925rem;
        background-size: 4.43rem;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0.2rem auto 0.06rem;
    }
</style>