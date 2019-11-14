<template>
    <div class="banner">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in data.swiperList" :key="index">
                <img :src=slide alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"banner",
    props:["data"],
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
.banner{
    width: 100%;
    height: 2.5rem;
    /* background: chartreuse; */
}
.banner img{
    width: 100%;
    height: 100%;
}
</style>