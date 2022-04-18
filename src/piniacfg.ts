import { createPinia, PiniaPluginContext } from 'pinia'
import { createApp, toRaw } from 'vue'

type Options = {
    key?: string
}
// 默认配置
const __piniaKey__ = 'yusummer'

// 将 key 存入 localstorage
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// 根据 key 从 localstorage 获取数据
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : null
}

// 定义 pinia 插件
const piniaPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context;
        // 从 localstorage 获取数据
        const data = getStorage(`${options.key ?? __piniaKey__}-${store.$id}`)
        // console.log(data)
        // state 有变化时, 将数据存入 localstorage
        store.$subscribe(() => {
            setStorage(`${options.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })

        console.log("store", store)

        return {
            ...data
        }
    }
}

// export piniaPlugin
export default piniaPlugin