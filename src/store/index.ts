import { defineStore } from 'pinia'
import { Names} from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    // state 存储全局状态
    state: () => {
        return {
            current: 1,
            name:'233'
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        
    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        
    }
})