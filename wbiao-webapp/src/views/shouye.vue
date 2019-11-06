<template>

    <div>
        <my-header></my-header>
        <my-search></my-search>
        <my-main></my-main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import footer from "../components/footer"
import header from "../components/header"
import search from "../components/search"
import main from "../components/main"
export default {
    name:"shouye",
    components:{
        "my-footer":footer,
        "my-header":header,
        "my-search":search,
        "my-main":main
    }

}
</script>

<style>

</style>