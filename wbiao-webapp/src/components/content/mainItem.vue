<template>
    <div>
            <div class="Preferred-brand-title">
                <p>{{data.title}}</p>
                <p class="title-line"></p>
            </div>
            <channelNine :data="data"></channelNine>
            <channelTen :data="data"></channelTen>
    </div>
</template>

<script>
    import channelNine from "./channel-nine"
    import channelTen from "./channel-ten"
    export default {
        name: "menuItem",
        components: {
            channelNine,
            channelTen
        },
        props: ["data"]
    }
</script>

<style scoped>
    .Preferred-brand-title{
        width: 100%;
        height: 0.3rem;
        background: white;
        margin: 16px 0 14px 0;
    }
    .Preferred-brand-title p{
        font-size: 0.16rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 12px;
    }
    .Preferred-brand-title .title-line{
        width: 24px;
        height: 2px;
        background: #ccaa7a;
        margin: 0 auto;
    }
</style>