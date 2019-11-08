<template>
    <div class="header-nav">
        <div class="navbar">
            <div class="navbar-itemL">
                精准选表
            </div>
            <div class="navbar-itemR">
                精准选表
                <div class="new">
                    <span>新功能</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerNav"
    }
</script>

<style scoped>
    .header-nav{
        padding-top: 0.06rem;
        width: 100%;
        height: 0.32rem;
    }
    .navbar{
        width: 1.52rem;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .navbar-itemL{
        width: 50%;
        height: 100%;
        background: #dfdfdf;
        background-image: url(../../../../public/img4/catagory__item__0.png);
        background-size: 100% 100%;
        color: white;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.32rem;
    }
    .navbar-itemR{
        width: 50%;
        height: 100%;
        background: #dfdfdf;
        color: #999;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.32rem;
    }
    .navbar-itemR .new{
        width: 0.4rem;
        height: 0.18rem;
        position: absolute;
        top: 0.02rem;
        right: 0.75rem;
        background-image: url(../../../../public/img4/catagory__tag.png);
        background-size: 100% 100%;
    }
    .navbar-itemR .new span{
        color: white;
        font-size: 0.08rem;
        position: relative;
        top: -0.07rem;
    }
</style>