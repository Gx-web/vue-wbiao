<template>
    <div class="banner">
<!--        <img src="../../../../public/img2/1566973584410775513.jpg" alt="">-->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in data.banner" :key="index">
                <img :src=slide alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "zbanner",
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
    .banner{
        width: 100%;
        height: 2.66rem;
        background: #f1f1f1;
        padding: 0.1rem 0;
    }
    .banner img{
        width: 100%;
        border-radius: 0.1rem;
    }
</style>