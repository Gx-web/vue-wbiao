import Vue from "vue"
import VueRouter from "vue-router"
import shouye from "../views/shouye"
import zixun from "../views/zixun"
import xuanbiao from "../views/xuanbiao"
import cart from "../views/cart"
import my from "../views/my"
import main from "../views/main"
import login from "../views/login"
import register from "../views/register";

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