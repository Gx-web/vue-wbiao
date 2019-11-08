<template>
    <div class="main">
        <registerTitle></registerTitle>
        <userLogins></userLogins>
    </div>
</template>

<script>
    import registerTitle from "./main/registerTitle";
    import userLogins from "./main/userLogins";
    export default {
        name: "rmain",
        components: {
            registerTitle,
            userLogins
        }
    }
</script>

<style scoped>
    .main{
        padding: 0 7.5%;
    }
</style>