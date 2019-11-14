<template>
    <div class="menu">
        <menuLeft :data="data"></menuLeft>
        <menuRight :data="data"></menuRight>
    </div>
</template>

<script>
    import menuLeft from "./menu/menuLeft";
    import menuRight from "./menu/menuRight";
    export default {
        name: "xmenu",
        components: {
            menuLeft,
            menuRight
        },
        props: ["data"]
    }
</script>

<style scoped>
    .menu{
        width: 100%;
        display: flex;
        overflow: hidden;
    }
</style>