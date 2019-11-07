<template>
    <div class="my-header-bottom">
        <a href="#">
            <i class="icon-a-m-write"></i>
            <span>个人资料</span>
        </a>
        <a href="#">
            <i class="icon-a-m-place"></i>
            <span>收货地址</span>
        </a>
        <a href="#">
            <i class="icon-a-m-collection"></i>
            <span>我的收藏</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "headerBottom"
    }
</script>

<style scoped>
    .my-header-bottom{
        width: 100%;
        height: 0.52rem;
        /* background: orangered; */
        display: flex;
        background: rgba(0,0,0,.4)
    }
    .my-header-bottom a{
        display: flex;
        width: 33.33%;
        height: 100%;
        color: #fff;
        font-size: 0.12rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-right: 0.01rem solid rgba(238, 236, 236, 0.253);
    }
    .my-header-bottom .icon-a-m-write{
        display: block;
        background-image: url(../../../../.././public/img3/a.png);
        background-position: -2.02rem -3.68rem;
        background-size: 4.43rem;
        width: 0.16rem;
        height: 0.16rem;
    }
    .my-header-bottom .icon-a-m-place{
        display: block;
        background-image: url(../../../../.././public/img3/a.png);
        background-position: -0.42rem -4.175rem;
        background-size: 4.43rem;
        width: 0.16rem;
        height: 0.16rem;
    }
    .my-header-bottom .icon-a-m-collection{
        display: block;
        background-image: url(../../../../.././public/img3/a.png);
        background-position: -3.71rem -3.925rem;
        background-size: 4.43rem;
        width: 0.16rem;
        height: 0.16rem;
    }
</style>