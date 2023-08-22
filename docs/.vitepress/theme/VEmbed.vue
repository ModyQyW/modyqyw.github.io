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
    title="embed"
    class="w-full"
    :class="{
      'aspect-video': aspect === 'video',
      'aspect-square': aspect === 'square',
      'aspect-auto': aspect === 'auto',
    }"
    :style="{
      aspectRatio: aspect,
    }"
    :src="src"
  ></iframe>
</template>
