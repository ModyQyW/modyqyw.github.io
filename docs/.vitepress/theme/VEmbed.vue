<script setup lang="ts">
defineOptions({
  name: 'VEmbed',
});

withDefaults(
  defineProps<{
    aspect?: 'auto' | 'square' | 'video' | string;
    src: string;
  }>(),
  {
    aspect: 'square',
  },
);
</script>

<template>
  <iframe
    class="w-full"
    :class="{
      'aspect-video': aspect === 'video',
      'aspect-square': aspect === 'square',
      'aspect-auto': aspect === 'auto',
    }"
    :src="src"
    :style="{
      aspectRatio: aspect,
    }"
    title="embed"
  ></iframe>
</template>
