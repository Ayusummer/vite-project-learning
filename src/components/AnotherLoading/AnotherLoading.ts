import {App, createVNode, VNode, render} from 'vue'
import AnotherLoading from './AnotherLoading.vue'

export default {
    install(app: App) {
        const vnode: VNode = createVNode(AnotherLoading)
        render(vnode, document.body)
        console.log(AnotherLoading)
        console.log(vnode.component?.exposed)
        app.config.globalProperties.$AnotherLoading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }
        // app.config.globalProperties.$AnotherLoading.show()
    }
}