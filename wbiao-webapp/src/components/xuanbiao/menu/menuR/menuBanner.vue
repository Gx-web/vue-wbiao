<template>
    <div class="menu-banner" v-if="data">
        <img :src=data.products.img alt="">
    </div>
</template>

<script>
    export default {
        name: "menuBanner",
        props: ["data"]
    }
</script>

<style scoped>
    .menu-banner{
        width: 100%;
        height: 0.98rem;
        margin: 0.1rem 0;
        padding: 0 0.15rem;
        box-sizing: border-box;
    }
    .menu-banner img{
        width: 100%;
    }
</style>