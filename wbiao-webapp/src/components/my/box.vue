<template>
    <div id="box">
        <my-header></my-header>
        <profile></profile>
        <order></order>
        <service></service>
    </div>
</template>

<script>
    import header from "./box/header";
    import profile from "./box/profile";
    import order from "./box/order";
    import service from "./box/service";
    export default {
        name: "box",
        components: {
            "my-header": header,
            profile,order,service
        }
    }
</script>

<style scoped>
    #box{
        width: 100%;
        background-color: #f1f1f1;
    }
</style>