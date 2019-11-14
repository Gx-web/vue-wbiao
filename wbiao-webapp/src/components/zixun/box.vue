<template>
    <div id="box">
        <zheader :data="data"></zheader>
        <zbanner :data="data"></zbanner>
        <modular :data="data"></modular>
        <fashion :data="data"></fashion>
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
        },
        props: ["data"]
    }
</script>

<style scoped>
    #box{
        width: 100%;
    }
</style>