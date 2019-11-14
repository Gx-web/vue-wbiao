<template>
        <div class="Preferred-brand">
            <div class="Preferred-brand-title">
                <p>优选品牌</p>
                <p class="title-line"></p>
            </div>
            <div class="Preferred-brand-banner">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(slide, index) in data.pinPai" :key="index">
                        <img :src=slide alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
</template>

<script>
export default {
    name:"Preferred",
    props: ["data"],
    data() {
        return {
            swiperOption: {
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperSlides: [1, 2, 3, 4, 5]
        }
    }
}
</script>

<style scoped>
.Preferred-brand{
    width: 100%;
    height: 2.94rem;
    /* background: yellow; */
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
.Preferred-brand-banner{
    width: 100%;
    height: 2.5rem;
    background: red;
}
.Preferred-brand-banner img{
    width: 100%;
    height: 100%;
}
</style>