<template>
  <UCard>
    <template #header>
      <div class="flex space-x-3 items-center">
        <span>{{ username }}</span>
      </div>
    </template>

    <span>{{ text }}</span>
  </UCard>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string,
  authorUsername: string,
}>()

const username = computed(() => `@${props.authorUsername}`)
</script>