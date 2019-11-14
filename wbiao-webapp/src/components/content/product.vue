<template>
  <list :data="data"></list>
</template>

<script>
import list from "./products/list"
export default {
    name:"product",
    components:{
        list
    },
    props: ["data"]
}
</script>

<style scoped>

</style>