# vue3 reactive 双向绑定的问题

```vue
<template>
  <el-form>
    <el-form-item>
      <el-input v-model="filter.a" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="filter.b" />
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
    modelValue: {},
  },
);
const emit =
  defineEmits<{ (event: 'update:modelValue', modelValue: Record<string, string>): void }>();

// 根据传入值初始化
const filter = reactive({
  a: props.modelValue?.a ?? '',
  b: props.modelValue?.b ?? '',
});

// 提交
const handleEmit = () => {
  emit('update:modelValue', filter);
};
</script>
```

这个组件代码很简单，就是想要通过 `v-model` 双向绑定一个对象，点按钮的时候再更新 `modelValue`。

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

这就导致了 `emit` 无法更新这个对象，表现出 `v-model` 失效了一样。解决方法还挺简单的，换成 `ref` 就行了。

```vue
<template>
  <filter-form v-model="filter" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filter = ref({ a: '', b: '' });
</script>
```
