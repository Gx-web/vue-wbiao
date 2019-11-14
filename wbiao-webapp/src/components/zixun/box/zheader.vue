<template>
    <div>
        <headerTop></headerTop>
        <znav :data="data"></znav>
    </div>
</template>

<script>
    import headerTop from './head/head-top'
    import znav from './head/nav'
    export default {
        name: "zheader",
        components: {
            headerTop,
            znav
        },
        props: ["data"],
    }
</script>

<style scoped>

</style>