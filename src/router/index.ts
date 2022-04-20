//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import { createVNode, render, VNode } from 'vue'
// 引入 LoadingBar
import LoadingBar from '@/components/Loading/LoadingBar.vue'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    // 导航守卫测试页面
    {
        path: '/',
        name: 'login',
        alias: '/login',
        // 路由元信息
        meta: {
            title: '登录页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/views/NavigationGuardTest/login.vue'),
    },
    // 导航守卫测试主页面(需要登录才能访问)(导航界面)
    {
        path: "/navigation",
        name: "navigation",
        meta: {
            title: '组件导航页面',
            transition: 'animate__fadeIn',
        },
        component: () => import("@/components/Navigation/Navigation.vue")
    },
    {
        path: '/helloworld',
        name: 'helloWorld',
        meta: {
            title: 'HelloWorld',
            transition: 'animate__fadeIn',
        },
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/marquee',
        name: 'marquee',
        meta: {
            title: '跑马灯',
            transition: 'animate__fadeIn',
        },
        component: () => import('../components/Marquee.vue')
    },
    {
        path: '/goodsWarehouse',
        name: 'goodsWarehouse',
        meta: {
            title: '商品仓库',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/GoodsWarehouse/footer.vue'),
        children: [
            {
                // path 设为空默认显示该子路由页面
                path: '',
                name: 'goodsWarehouseMain',
                meta: {
                    title: '商品仓库主页面',
                    transition: 'animate__fadeIn',
                },
                component: () => import('@/components/GoodsWarehouse/GoodsWarehouse.vue')
            },
            {
                path: 'goodInfo/:id',
                name: 'goodInfo',
                meta: {
                    title: '商品详情页面',
                    transition: 'animate__fadeIn',
                },
                component: () => import('@/components/GoodsWarehouse/GoodInfo.vue')
            },
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
        meta: {
            title: '命名视图',
            transition: 'animate__fadeIn',
        },
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
            name: "user1",
            meta: {
                title: 'user1',
                transition: 'animate__fadeIn',
            },
            components: {
                default: () => import('@/components/NamedViewsTest/A.vue'),
            }
        },
        {
            path: "user2",
            name: "user2",
            meta: {
                title: 'user2',
                transition: 'animate__fadeIn',
            },
            components: {
                b: () => import('@/components/NamedViewsTest/B.vue'),
                c: () => import('@/components/NamedViewsTest/C.vue')
            }
        }
        ]
    },
    {
        // 兄弟组件传参测试页面
        path: '/brotherComponentsTransferParams',
        name: 'brotherComponentsTransferParams',
        meta: {
            title: '兄弟组件传参测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/BrotherComponentsTransferParams/BCTP_parent.vue'),
    },
    // 测试页面
    {
        path: '/test',
        name: 'test',
        meta: {
            title: '测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/test.vue')
    },
    // Dialog 页面
    {
        path: '/dialog',
        name: 'dialog',
        meta: {
            title: 'Dialog页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/Dialog/Dialog.vue')
    },
    // ElementPlusBacktop测试页面
    {
        path: '/elementPlusBacktop',
        name: 'elementPlusBacktop',
        meta: {
            title: 'ElementPlusBacktop测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/ElementPlusTest/ElemntBackTopTest.vue')
    },
    // ElementFormTest 界面
    {
        path: '/elementFormTest',
        name: 'elementFormTest',
        meta: {
            title: 'ElementFormTest 界面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/ElementPlusTest/FormTest.vue')
    },
    // hook 测试页面
    {
        path: '/hookTest',
        name: 'hookTest',
        meta: {
            title: 'hook 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/HookUse/DIYHook.vue')
    },
    // pinia 测试页面
    {
        path: '/piniaTest',
        name: 'piniaTest',
        meta: {
            title: 'pinia 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/PiniaTest/PiniaTest.vue')
    },
    // 依赖注入测试页面
    {
        path: '/dependencyInjectionTest',
        name: 'dependencyInjectionTest',
        meta: {
            title: '依赖注入测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/ProvideInject/PI_A.vue')
    },
    // 生命周期测试组件
    {
        path: '/lifecycleTest',
        name: 'lifecycleTest',
        meta: {
            title: '生命周期测试组件',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/register/register.vue')
    },
    // deep 强改UI组件样式测试
    {
        path: '/deepTest',
        name: 'deepTest',
        meta: {
            title: 'deep 强改UI组件样式测试',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/ScopedDeepTest/ELementUIInputStyleChange.vue')
    },
    // transition 测试页面
    {
        path: '/transitionTest',
        name: 'transitionTest',
        meta: {
            title: 'transition 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/transition/transition_test.vue')
    },
    // 过渡列表测试页面
    {
        path: '/transitionListTest',
        name: 'transitionListTest',
        meta: {
            title: '过渡列表测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/transition_group/transition_group_test.vue')
    },
    // 组件拖曳测试页面
    {
        path: '/dragTest',
        name: 'dragTest',
        meta: {
            title: '组件拖曳测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/VueDirective/VueDirective.vue')
    },
    // 全局过滤器测试
    {
        path: '/globalFilterTest',
        name: 'globalFilterTest',
        meta: {
            title: '全局过滤器测试',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/VueGlobalProperties/stringFilterTest.vue')
    },
    // vuemodel 测试页面
    {
        path: '/vuemodelTest',
        name: 'vuemodelTest',
        meta: {
            title: 'vuemodel 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/vuemodel/vuemodel.vue')
    },
    // vueWatch 测试页面
    {
        path: '/vueWatchTest',
        name: 'vueWatchTest',
        meta: {
            title: 'vueWatch 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/VueWatch/vuewatch.vue')
    },
    // watchEffect 测试页面
    {
        path: '/watchEffectTest',
        name: 'watchEffectTest',
        meta: {
            title: 'watchEffect 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/VueWatch/vuewatchEffect.vue')
    },
    // vbind 测试页面
    {
        path: '/vbindTest',
        name: 'vbindTest',
        meta: {
            title: 'vbind 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/vuebind.vue')
    },
    // computed 购物车示例页面
    {
        path: '/computedTest',
        name: 'computedTest',
        meta: {
            title: 'computed 购物车示例页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/vuecomputedt_test.vue')
    },
    // VueOn 测试页面
    {
        path: '/VueOnTest',
        name: 'VueOnTest',
        meta: {
            title: 'VueOn 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/components/vueon.vue')
    },
    // less 测试页面
    {
        path: '/lessTest',
        name: 'lessTest',
        meta: {
            title: 'less 测试页面',
            transition: 'animate__fadeIn',
        },
        component: () => import('@/layout_less/less_layout.vue')
    },
]

// 创建 router
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // console.log("savaPosition", savedPosition);
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// 定义路由白名单
const whiteList = ['/login', '/404', '/401', '/lock']

// 将 LoadingBar 转成 VNode
const LoadingBarVNode: VNode = createVNode(LoadingBar)
// console.log("LoadingBarVNode如下:", LoadingBarVNode);
// 将 LoadingBarVNode 挂载到 body 上
// render(LoadingBarVNode, document.body)

// 定义 meta 中的属性类型, 以免后面使用时报类型错误
declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

//  使用导航守卫(前置守卫)
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    // 挂载 LoadingBar 到 body 上(折中做法)
    render(LoadingBarVNode, document.body)
    LoadingBarVNode.component?.exposed?.startLoading()
    // 若路由在白名单内或者已经登录(有token), 则放通
    if (whiteList.indexOf(to.path) !== -1 || localStorage.getItem('token')) {
        next()
    } else {
        // 否则跳转到登录页面
        next('/login')
    }
})

// 使用后置钩子
router.afterEach((to, from) => {
    LoadingBarVNode.component?.exposed?.stopLoading()
})


//导出router
export default router