<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
        id: index,
        number: (index % 9) + 1
    }
}))

console.log(list.value)

const random = () => {
    list.value = _.shuffle(list.value)
}
</script>

<template>
    <div>
        <button @click="random">random</button>
        <transition-group move-class="move_active" class="wraps" tag="div">
            <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
        </transition-group>
    </div>
</template>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center; // 居中
        align-items: center; // 垂直居中
    }
}

.move_active {
    transition: all 1.5s ease-in-out;
}
</style>