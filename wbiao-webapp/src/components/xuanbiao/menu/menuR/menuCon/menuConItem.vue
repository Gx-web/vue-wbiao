<template>
    <div>
        <div class="menu-con-item">
            <div class="menu-title">
                <p>猜你喜欢</p>
            </div>
            <div class="menu-list" v-if="data">
                <div class="list-item" v-for="(item,i) in data.products.like" :key="i">
                    <img :src=item.img alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
        <div class="menu-con-item">
            <div class="menu-title">
                <p>国际馆</p>
            </div>
            <div class="menu-list" v-if="data">
                <div class="list-item" v-for="(item,i) in data.products.International" :key="i">
                    <img :src=item.img alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
        <div class="menu-con-item">
            <div class="menu-title">
                <p>热门品牌</p>
            </div>
            <div class="menu-list" v-if="data">
                <div class="list-item" v-for="(item,i) in data.products.HotBrands" :key="i">
                    <img :src=item.img alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menuConItem",
        props: ["data"]
    }
</script>

<style scoped>
    .menu-title{
        width: 100%;
        height: 0.36rem;
    }
    .menu-title p{
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.3rem;
        color: #999;
    }
    .menu-list{
        display: flex;
        flex-wrap: wrap;
    }
    .list-item{
        width: 33.3%;
        height: 0.89rem;
        background: white;
        font-size: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 0.2rem;
    }
    .list-item img{
        width: 60%;
    }
    .list-item p{
        font-size: 0.12rem;
        color: #666;
    }
</style>