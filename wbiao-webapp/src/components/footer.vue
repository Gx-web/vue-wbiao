<template>
  <div id="footer">
        <div class="footer-nav">  
            <router-link :to="'/main/shouye'">
            <img src="@/../public/img1/icon-e-index-b.png" alt="">
                <span>首页</span>
            </router-link>
        </div>
        <div class="footer-nav">
            <router-link :to="'/main/zixun'">
            <img src="@/../public/img1/icon-e-magz-a.png" alt="">
                <span>资讯</span>
            </router-link>
        </div>
        <div class="footer-nav">
            <router-link :to="'/main/xuanbiao'">
            <img src="@/../public/img1/icon-e-select-a.png" alt="">
                <span>选表</span>
            </router-link>
        </div>
        <div class="footer-nav">
            <router-link :to="'/main/cart'">
            <img src="@/../public/img1/icon-e-cart-a.png" alt="">
                <span>购物车</span>
            </router-link>
            
        </div>
        <div class="footer-nav">
            <router-link :to="'/main/my'">
            <img src="@/../public/img1/icon-e-mine-a.png" alt="">
                <span>我的</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"myfooter"
}
</script>

<style scoped>
#footer{
    width: 100%;
    height: 0.5rem;
    background: white;
    position: fixed;
    bottom: 0;
    display: flex;
}
.footer-nav{
    width: 20%;
    height: 100%;
    /* background: fuchsia; */
    font-size: 0;
}
.footer-nav a{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.footer-nav img{
    width: 40%;
}
.footer-nav span{
    font-size: 0.11rem;
}
</style>