<template>
        <div class="Preferred-brand">
            <div class="Preferred-brand-title">
                <p>优选品牌</p>
                <p class="title-line"></p>
            </div>
            <div class="Preferred-brand-banner">
                <img src="../../.././public/img1/97e07556904f40ffbbc241ecfd2af741.jpg" alt="">
            </div>
        </div>
</template>

<script>
export default {
    name:"Preferred"
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