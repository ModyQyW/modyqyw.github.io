# 我为什么不想再使用 element-plus？

我在 Vue 2 时代就在使用 [element-ui](https://element.eleme.cn/)，到了 Vue 3 时代我将它的官方 Vue 3 版本 [element-plus](https://element-plus.org/) 作为我的首选 UI 库。

我曾发布 [tailwind-extensions](https://github.com/ModyQyW/tailwind-extensions) 和 [unocss-preset-element-plus](https://github.com/ModyQyW/unocss-preset-element-plus) 两个包，方便将 `element-plus` 和 `tailwindcss`、`unocss` 结合起来使用。我还给 `element-plus` 提过两个 PR [#12549](https://github.com/element-plus/element-plus/pull/12549) 和 [#14062](https://github.com/element-plus/element-plus/pull/14062)，提高了 `FormRules` 类型质量。

`element-plus` 一直都是我快速开发的好伙伴。但最近面对各种业务或奇葩或实际的需求，我发现 `element-plus` 有些地方不能很好地满足我的需要。

## API 设计

如果我有以下一组数据，每个元素中的 `label` 作为文本显示，而 `value` 作为值被实际使用。

```typescript
const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
```

我可以使用 [checkbox](https://element-plus.org/zh-CN/component/checkbox.html) 来做多选渲染。`el-checkbox` 使用 `label` 作为选中状态的值，但它本身并没有值的含义，这给我带来了认知上的混乱。而如果我不使用默认插槽，`label` 还会用于文本显示，这也是官方例子中的做法。这让我感觉 `label` 所承担的东西太多了。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ElCheckboxGroup, ElCheckbox } from 'element-plus';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
const value = ref<number[]>([]);
</script>

<template>
  <el-checkbox-group v-model="value">
    <el-checkbox
      v-for="item of data"
      :key="item.value"
      :label="item.value"
    >
      {{ item.name }}
    </el-checkbox>
  </el-checkbox-group>
</template>
```

我可以使用 [radio](https://element-plus.org/zh-CN/component/radio.html) 来做单选。和 `el-checkbox` 类似，`label` 也被用来作为单选框的值。如果我不使用默认插槽，`label` 还会用于文本显示。和 `el-checkbox` 不同的是，官方例子这次用上了默认插槽。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ElRadioGroup, ElRadio } from 'element-plus';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 2 },
  { name: 'C', value: 3 },
];
const value = ref<number>();
</script>

<template>
  <el-radio-group v-model="value">
    <el-radio
      v-for="item of data"
      :key="item.value"
      :label="item.value"
    >
      {{ item.name }}
    </el-radio>
  </el-radio-group>
</template>
```

在选项数量较多时，我可以使用 [select](https://element-plus.org/zh-CN/component/select.html) 来做单选或者多选，下面是一个单选的例子，多选也相差不大。和上面两个不同，`label` 作为文本，`value` 作为值，我认为这更清晰明确一些。我个人更喜欢这种设计。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ElSelect, ElOption } from 'element-plus';

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

我认为 `checkbox` 和 `radio` 中 `label` 所承担的东西太多，给我带来了认知上的混乱，而 `select` 的 API 更清晰明确。如果都采取 `select` 的 API 设计，对于我来说真的太好了。但遗憾的是，`element-plus` 大部分 API 设计都跟随了 `element-ui` 的 API 设计，这多少带有一些历史包袱，再加上用户惯性，恐怕重新设计 API 遥遥无期。

## 功能支持

我曾经接到过一个实际的业务需求，有大概一百多条数据，需要支持多选，多选时需要默认隐藏大部分数据，还需要支持全选、全不选和反选。

很自然地，我使用了 `select`，`select` 提供了现成的多选和多选时隐藏大部分数据这两项的支持，但是在支持全选、全不选和反选时我却陷入了僵局：`select` 并没有提供相应的插槽，我没有办法在不修改源码的情况下优雅地将这些操作收纳到 `select` 的下拉菜单中。最后，我只能将这些操作放到了 `select` 下面，勉强地实现了这个需求，同时拿到了“不好看但能用”的评价。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ElSelect, ElOption, ElButton } from 'element-plus';

const data = Array.from({ length: 100 }).map((_, index) => ({
  value: index,
  label: index,
}));
const value = ref<number>();
</script>

<template>
  <el-row>
    <el-col>
      <el-select
        v-model="value"
        multiple
        filterable
        collapse-tags
        collapse-tags-tooltip
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

如果 `select` 支持 Action Slot 该多好啊！那样我就可以轻轻松松地完成需求了，而且页面也优雅、好看一些。

但是，如果希望添加这个功能支持，需要花费大量时间。首先需要创建 Discussion 征询大家的意见，之后需要自己创建 PR 或者等待其他人来实现它。如果创建了 PR，可能需要一两个月的 Code Review，因为 `element-plus` 的维护者们真的太忙了。PR 合并后也不能立刻使用，因为还需要等待正式发版。这一轮下来，需要花费大量时间，大部分人的贡献热情也会因此消退。

## 小结

简而言之，我认为 `element-plus` 很棒，但是 API 设计不够清晰明确，带有历史包袱，而功能支持也不是特别多，要贡献功能需要花费大量时间。在需要快速开发业务需求的场景下，API 设计和功能支持两方面的缺点被严重放大了，我的前端开发工作进度会因此有所卡顿。

我现在在尝试 [naive-ui](https://www.naiveui.com/) 和 [ant-design-vue](https://antdv.com/)，给我的感觉都还不错。也感谢 `element-plus` 陪我走过几年前端时光，希望 `element-plus` 越来越好 🙏
