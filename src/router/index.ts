//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    // 导航守卫测试页面
    {
        path: '/',
        name: 'login',
        alias: '/login',
        component: () => import('@/views/NavigationGuardTest/login.vue'),
    },
    // 导航守卫测试主页面(需要登录才能访问)(导航界面)
    {
        path: "/navigation",
        name: "navigation",
        component: () => import("@/components/Navigation/Navigation.vue")
    },
    {
        path: '/helloworld',
        name: 'helloWorld',
        component: () => import('../components/HelloWorld.vue')
    },
    {
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
                path: 'goodInfo/:id',
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
    {
        path: '/namedVIew',
        name: 'namedView',
        // 别名
        alias: ['/namedView1', '/namedView2'],
        // 字符串形式 redirect
        redirect: '/namedView/user1',
        // 对象形式 redirect
        // redirect:{path:'/namedView/user1'},
        // 函数形式 redirect
        // redirect: to => {
        //     // console.log("函数形式重定向")
        //     return {
        //         path: '/namedView/user1',
        //         query: {
        //             name: '233'
        //         }
        //     }
        // },
        component: () => import('@/components/NamedViewsTest/root.vue'),
        children: [{
            path: "user1",
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
        {
            path: "user2",
            components: {
                b: () => import('@/components/NamedViewsTest/B.vue'),
                c: () => import('@/components/NamedViewsTest/C.vue')
            }
        }
        ]
    },
    // 测试页面
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/test.vue')
    },
]

// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router