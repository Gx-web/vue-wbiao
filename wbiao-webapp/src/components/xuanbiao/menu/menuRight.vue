<template>
    <div class="menu-right">
        <menuBanner :data="data"></menuBanner>
        <menuCon :data="data"></menuCon>
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
        },
        props: ["data"]
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