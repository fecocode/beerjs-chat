<template>
  <div v-if="showView">
    <SignIn />
  </div>
</template>
<script lang="ts" setup>
import { SignIn, useAuth } from 'vue-clerk';
import { computed } from 'vue';

const auth = useAuth()

const showView = computed(() => {
  return auth.isLoaded
})

// @ts-ignore
definePageMeta({
  layout: 'auth'
})
</script>