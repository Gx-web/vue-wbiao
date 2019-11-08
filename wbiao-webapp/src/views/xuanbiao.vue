<template>
    <div>
        <xheader></xheader>
        <xmenu></xmenu>
        <my-footer></my-footer>
    </div>
</template>

<script>
import xheader from "../components/xuanbiao/xheader";
import xmenu from "../components/xuanbiao/xmenu";
import footer from "../components/footer";
export default {
    name:"xuanbiao",
    components:{
        "my-footer":footer,
        xheader,
        xmenu
    }

}
</script>

<style>

</style>