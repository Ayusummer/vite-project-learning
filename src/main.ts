import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/Card.vue'
import AnotherLoading from './components/AnotherLoading/AnotherLoading'

// export const app = createApp(App)
const app = createApp(App)


// 定义 Filter 类型, 作为 $filters 的返回类型
type Filter = {
    format: <T>(str: T) => string
}

// Loading 插件类型定义
type ALP = {
    show: () => void,
    hide: () => void
}

// 添加声明
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env: string
        // Loading 插件
        $AnotherLoading: ALP
    }
}

// 注册全局过滤器
app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `233${str}`;
    }
}

app.config.globalProperties.$env = 'dev'

// 注册 Loading 插件
app.use(AnotherLoading)

// 注册全局组件以及别名
app.component('Card', Card)
    .mount('#app')

