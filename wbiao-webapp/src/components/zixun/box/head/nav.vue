<template>
    <div class="nav">
        <div class="nav-content">
            <div class="nav-c-t" style="color: #d1af67;">推荐</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">购表指南</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">手表测评</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">品牌动态</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">时尚穿搭</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">对话人物</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">大讲堂</div>
        </div>
        <div class="nav-content">
            <div class="nav-c-t">表友论</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "znav"
    }
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 0.43rem;
        /* background: pink; */
        display: flex;
        align-items: center;
        overflow-x: scroll;
    }
    /* 取消滚动条 */
    .nav::-webkit-scrollbar { width: 0 !important;display: none;}
    .nav-content{
        width: 5.77rem;
        height: 0.168rem;
        /* background: chartreuse; */
    }
    .nav-c-t{
        font-size: 0.13rem;
        /* background: chocolate; */
        width: 0.72rem;
        height: 100%;
        text-align: center;
        font-weight: bold;
    }
</style>