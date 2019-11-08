<template>
    <p class="register_agreement">
        点击注册意味着阁下同意
        <a href="#">《万表用户协议》</a>
    </p>
</template>

<script>
    export default {
        name: "rAgreement"
    }
</script>

<style scoped>
    .register_agreement{
        display: block;
        font-size: 0.14rem;
        margin-top: 0.22rem;
        text-align: center;
        color: #ccc;
    }
    .register_agreement a{
        color: #ccaa7a;
    }
</style>