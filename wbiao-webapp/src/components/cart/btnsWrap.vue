<template>
    <div class="btns-wrap">
        <div class="btns-c">
            <div class="btns-left">
                <router-link to="/">
                    逛逛首页
                </router-link>
            </div>
            <div class="btns-right">
                <a href="#">查看收藏</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "btnsWrap"
    }
</script>

<style scoped>
    .btns-wrap{
        width: 100%;
        height: 0.34rem;
        margin-top: 0.6rem;
    }
    .btns-c{
        display: flex;
        width: 2.22rem;
        margin: 0 auto;
    }
    .btns-left{
        width: 1.02rem;
        height: 100%;
        background: #d90000;
        border-radius: 0.2rem;
        font-size: 0;
        text-align: center;
        line-height: 0.34rem;
        margin-right: 0.18rem;
    }
    .btns-left a{
        font-size: 0.12rem;
        color: white;
    }
    .btns-right{
        width: 1.02rem;
        height: 100%;
        border-radius: 0.2rem;
        font-size: 0;
        text-align: center;
        line-height: 0.34rem;
        border: 0.01rem solid #d90000;
    }
    .btns-right a{
        font-size: 0.12rem;
        color: #d90000;
    }
</style>