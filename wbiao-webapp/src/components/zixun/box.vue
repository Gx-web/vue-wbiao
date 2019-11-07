<template>
    <div id="box">
        <zheader></zheader>
        <zbanner></zbanner>
        <modular></modular>
        <fashion></fashion>
    </div>
</template>

<script>
    import zheader from "./box/zheader";
    import zbanner from "./box/zbanner";
    import modular from "./box/modular";
    import fashion from "./box/fashion";
    export default {
        name: "box",
        components: {
            zheader,
            zbanner,
            modular,
            fashion
        }
    }
</script>

<style scoped>
    #box{
        width: 100%;
    }
</style>