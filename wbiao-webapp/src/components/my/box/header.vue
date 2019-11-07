<template>
    <div class="my-header">
        <headerTop></headerTop>
        <headerBottom></headerBottom>
    </div>
</template>

<script>
    import headerTop from "./myheader/headerTop";
    import headerBottom from "./myheader/headerBottom";
    export default {
        name: "myheader",
        components: {
            headerTop,
            headerBottom
        }
    }
</script>

<style scoped>
    .my-header{
        width: 100%;
        height: 2.06rem;
        background: url(../../../.././public/img3/member-bg.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
</style>