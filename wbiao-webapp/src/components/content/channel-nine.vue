<template>
        <div class="channel-nine">
            <img :src=data.pic alt="">
        </div>
</template>

<script>
export default {
    name:"channel-nine",
    props: ["data"]
}
</script>

<style scoped>
.channel-nine{
    width: 100%;
    height: 2.5rem;
}
.channel-nine img{
    width: 100%;
    height: 100%;
}
</style>