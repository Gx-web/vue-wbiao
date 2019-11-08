<template>
    <div class="menu-left">
        <ul>
            <li><a href="#" class="tt">推荐</a></li>
            <li><a href="#">顶级品牌</a></li>
            <li><a href="#">奢华品牌</a></li>
            <li><a href="#">高级品牌</a></li>
            <li><a href="#">轻奢时尚</a></li>
            <li><a href="#">年轻潮流</a></li>
            <li><a href="#">国产智能</a></li>
            <li><a href="#">表带</a></li>
            <li><a href="#">维修保养</a></li>
            <li><a href="#">二手商城</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menuLeft"
    }
</script>

<style scoped>
    .menu-left{
        width: 0.84rem;
        border-right: 0.01rem solid rgb(197, 196, 196);
    }
    .menu-left li{
        display: flex;
        height: 0.5rem;
        width: 100%;
        /* background: #515151; */
        align-items: center;
        justify-content: center;
        border-bottom: 0.01rem solid rgb(218, 214, 214);
    }
    .menu-left li .tt{
        display: block;
        height: 0.21rem;
        width: 0.61rem;
        background: #515151;
        border-radius: 1rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.21rem;
        color: white;
    }
    .menu-left li a{
        display: block;
        height: 0.21rem;
        width: 0.61rem;
        /* background: #515151; */
        border-radius: 1rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.21rem;
        color: gray;
    }
</style>