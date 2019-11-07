<template>
    <div class="order">
        <orderTop></orderTop>
        <orderBottom></orderBottom>
    </div>
</template>

<script>
    import orderTop from "./order/orderTop";
    import orderBottom from "./order/orderBottom";
    export default {
        name: "order",
        components: {
            orderTop,
            orderBottom
        }
    }
</script>

<style scoped>
    .order{
        width: 100%;
        height: 1.24rem;
        margin-bottom: 8px;
        background: #fff;
    }
</style>