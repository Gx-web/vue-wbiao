<template>
<div id="mian">
    <banner></banner>
    <my-menu></my-menu>
    <div class="Seckill">
        <img src="../.././public/img1/27243d39ab3148e4ba82f3b76080080c.jpg" alt="">
    </div>
    <Preferred></Preferred>
    <channelEight></channelEight>
    <div class="Preferred-brand-title">
        <p>本月爆款</p>
        <p class="title-line"></p>
    </div>
    <channelThree></channelThree>
    <div class="Preferred-brand-title">
        <p>本月爆款</p>
        <p class="title-line"></p>
    </div>
    <channelNine></channelNine>
    <channelTen></channelTen>
    <div class="Preferred-brand-title">
        <p>本月爆款</p>
        <p class="title-line"></p>
    </div>
    <OpenSharing></OpenSharing>
    <product></product>
</div>
  
</template>

<script>
import banner from "../components/content/banner"
import menu from "../components/content/menu"
import Preferred from "../components/content/Preferred"
import channelEight from "../components/content/channel-eight"
import channelThree from "../components/content/channel-three"
import channelNine from "../components/content/channel-nine"
import channelTen from "../components/content/channel-ten"
import OpenSharing from "../components/content/Open-sharing"
import product from "../components/content/product"
export default {
    name:"mmain",
    components:{
        banner,
        "my-menu":menu,
        Preferred,
        channelEight,
        channelThree,
        channelNine,
        channelTen,
        OpenSharing,
        product
    }
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