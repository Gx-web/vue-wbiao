<template>
<div id="mian">
    <banner :data="data"></banner>
    <my-menu :data="data"></my-menu>
    <div class="Seckill">
        <img :src=data.adv alt="">
    </div>
    <Preferred :data="data"></Preferred>
    <channelEight :data="data"></channelEight>
    <div class="Preferred-brand-title">
        <p>本月爆款</p>
        <p class="title-line"></p>
    </div>
    <channelThree :data="data"></channelThree>
<!--    <div class="Preferred-brand-title">-->
<!--        <p>男士</p>-->
<!--        <p class="title-line"></p>-->
<!--    </div>-->
<!--    <channelNine></channelNine>-->
<!--    <channelTen></channelTen>-->
    <mainItem v-for="(item,i) in data.type" :key="i" :data="item"></mainItem>
    <div class="Preferred-brand-title">
        <p>开放共享</p>
        <p class="title-line"></p>
    </div>
    <OpenSharing :data="data"></OpenSharing>
    <product :data="data"></product>
</div>
  
</template>

<script>
import banner from "../components/content/banner"
import menu from "../components/content/menu"
import Preferred from "../components/content/Preferred"
import channelEight from "../components/content/channel-eight"
import channelThree from "../components/content/channel-three"
import OpenSharing from "../components/content/Open-sharing"
import product from "../components/content/product"
import mainItem from "./content/mainItem";
export default {
    name:"mmain",
    components:{
        banner,
        "my-menu":menu,
        Preferred,
        channelEight,
        channelThree,
        mainItem,
        OpenSharing,
        product
    },
    props:["data"]
}
</script>

<style scoped>
#main{
    width: 100%;
}
.Seckill{
    width: 100%;
    height: 1.36rem;
    /* background: yellow; */
}
.Seckill img{
    width: 100%;
    height: 100%;
}
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