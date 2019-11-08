<template>
    <div class="cartbox">
        <cheader></cheader>
        <loginTips></loginTips>
        <cartPic></cartPic>
        <btnsWrap></btnsWrap>
        <my-footer></my-footer>
    </div>
</template>

<script>
import footer from "../components/footer";
import cheader from "../components/cart/cheader";
import loginTips from "../components/cart/loginTips";
import cartPic from "../components/cart/cartPic";
import btnsWrap from "../components/cart/btnsWrap";
export default {
    name:"cart",
    components:{
        "my-footer":footer,
        cheader,
        loginTips,
        cartPic,
        btnsWrap
    }

}
</script>

<style>
    .cartbox{
        background: #f1f1f1;
        height: 6.6rem;
    }
</style>