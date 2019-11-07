<template>
    <div>
        <box></box>
        <my-footer></my-footer>
    </div>
</template>

<script>
import footer from "../components/footer"
import box from "../components/my/box"
export default {
    name:"my",
    components:{
        "my-footer":footer,
        box
    }

}
</script>

<style>

</style>