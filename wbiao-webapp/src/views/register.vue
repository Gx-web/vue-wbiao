<template>
    <div>
        <rheader></rheader>
        <rmain></rmain>
    </div>
</template>

<script>
    import rheader from "../components/register/rheader";
    import main from "../components/register/main";
    export default {
        name: "register",
        components: {
            rheader,
            "rmain":main
        }
    }
</script>

<style scoped>

</style>