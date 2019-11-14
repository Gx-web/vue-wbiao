<template>
    <div>
        <my-header :data="data"></my-header>
        <my-search></my-search>
        <my-main :data="data"></my-main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import footer from "../components/footer"
import header from "../components/header"
import search from "../components/search"
import main from "../components/main"
import homeApi from "../apis/homeApi";
export default {
    name:"shouye",
    components:{
        "my-footer":footer,
        "my-header":header,
        "my-search":search,
        "my-main":main
    },
    data(){
      return {
          data:''
      }
    },
    methods: {
        async getHomeData(){
            this.data = await homeApi.getHomeInfo()
            // console.log(this.data.newUser)
        }
    },
    beforeMount() {
        this.getHomeData()
    }

}
</script>

<style>

</style>