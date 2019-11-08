<template>
    <div class="menu-right">
        <menuBanner></menuBanner>
        <menuCon></menuCon>
    </div>
</template>

<script>
    import menuBanner from "./menuR/menuBanner";
    import menuCon from "./menuR/menuCon";
    export default {
        name: "menuRight",
        components: {
            menuBanner,
            menuCon
        }
    }
</script>

<style scoped>
    .menu-right{
        width: 2.91rem;
        height: 5.3rem;
        /* background: hotpink; */
        overflow-y: scroll;
    }
</style>