<template>
  <div id="box">
        <div id="header">
            <a href="#">
                <img :src=data.newUser alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"myheader",
    props:["data"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box{
    width: 100%;
}
#header{
    width: 100%;
    height: 0.65rem;
    /* background: wheat; */
    font-size: 0;
}
#header img{
    width: 100%;
}
</style>
