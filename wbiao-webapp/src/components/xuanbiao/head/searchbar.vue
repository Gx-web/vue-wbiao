<template>
    <div class="searchbar">
        <div class="searchbar-c">
            <a href="#"></a>
            <span>通过品牌、系列、型号搜索您喜爱的表款</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchbar"
    }
</script>

<style scoped>
    .searchbar{
        width: 100%;
        margin-top: 0.06rem;
        height: 0.4rem;
        border-bottom: 0.01rem solid rgb(226, 226, 226);
    }
    .searchbar-c{
        width: 90%;
        height: 70%;
        background: #f2f2f2;
        margin: 0.09rem auto 0;
        border-radius: 1rem;
        font-size: 0;
        display: flex;
        align-items: center;
    }
    .searchbar-c a{
        display: block;
        width: 0.2rem;
        height: 0.2rem;
        margin: 0 0.1rem;
        background-image: url(../../../../public/img4/fangdajing.png);
        background-size: 100% 100%;
    }
    .searchbar-c span{
        font-size: 0.1rem;
        color: grey;
    }
</style>