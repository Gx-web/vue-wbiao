<template>
    <div>
        <xheader></xheader>
        <xmenu :data="data"></xmenu>
        <my-footer></my-footer>
    </div>
</template>

<script>
import xheader from "../components/xuanbiao/xheader";
import xmenu from "../components/xuanbiao/xmenu";
import footer from "../components/footer";
import xuanApi from "../apis/xuanApi";
export default {
    name:"xuanbiao",
    components:{
        "my-footer":footer,
        xheader,
        xmenu
    },
    data(){
        return {
            data:''
        }
    },
    methods: {
        async getXuanData(){
            this.data = await xuanApi.getXuanBiaoInfo()
            // console.log(this.data)
        }
    },
    beforeMount() {
        this.getXuanData()
    }

}
</script>

<style>

</style>