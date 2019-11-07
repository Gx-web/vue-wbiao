<template>
    <div class="service">
        <serviceTop></serviceTop>
        <serviceBottom></serviceBottom>
    </div>
</template>

<script>
    import serviceTop from "./service/serviceTop";
    import serviceBottom from "./service/serviceBottom";
    export default {
        name: "service",
        components: {
            serviceTop,
            serviceBottom
        }
    }
</script>

<style scoped>
    .service{
        margin-bottom: 88px;
        background: #fff;
    }
</style>