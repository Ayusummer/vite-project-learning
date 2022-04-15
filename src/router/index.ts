//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "navigation",
        component: () => import("@/components/Navigation/Navigation.vue")
},
    {
    path: '/helloworld',
    name: 'helloWorld',
    component: () => import('../components/HelloWorld.vue')
}, {
    path: '/marquee',
    name: 'marquee',
    component: () => import('../components/Marquee.vue')
    },
    {
        path: '/goodsWarehouse',
        name: 'goodsWarehouse',
        component: () => import('@/components/GoodsWarehouse/footer.vue'),
        children: [
            {
                // path 设为空默认显示该子路由页面
                path: '',
                name: 'goodsWarehouseMain',
                component: () => import('@/components/GoodsWarehouse/GoodsWarehouse.vue')
            },
            {
                path: '/goodInfo/:id',
                name: 'goodInfo',
                component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
            }
        // {
        //     path: '/goodInfo',
        //     name: 'goodInfo',
        //     component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
        // },
        ]
    },
]

// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router