<template>
    <div>
        <Lheader></Lheader>
        <Lnav></Lnav>
        <Lcontent></Lcontent>
    </div>
</template>

<script>
    import Lheader from "../components/login/Lheader";
    import nav from "../components/login/nav";
    import content from "../components/login/content";
    export default {
        name: "login",
        components: {
            Lheader,
            "Lnav":nav,
            "Lcontent":content
        }
    }
</script>

<style scoped>

</style>