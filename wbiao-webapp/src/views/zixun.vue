<template>
  <div>
    <box :data="data"></box>
    <zfooter></zfooter>
  </div>
</template>

<script>
import zfooter from "../components/zixun/zfooter";
import box from "../components/zixun/box";
import zixunApi from "../apis/zixunApi";
export default {
    name:"zixun",
    components: {
        zfooter,
        box
    },
    data() {
      return {
        data:''
      }
    },
    methods: {
      async getZixunData() {
        this.data = await zixunApi.getzixunInfo()
      }
    },
    beforeMount() {
      this.getZixunData()
    }

}
</script>

<style>

</style>