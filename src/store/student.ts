import { defineStore } from 'pinia'
import { Names } from './store-name'

export const studentStore = defineStore(Names.STUDENT, {
    state: () => {
        return {
            stuNames: ['张三', '李四', '王五', '赵六', '田七']
        }
    }
})