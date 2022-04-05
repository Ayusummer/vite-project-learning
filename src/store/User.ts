import { defineStore } from 'pinia'
import { Names } from './store-name'
import { studentStore } from './student'

type User = {
    name: string,
    age: number
}

let result: User = {
    name: "233",
    age: 21
}

const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "咸鱼型233",
                age: 22
            })
        }, 2000)
    })
}
export const userStore = defineStore(Names.USER, {
    // state 存储全局状态
    state: () => {
        return {
            user: <User>{},
            name:""
        }
    },
    // computed like, 修饰一些值, 用于监视(计算)状态变化, 有缓存的功能
    getters: {
        newName(): string {
            return `$ - 名: ${this.name} - 年龄: ${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
    // methods, 可做同步异步, 提交state(用于修改 state 全局状态数据)
    actions: {
        // 写个同步方法, setuser
        setUser() {
            console.log("设置user")
            this.user = result
        },
        // 异步写法
        async setUserAsync() {
            const resultAsyn = await Login()
            this.user = resultAsyn
            this.setName("233Alter")
        },
        setName(name: string) {
            this.name = name
        }
    }
})