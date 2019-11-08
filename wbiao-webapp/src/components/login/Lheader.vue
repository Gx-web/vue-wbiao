<template>
    <div class="header">
        <router-link to="main/my">
            <a href="#" class="back"></a>
        </router-link>
        <router-link to="/register">
            <a href="#" class="register">注册</a>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Lheader"
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 0.44rem;
        display: flex;
        justify-content: space-between;
    }
    .header a{
        display: block;
        width: 0.44rem;
        height: 0.44rem;
    }
    .back{
        background-image: url(../../../public/img3/d.png);
        background-position: 0 -1.895rem;
        background-size: 3.345rem
    }
    .register{
        background: white;
        font-size: 0.14rem;
        color: #999;
        text-align: center;
        line-height: 0.44rem;
    }
</style>