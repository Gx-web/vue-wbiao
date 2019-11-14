<template>
    <menuConItem :data="data"></menuConItem>
</template>

<script>
    import menuConItem from "./menuCon/menuConItem";
    export default {
        name: "menuCon",
        components: {
            menuConItem
        },
        props: ["data"]
    }
</script>

<style scoped>

</style>