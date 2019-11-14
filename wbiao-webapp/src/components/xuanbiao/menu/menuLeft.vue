<template>
    <div class="menu-left">
        <ul>
            <li v-for="(list,i) in data.nav" :key="i">
                <a href="#" @click="changeColor(i)" :class="i==color?'tt':''">{{list}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menuLeft",
        props: ["data"],
        data() {
            return {
                color:0
            }
        },
        methods:{
            changeColor(index){
                this.color = index
            }
        }
    }
</script>

<style scoped>
    .menu-left{
        width: 0.84rem;
        border-right: 0.01rem solid rgb(197, 196, 196);
    }
    .menu-left li{
        display: flex;
        height: 0.5rem;
        width: 100%;
        /* background: #515151; */
        align-items: center;
        justify-content: center;
        border-bottom: 0.01rem solid rgb(218, 214, 214);
    }
    .tt{
        display: block;
        height: 0.21rem;
        width: 0.61rem;
        background: #515151;
        border-radius: 1rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.21rem;
        color: white;
    }
    .menu-left li a{
        display: block;
        height: 0.21rem;
        width: 0.61rem;
        /* background: #515151; */
        border-radius: 1rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.21rem;
        color: gray;
    }
</style>