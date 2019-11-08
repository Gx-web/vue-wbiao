<template>
    <div class="header">
        <router-link to="/login">
            <a href="#" class="back"></a>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "rheader"
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 0.44rem;
    }
    .header a{
        display: block;
        width: 0.44rem;
        height: 0.44rem;
        background-image: url(../../../public/img3/d.png);
        background-position: 0 -1.895rem;
        background-size: 3.345rem
    }
</style>