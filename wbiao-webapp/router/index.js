import Vue from "vue"
import VueRouter from "vue-router"
import shouye from "../src/views/shouye"
import zixun from "../src/views/zixun"
import xuanbiao from "../src/views/xuanbiao"
import cart from "../src/views/cart"
import my from "../src/views/my"
import main from "../src/views/main"
import login from "../src/views/login"
import register from "../src/views/register";

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:"/",redirect:"/main/shouye"}, // 设置首页
        {path:"/login",component:login},
        {path:"/register",component:register},
        {path:"/main",component:main,
            children:[
                {path:"shouye",component:shouye},
                {path:"zixun",component:zixun},
                {path:"xuanbiao",component:xuanbiao},
                {path:"cart",component:cart},
                {path:"my",component:my}
            ]
        },
    ]
})

export default router