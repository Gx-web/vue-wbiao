<template>
    <div>
        <userBox></userBox>
        <mobileLogin></mobileLogin>
        <rAgreement></rAgreement>
    </div>
</template>

<script>
    import userBox from "./userLogins/userBox";
    import mobileLogin from "./userLogins/mobileLogin";
    import rAgreement from "./userLogins/rAgreement";
    export default {
        name: "userLogins",
        components: {
            userBox,
            mobileLogin,
            rAgreement
        }
    }
</script>

<style scoped>

</style>