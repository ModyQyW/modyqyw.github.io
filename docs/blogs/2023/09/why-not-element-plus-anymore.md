# 为什么我不想再使用 element-plus？

我在 Vue 2 时代就在使用 [element-ui](https://element.eleme.cn/)，到了 Vue 3 时代我将它的官方 Vue 3 版本 [element-plus](https://element-plus.org/) 作为我的首选 UI 库。

我曾发布 [tailwind-extensions](https://github.com/ModyQyW/tailwind-extensions) 和 [unocss-preset-element-plus](https://github.com/ModyQyW/unocss-preset-element-plus) 两个包，方便将 `element-plus` 和 `tailwindcss`、`unocss` 结合起来使用。我还给 `element-plus` 提过两个 PR [#12549](https://github.com/element-plus/element-plus/pull/12549) 和 [#14062](https://github.com/element-plus/element-plus/pull/14062)，提高了 `FormRules` 类型质量。

`element-plus` 一直都是我快速开发的好伙伴。但最近面对各种业务或奇葩或实际的需求，我发现 `element-plus` 有些地方不能很好地满足我的需要。

## API 设计

基于我个人代码审美主观来说，我认为 `element-plus` 某些 API 设计不够统一，给我带来了割裂感。

如果我有以下一组数据，每个元素中的 `name` 作为文本显示，而 `value` 作为值被实际使用。

```typescript
const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
```

如果我需要多选，我可以使用 [el-checkbox](https://element-plus.org/zh-CN/component/checkbox.html)，下面就是一个例子。

```vue
<script setup lang="ts">
import { ElCheckbox, ElCheckboxGroup } from 'element-plus';
import { ref } from 'vue';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
const value = ref<number[]>([]);
</script>

<template>
  <el-checkbox-group v-model="value">
    <el-checkbox v-for="item of data" :key="item.value" :label="item.value">
      {{ item.name }}
    </el-checkbox>
  </el-checkbox-group>
</template>
```

这个例子很简单，但是却反映了 1 个不算大但也不算小的问题：`label` 会被用来作为值，但 `label` 这个单词本身并没有值的含义，这给我造成了认知混乱。

如果我需要单选，我可以使用 [el-radio](https://element-plus.org/zh-CN/component/radio.html)，下面就是一个例子。

```vue
<script setup lang="ts">
import { ElRadio, ElRadioGroup } from 'element-plus';
import { ref } from 'vue';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
const value = ref<number>();
</script>

<template>
  <el-radio-group v-model="value">
    <el-radio v-for="item of data" :key="item.value" :label="item.value">
      {{ item.name }}
    </el-radio>
  </el-radio-group>
</template>
```

和 `el-checkbox` 类似，`label` 也被用来作为值，这同样给我造成了认知混乱。

在选项数量较多时，我可以使用 [el-select](https://element-plus.org/zh-CN/component/select.html) 来做单选或者多选，下面是一个单选的例子，多选也相差不大。

```vue
<script setup lang="ts">
import { ElOption, ElSelect } from 'element-plus';
import { ref } from 'vue';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
const value = ref<number>();
</script>

<template>
  <el-select v-model="value">
    <el-option
      v-for="item of data"
      :key="item.value"
      :label="item.name"
      :value="item.value"
    ></el-option>
  </el-select>
</template>
```

和上面两个例子不同，`label` 作为文本，`value` 作为值，我认为这清晰明确得多。如果都采取 `el-select` 的 API 设计，对于我来说真的太好了。

我翻查过 `element-ui` 的文档，发现 `element-plus` API 设计大部分都跟随前者的 API 设计，我不太确定这里面是否带有历史包袱的因素。

## 功能支持

主观来说，我认为 `element-plus` 功能支持可以做得更好。

我曾经接到过一个实际的业务需求，有大概一百多条数据，需要支持多选，多选时需要默认隐藏大部分数据，还需要支持全选、全不选和反选。很自然地，我使用了 `el-select`，因为 `el-select` 提供了现成的多选和多选时隐藏大部分数据这两项的支持。

遗憾的是，在支持全选、全不选和反选时我却陷入了僵局：`el-select` 并没有提供相应的插槽，我没有办法在不修改源码的情况下优雅地将这些操作收纳到 `el-select` 的下拉菜单中。

最后，我只能将这些操作放到了 `el-select` 外部的下方，被评价“不好看但能用” 😅

```vue
<script setup lang="ts">
import { ElButton, ElOption, ElSelect } from 'element-plus';
import { ref } from 'vue';

const data = Array.from({ length: 100 }).map((_, index) => ({
  label: index,
  value: index,
}));
const value = ref<number>();
</script>

<template>
  <el-row>
    <el-col>
      <el-select
        v-model="value"
        collapse-tags
        collapse-tags-tooltip
        filterable
        multiple
      >
        <el-option
          v-for="item of data"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        ></el-option>
        <!-- 我想要的 -->
        <!-- <template #action>
          <el-space>
            <el-button text>全选</el-button>
            <el-button text>全不选</el-button>
            <el-button text>反选</el-button>
          </el-space>
        </template> -->
      </el-select>
    </el-col>
    <el-col>
      <!-- 实际做出来的 -->
      <el-space>
        <el-button text>全选</el-button>
        <el-button text>全不选</el-button>
        <el-button text>反选</el-button>
      </el-space>
    </el-col>
  </el-row>
</template>
```

如果 `el-select` 支持 Action Slot 该多好啊！那样我就可以轻轻松松地完成需求了，而且页面也优雅、好看一些。我曾经翻查过 [naive-ui](https://www.naiveui.com/) 和 [ant-design-vue](https://antdv.com/)，发现它们都支持这类场景，这让我更希望 `el-select` 能够增加这个功能了。

但是，添加这个功能支持需要花费大量时间。首先需要创建 Discussion 征询大家的意见，之后需要自己创建 PR 或者等待其他人来实现它。如果创建了 PR，可能需要一两个月的 Code Review，因为 `element-plus` 的维护者们真的太忙了。PR 合并后，还需要等待正式发版。

## 小结

简而言之，我认为 `element-plus` 很棒，但是某些 API 设计不够统一，给我带来了割裂感，功能支持有所欠缺，可以做得更好。在需要快速开发业务需求的场景下，这两方面的缺点被放大了不少，我的前端开发工作进度会因此有所卡顿。

客观来说，要改进这两方面问题并非一朝一夕之事。遗憾的是我没有太多时间参与改进或是等待改进，我现在在尝试 [naive-ui](https://www.naiveui.com/) 和 [ant-design-vue](https://antdv.com/)，它们给我的感觉都还不错。衷心希望 `element-plus` 越来越好，也感谢 `element-plus` 陪我走过几年前端时光 🙏
