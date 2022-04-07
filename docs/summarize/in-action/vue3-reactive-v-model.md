# vue3 reactive + v-model 双向绑定

```vue
<template>
  <el-form>
    <el-form-item>
      <el-input v-model="filter.a" />
    </el-form-item>
    <el-form-item>
      <el-button @click="handleEmit">ok</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

defineOptions({
  name: 'FilterForm',
});
const props = withDefaults(
  defineProps<{
    modelValue?: Record<string, string>;
  }>(),
  {
    modelValue: () => ({}),
  },
);
const emit = defineEmits<{
  (event: 'update:modelValue', modelValue: Record<string, string>): void;
}>();

// 根据传入值初始化
const filter = reactive({
  a: props.modelValue?.a ?? '',
});

// 提交
const handleEmit = () => {
  emit('update:modelValue', filter);
};
</script>
```

这个组件想要通过 `v-model` 双向绑定一个对象，点按钮的时候再更新 `modelValue`。

问题出在调用上。我在调用时，直接传递了一个 `reactive`。

```vue
<template>
  <filter-form v-model="filter" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const filter = reactive({ a: '', b: '' });
</script>
```

我们都知道，vue2 选项式 API 的时候，直接通过 `v-model` 双向绑定一个对象不是什么大问题。但在 vue3 组合式 API，你无法直接修改一个响应式对象，即使这个响应式对象是用 `let` 声明的也不行。

```ts
// ×
filter = reactive({ a: 'a', b: 'b' });
// √
filter.a = 'a';
filter.b = 'b';
```

这部分原理在 vue3 官方文档里说得很清楚。摘录如下：

> 因为 Vue 的响应式系统是通过 property 访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地 “替换” 一个响应式对象。

`emit` 提交了一个新的对象，没有保持相同引用，所以无法触发响应式系统，表现出 `v-model` 失效了一样。解决方法还挺简单的，换成 `ref` 就行了。

```vue
<template>
  <filter-form v-model="filter" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filter = ref({ a: '', b: '' });
</script>
```

更新时等同于修改 `.value`。

```ts
filter.value = newFilter;
```

如果你正在烦恼 `.value` 的问题，你应该看看响应性语法糖 `reactivity transform`，它完美地解决了这个问题。

参考链接如下：

- [Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth.html)
