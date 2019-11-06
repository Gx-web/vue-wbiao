<template>
    <div class="channel-ten">
            <div class="channel-ten-c">
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/2ab7ed4035f6447ea77e7c575de2c1c3.jpg" alt="">
                </div>
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/b23e022bd6744c29bac92fd6a4a7341b.jpg" alt="">
                </div>
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/8cc60edf27d6414abaa9c60332ebd4ce.jpg" alt="">
                </div>
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/72f08aab48284db0b963fcf1c5c1c3bf.jpg" alt="">
                </div>
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/5a48d79c951f46bd9c126b2c48594280.jpg" alt="">
                </div>
                <div class="channel-ten-c-pic">
                    <img src="../../.././public/img1/834e0146711849239be9902297c4b97a.jpg" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"channel-ten"
}
</script>

<style scoped>
.channel-ten{
    width: 100%;
    height: 2.1rem;
    /* background: wheat; */
    margin-top: 0.2rem;
    overflow-x: scroll;
}
/* 取消滚动条 */
.channel-ten::-webkit-scrollbar { width: 0 !important;display: none; }
.channel-ten-c{
    width: 9.31rem;
    height: 100%;
    display: flex;
}
.channel-ten-c-pic{
    width: 1.55rem;
    height: 100%;
    /* background: yellowgreen; */
}
.channel-ten-c-pic img{
    width: 100%;
    height: 100%;
}
</style>