<template>
    <div class="menu">
        <menuLeft></menuLeft>
        <menuRight></menuRight>
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
        }
    }
</script>

<style scoped>
    .menu{
        width: 100%;
        display: flex;
        overflow: hidden;
    }
</style>