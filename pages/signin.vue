<template>
  <div v-if="showView" class="mt-5">
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
</script>