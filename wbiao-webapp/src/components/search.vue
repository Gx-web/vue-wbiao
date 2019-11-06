<template>
    <div id="search">
        <div class="search-logo">
            <img src="@/../public/img1/head-logo.png" alt="">
        </div>
        <div class="search-content">
            <div class="search-content-s">
                <a href="#"></a>
                <span>购表享12期分期免息优惠</span>
            </div>
        </div>
        <div class="search-service">
            <a href="#"></a>
        </div>
    </div>
</template>

<script>
export default {
    name:"search"
}
</script>

<style scoped>
#search{
    width: 100%;
    height: 0.5rem;
    /* background: yellow; */
    display: flex;
    justify-content: space-between;
}
.search-logo{
    width: 0.7rem;
    height: 100%;
    /* background: darkblue; */
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-logo img{
    width: 70%;
}
.search-content{
    height: 100%;
    width: 65%;
    /* background: chartreuse; */
    display: flex;
    align-items: center;
}
.search-content-s{
    width: 100%;
    height: 60%;
    background:#f1f1f1;
    border-radius: 1rem;
    font-size: 0;
    display: flex;
    align-items: center;
}
.search-content-s a{
    display: inline-block;
    width: 0.3rem;
    height: 100%;
    /* background: rgb(0, 60, 255); */
    background-image: url(../.././public/img1/a.png);
    background-position: -272px 37px;
    /* background-size: 100% 100%; */
}
.search-content-s span{
    font-size: 0.12rem;
    color: #999;
}
.search-service{
    width: 0.44rem;
    height: 100%;
    /* background: chocolate; */
    font-size: 0;
}
.search-service a{
    display: inline-block;
    height: 100%;
    width: 100%;
    /* background: chartreuse; */
    background-image: url(../.././public/img1/a.png);
    background-position: -835px -447px;
}
</style>