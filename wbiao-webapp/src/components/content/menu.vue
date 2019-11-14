<template>
  <div class="menu">
            <div class="menu-c" v-for="(item,i) in data.menuList" :key="i">
                <img :src=item.img alt="">
                <span>{{item.title}}</span>
            </div>
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/45df76ef8a1a441ea943bb803e4ed21b.png" alt="">-->
<!--                <span>女表</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/eb11f2ad31f94eb5a2db88fa60a08756.png" alt="">-->
<!--                <span>新品首发</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/0e31a03532054e85a210474cad4df9e7.png" alt="">-->
<!--                <span>新人礼</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/977a6ac9737b4defac7c7db4993ebdaa.png" alt="">-->
<!--                <span>天天抽奖</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/20f6b67968394c4e8620aec6b5103f34.png" alt="">-->
<!--                <span>名匠维修</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/37590d3798ee4bf89652ba2ddc2dae73.png" alt="">-->
<!--                <span>认证二手</span>-->
<!--            </div>-->
<!--            <div class="menu-c">-->
<!--                <img src="../../.././public/img1/4291e47184134a38a093a221758dbfd5.gif" alt="">-->
<!--                <span>11元秒杀</span>-->
<!--            </div>-->
        </div>
</template>

<script>
export default {
    name:"mmeun",
    props: ["data"]
}
</script>

<style scoped>
.menu{
    width: 100%;
    height: 1.94rem;
    /* background: chartreuse; */
    background-image: url(../../.././public/img1/eea563a23129475398cd8888212688c6.jpg);
    background-size: 100% 100%;
    padding: 12px 0;
    display: flex;
    flex-wrap: wrap;

}
.menu-c{
    height: 50%;
    width: 25%;
    /* background: violet; */
    font-size: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.menu-c img{
    width: 80%;
}
.menu-c span{
    font-size: 0.12rem;
    color: white;
}
</style>