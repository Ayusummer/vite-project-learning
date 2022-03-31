// 将图片信息转 base64 的一个 hook
import { onMounted } from 'vue'

// 定义 hook 参数类型
type Options = {
    el: string
}

export default function (options: Options): Promise<{ baseUrl: string }> {
    return new Promise((resolve) => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            console.log(img, "=====>")
            img.onload = () => {
                resolve({
                    baseUrl: base64(img)
                })
            }
        })
        // 将图片转 base64
        const base64 = (el: HTMLImageElement) => {
            // 定义画布
            const canvas = document.createElement('canvas')
            // 建立一个 CanvasRenderingContext2D 二维渲染上下文。
            const ctx = canvas.getContext('2d')
            canvas.width = el.width
            canvas.height = el.height
            ctx?.drawImage(el, 0, 0, el.width, el.height)
            // 方法返回一个包含图片展示的 data URI 
            return canvas.toDataURL('image/png')
        }
    })
}
