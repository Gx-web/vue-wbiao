<template>
    <div>
        <headerTop></headerTop>
        <znav></znav>
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
        }
    }
</script>

<style scoped>

</style>