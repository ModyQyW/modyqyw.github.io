# vue3 自动解包

只有两种情况 `ref` 会被自动解包。

`ref` 在 vue3 `template` 中**作为顶层属性被访问**时，会被自动解包 `unwrap`。

```vue
<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const increase = () => {
  count.value++;
};
</script>

<template>
  <button @click="increase">
    <!-- 不需要写 count.value -->
    {{ count }}
  </button>
</template>
```

`ref` **作为反应式对象 `reactive object` 的一个属性被访问 access 或更改 mutate** 时，也会被自动解包。

```vue
<script setup lang="ts">
const count = ref(0);
const state = reactive({
  count,
});
console.log(state.count); // 0
state.count = 1;
console.log(count.value); // 1
```

我一开始看到自动解包，感觉还可以，省了点事，但在实际使用后，认为它带来了更大的心智负担。

为什么在 `template` 里不需要额外的 `.value`，但是在 `script` 里又需要呢？而且，它们还是在同一个文件里。

我觉得这实际上是一种分裂，要么都要 `.value`，要么都不要 `.value`。在组件场景里这个问题可能更严重，我想传递的是一个 `ref`，但由于自动解包，实际传递的是 `ref.value`。

vue3 提出了响应式语法糖 `reactivity transform`，想要解决这个问题。

```vue
<script setup lang="ts">
// 不需要从 vue 中引入
// 因为这是编译宏 compile-time macro
let count = $ref(0);
const increase = () => {
  count++;
};
</script>

<template>
  <button @click="increase">{{ count }}</button>
</template>
```

现在看着统一多了。额外还有一个 `$()`，可以配合相关库使用。如果这个特性在 3.3 稳定了下来，开发时的心智负担应该会小一些。

参考链接：

- <https://vuejs.org/guide/essentials/reactivity-fundamentals.html>
