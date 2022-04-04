<script setup lang="ts">
import { useTestStore } from '@/store';

const useTest = useTestStore()

// 直接修改属性值实现 useTest.current++
const useTestChange1 = () => {
  useTest.current++
}
// 方法2: 通过$patch 批量修改属性值
const useTestChange2 = () => {
  useTest.$patch({
    name: '马克杯',
    current: 10
  })
}
// 方法3: $patch 函数式写法
const useTestChange3 = () => {
  useTest.$patch( (state) => {
    state.name = '立牌'
    state.current = 5
  })
}
// 方法4: 通过原始对象修改整个实例(缺点在于需要修改state所有属性, 因此一般不建议使用)
const useTestChange4 = () => {
  useTest.$state = {
    name: '小夜灯',
    current: 7
  }
}
// 方法5: 通过 actions 修改
const useTestChange5 = () => {
  useTest.currentIncrement()
}
</script>

<template>
    <div>pinia: {{ useTest.name }} -- ${{ useTest.current }}</div>
    <button @click="useTestChange1">increment-直接修改属性值</button>
    <button @click="useTestChange2">通过$patch批量修改属性</button>
    <button @click="useTestChange3">$patch的函数式写法</button>
    <button @click="useTestChange4">通过原始对象修改整个实例</button>
    <button @click="useTestChange5">通过 actions 修改</button>
</template>

<style lang="less" scoped>
</style>