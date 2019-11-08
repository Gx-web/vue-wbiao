<template>
    <div class="header">
        <headerNav></headerNav>
        <searchbar></searchbar>
    </div>
</template>

<script>
    import headerNav from "./head/headerNav";
    import searchbar from "./head/searchbar";
    export default {
        name: "xheader",
        components: {
            headerNav,
            searchbar
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
    }
</style>